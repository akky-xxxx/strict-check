---
name: green-keeping
description: 依存関係をカテゴリ単位で棚卸し・更新し、`pnpm check-code`/`ws-check-code`/`dry-run` で都度グリーンな状態を維持しながら進めるためのスキル。依存関係の変更は着手前にカテゴリと更新方針をユーザーに提示し承認を得る。`/green-keeping` で明示的に起動する他、依存関係の一括更新作業を検知した際にも使う。
---

# green-keeping

このスキルは、本リポジトリの依存関係を安全に最新化するための手順書です。過去のグリーンキーピング作業（`chore(*): upgrade dependencies related <category>` のコミット列）から抽出したパターンに従い、カテゴリ単位で「更新 → 検証 → コミット」を繰り返します。依存関係の変更は `CLAUDE.md` 作業ルール7・`.claude/rules/implementation-rules.md` により着手前の承認が必須のため、この確認ステップを飛ばしてはいけません。

## 手順

1. **棚卸し**: `pnpm outdated -r`, `pnpm upgrade -i -L -r` 等で root / `modules/*` / `packages/*` / `dry-run/*` 全体の更新可能な依存を洗い出す
2. **カテゴリ分類と方針提示（承認必須）**: 過去の実績パターン（eslint 関連, typescript 関連, react 関連, test 関連, commitlint 関連, prettier, cspell, その他個別ツール）を踏襲してカテゴリ分けし、各カテゴリの対象パッケージ・バージョン帯（patch/minor/major）をユーザーに提示する。特に major バージョンアップは breaking changes の有無を確認し、他カテゴリと分離して提示する。着手前に承認を得る
3. **カテゴリ単位での更新実行**: 承認されたカテゴリを1つずつ、対象範囲（root / `modules/*` / `packages/*` / `dry-run/*`）すべての `package.json` を更新する。`modules/*` を更新した場合は `pnpm bootstrap` を実行して各パッケージへ反映する
4. **カテゴリ単位での検証**: 更新のたびに `pnpm check-code`（ルート）と `pnpm ws-check-code`（全ワークスペース、lint/spell-check/type-check + dry-run + test を含む）を実行する。config パッケージに影響する場合は `pnpm dry-run` の実行結果も確認する
5. **カテゴリ単位でのコミット**: `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージ（`chore(*): upgrade dependencies related <category>` 形式）を提示し、承認を得てから commit する
6. **検証失敗時の修正**: 新しい recommended ルールの追加やバージョン要件変更などで検証が落ちた場合、原因ごとに分けて修正する（例: peer dependency floor の引き上げは `fix(<package>): ...`、dry-run サンプルコードの追従は `test(dr-<package>): ...`）。修正コミットも手順5と同様に承認を得てから commit する
7. **全カテゴリ完了後の最終確認**: ルートの `pnpm check-code` と `pnpm ws-check-code` を通し、全体がグリーンであることを確認する
8. **完了報告**: 更新したカテゴリ・主要パッケージ・発生した修正内容をユーザーに報告する。公開が必要な変更があれば `release-flow` スキルへの連携を提案する

## 注意点

- 依存関係の変更はカテゴリ分類の時点（手順2）で必ず事前承認を取る。auto mode 等の既定動作より `.claude/rules/implementation-rules.md` を優先する
- 1カテゴリ = 1 コミットの粒度を保ち、検証失敗時の修正は原因ごとに別コミットへ分離する（cherry-pick しやすい粒度、`.claude/rules/commit-rules.md`）
- `modules/*` を編集した後は `pnpm bootstrap` を忘れず実行する（コピー方式のため反映されないと検証が無意味になる）
- major バージョンアップは他カテゴリと分離し、breaking changes を個別に確認してから提案する
