---
name: release-flow
description: 「1. バージョニングをインクリメント」「2. PR作成」「3. タグ付け」の3段階でリリース手順を確実に実行するためのスキル。対象パッケージ抽出・次バージョン提案の根拠付け・release PR（`release@<YYYYMMDD>`）のタイトル/ラベル/本文フォーマット・`pnpm tagging`（origin への破壊的操作 = npm publish トリガー）を含む。バージョンの確定と PR のマージは必ずユーザー自身が行い、エージェントは代行しない。各ステップの確認を省略しない。`/release-flow` で明示的に起動する他、パッケージのリリース・バージョンアップ作業を検知した際にも使う。
---

# release-flow

このスキルは、本リポジトリの `eslint-config-sc-*` / `eslint-plugin-sc-js` パッケージをリリースするための手順書です。「1. バージョニングをインクリメント」「2. PR 作成」「3. タグ付け」の3段階で構成されます。ステージ3の `pnpm tagging`（`scripts/tagging/index.mjs`）は git tag を origin に push する操作であり、push した瞬間に対応する `<package>-cd.yml` が起動して npm publish まで進みます。取り消しが難しい操作を含むため、途中の確認ステップを飛ばしたり順序を入れ替えたりしてはいけません。

## release PR の規約（PR #154 `release@20260418` / #173 `release@20260519` の実績から抽出）

- **タイトル**: `release@<YYYYMMDD>`（PR 作成日）
- **base/head**: `base=main`, `head=develop`（専用リリースブランチは切らず、develop 上で直接バージョンを上げる）
- **ラベル**: `01.release` 固定 + リリース対象パッケージごとに `00.<packages配下のディレクトリ名>`（例: `packages/eslint-config-js` → `00.eslint-config-js`、`packages/eslint-plugin-js` → `00.eslint-plugin-js`。npm 公開名に含まれる `-sc-` はラベル名には含まれない）
- **本文**: パッケージごとに `## <npm公開パッケージ名>@<version>` 見出し＋変更点の箇条書き（`<type>: <description>` 形式、英語）。例:
    ```
    ## eslint-config-sc-all@0.2.1
    - chore: upgrade support node version to 22, 24, 26
    - chore: maintenance packages
    ```
    この箇条書きはコミットログそのままではなく、リリース時点での要約（複数コミットをまとめた記述）です。

## 手順

### 1. バージョニングをインクリメント

1. **対象パッケージ抽出**: `packages/*` それぞれについて、最新の `<npm公開名>/v*` タグ（`git tag -l "<name>/v*" --sort=-v:refname`）を特定し、それ以降に当該パッケージへ影響するコミットを収集する。対象パスは `packages/<dir>` に加え、CLAUDE.md の copy-shared 判定に従いディレクトリ名が `eslint-config` 系なら `modules/shared-for-eslint-config/src`、`eslint-plugin` 系なら `modules/shared-for-eslint-plugin/src` も含める。該当コミットが無いパッケージは対象外とする
2. **変更内容の要約**: 収集したコミットを `<type>: <description>` 形式の箇条書きに要約し、パッケージごとの変更点ドラフトを作成してユーザーに提示する（ステージ2の PR 本文の元になる）。複数パッケージが同じ `modules/shared-for-eslint-*` 変更の影響を受ける場合、同一の箇条書きが複数パッケージに重複して現れてよい
3. **次バージョン提案（根拠提示・承認必須）**: パッケージごとにコミット種別を機械的に判定し、semver bump を提案する
    - breaking 変更（`!` マーカーまたは `BREAKING CHANGE:` フッター）を含む → major
    - `feat` を含む → minor
    - それ以外（`fix`/`chore`/`refactor`/`perf`/`docs`/`test`/`style` 等）→ patch
      現在バージョン・提案バージョン・bump 種別・判定根拠（該当コミット一覧）を一覧表示する。ただしこれはあくまで**提案**であり、実際にどのバージョンにするかの**確定は必ずユーザーが行う**。エージェントは提案・根拠提示までを担当し、ユーザーが確定した具体的なバージョン番号を明示的に受け取るまで次の手順に進まない（「OK」等の曖昧な同意のみでは進めない）。`.claude/rules/implementation-rules.md` により `package.json` 編集前の承認は必須で、省略しない
4. **peerDependencies floor 確認**: `packages/eslint-config-all/package.json` の `peerDependencies` に対象パッケージが含まれる場合、下限バージョン更新の要否をユーザーに確認する
5. **バージョン更新の適用**: 承認された内容で対象 `package.json` の `version`（および必要な peerDependencies floor）を更新する
6. **コミット**: `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージ（例: `chore(packages): bump versions for release@<YYYYMMDD>`）を提示し、承認を得てから commit する

### 2. PR 作成

1. **release PR 作成（develop→main）**: 上記「release PR の規約」に沿って以下を組み立てる
    - タイトル: `release@<YYYYMMDD>`（当日日付。明示指示があればそれに従う）
    - base: `main` / head: `develop`
    - ラベル: `01.release` + 対象パッケージごとの `00.<dir-name>`（`gh label list` で存在確認。無い場合はユーザーに確認する）
    - 本文: パッケージごとに `## <npm公開名>@<version>` 見出し＋ステージ1手順2で作成した変更点箇条書き
    - push・PR 作成前に、タイトル/ラベル/base/head/本文をすべて提示しユーザーの明示的な承認を得る。承認前に実行しない（未 push なら `git push -u origin develop`、追跡済みなら `git push`、その後 `gh pr create --base main --head develop --title ... --label ... --body ...`）
    - **PR のマージはユーザー自身が行う**（GitHub 上、または手元の `gh pr merge` 等）。エージェントはマージ操作を絶対に実行しない（承認や依頼があっても実行しない）。マージ完了は `gh pr view --json state` 等の読み取り専用コマンドで確認し、マージ済みを確認できてからステージ3に進む

### 3. タグ付け

1. **main マージの確認**: release PR が `main` にマージ済みであることを確認する（`git fetch` の上、`main` に手順1で更新したバージョンが反映されていること）
2. **タグ付け（破壊的操作・確認必須）**: main ブランチ上で対象パッケージごとに `pnpm --filter <package-name> run tagging` を実行する前に、対象パッケージ名・バージョン・作成されるタグ文字列（`<package-name>/v<version>`）を明示し、ユーザーの明示的な承認を得る。承認前に実行しない
3. **CD 監視**: 該当 `<package>-cd.yml` の `check-publish` / `pre-check-lint` / `pre-check-spell-check` / `pre-check-type-check` / `pre-check-dry-run` / `publish` ジョブが成功することを確認する。失敗した場合は原因を報告し、タグの削除・再 push 等の対応方針をユーザーに確認してから進める
4. **完了報告**: 公開された npm パッケージ名・バージョン・作成したタグ一覧・release PR の URL をユーザーに報告する

## 注意点

- **次バージョンの確定は必ずユーザーが行う。** エージェントは提案・根拠提示までで、確定はユーザーの明示的なバージョン番号指定を必須とする。エージェントが独自に決定して `package.json` へ反映することはしない
- **PR のマージは必ずユーザー自身が行う。** エージェントは `gh pr merge` 等のマージ操作を絶対に実行しない（ユーザーからの承認・依頼があっても実行しない）
- PR 本文のパッケージ変更点箇条書きは、実績（PR #154/#173）に合わせて `<type>: <description>` の英語表記とする。CLAUDE.md の「PR 本文は日本語」原則の例外として、コミットメッセージに準じた技術的な変更点要約であることを踏まえた扱いとする（PR の他セクションを設ける場合は日本語で書く）
- ステージ1のバージョン更新（手順5）は `.claude/rules/implementation-rules.md` の対象（コード変更）であり、手順3の事前承認を省略しない
- ステージ2（push・PR 作成）は origin への push かつ GitHub 上に公開される操作であり、確認を省略しない
- ステージ3のタグ付け（`pnpm tagging` の実行）は origin への push かつ npm publish のトリガーであり、本リポジトリで最も取り消しが難しい操作の一つ。実行前確認を絶対に省略しない
- 複数パッケージを同時にリリースする場合、パッケージごとに個別にタグ付け・CD 監視を行う（1タグ = 1 CD 実行のため、まとめて実行しない）
- タグ付けミス（誤ったバージョン等）に気づいた場合、タグ削除や再 push はさらに取り消し困難な操作を伴うため、対応前に必ずユーザーに確認する
- `scripts/tagging/index.mjs` は `main` ブランチ以外では失敗する仕様のため、ステージ3は必ず main ブランチ上で実行する
