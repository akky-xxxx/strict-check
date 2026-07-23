---
name: release-flow
description: 対象パッケージ選定 → バージョン更新 → main マージ → タグ push → CD 監視、の一連のリリース手順を確実に実行するためのスキル。`pnpm tagging` は origin への破壊的操作（タグ push = npm publish トリガー）を含むため、各ステップの確認を省略しない。`/release-flow` で明示的に起動する他、パッケージのリリース・バージョンアップ作業を検知した際にも使う。
---

# release-flow

このスキルは、本リポジトリの `eslint-config-sc-*` / `eslint-plugin-sc-js` パッケージをリリースするための手順書です。`pnpm tagging`（`scripts/tagging/index.mjs`）の実行は git tag を origin に push する操作であり、push した瞬間に対応する `<package>-cd.yml` が起動して npm publish まで進みます。取り消しが難しい操作を含むため、途中の確認ステップを飛ばしたり順序を入れ替えたりしてはいけません。

## 手順

1. **対象パッケージの確認**: `git log`/`git diff` 等で main 未反映のパッケージ変更を洗い出し、リリース対象パッケージを確定する
2. **バージョン方針の判断**: 変更内容（破壊的変更/機能追加/バグ修正）から対象パッケージごとに patch/minor/major を判断し、ユーザーに提示して承認を得る
3. **バージョン更新**: 対象パッケージの `package.json` の `version` を更新する。`packages/eslint-config-all/package.json` の `peerDependencies` に対象パッケージが含まれる場合、下限バージョンの更新要否を確認する
4. **コミット**: `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージ（例: `chore(packages): bump ... versions`）をユーザーに提示し、明示的な承認を得てから commit する
5. **develop → main への反映**: PR 作成〜マージを行う（`.claude/rules/commit-rules.md` と PR テンプレートに従う。push や PR 作成はユーザーの確認を必須とする）
6. **タグ付け（破壊的操作・確認必須）**: main ブランチ上で対象パッケージごとに `pnpm --filter <package-name> run tagging` を実行する前に、対象パッケージ名・バージョン・作成されるタグ文字列（`<package-name>/v<version>`）を明示し、ユーザーの明示的な承認を得る。承認前に実行しない
7. **CD 監視**: 該当 `<package>-cd.yml` の `check-publish` / `pre-check-lint` / `pre-check-spell-check` / `pre-check-type-check` / `pre-check-dry-run` / `publish` ジョブが成功することを確認する。失敗した場合は原因を報告し、タグの削除・再 push 等の対応方針をユーザーに確認してから進める
8. **完了報告**: 公開された npm パッケージ名・バージョン・作成したタグ一覧をユーザーに報告する

## 注意点

- ステップ6（`pnpm tagging` の実行）は origin への push かつ npm publish のトリガーであり、本リポジトリで最も取り消しが難しい操作の一つ。実行前確認を絶対に省略しない
- 複数パッケージを同時にリリースする場合、パッケージごとに個別にタグ付け・CD 監視を行う（1タグ = 1 CD 実行のため、まとめて実行しない）
- タグ付けミス（誤ったバージョン等）に気づいた場合、タグ削除や再 push はさらに取り消し困難な操作を伴うため、対応前に必ずユーザーに確認する
- `scripts/tagging/index.mjs` は `main` ブランチ以外では失敗する仕様のため、ステップ6は必ず main ブランチ上で実行する
