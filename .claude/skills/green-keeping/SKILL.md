---
name: green-keeping
description: 依存関係をカテゴリ単位で棚卸し・更新し、`pnpm check-code`/`ws-check-code`/`dry-run` で都度グリーンな状態を維持しながら進め、develop への PR 作成まで含めて完結させるためのスキル。依存関係の変更は着手前にカテゴリと更新方針をユーザーに提示し承認を得る。`/green-keeping` で明示的に起動する他、依存関係の一括更新作業を検知した際にも使う。
---

# green-keeping

このスキルは、本リポジトリの依存関係を安全に最新化するための手順書です。過去のグリーンキーピング作業（`chore(*): upgrade dependencies related <category>` のコミット列）から抽出したパターンに従い、カテゴリ単位で「更新 → 検証 → コミット」を繰り返します。依存関係の変更は `CLAUDE.md` 作業ルール7・`.claude/rules/implementation-rules.md` により着手前の承認が必須のため、この確認ステップを飛ばしてはいけません。

## 手順

### 依存関係の更新

1. **棚卸し**: `pnpm outdated -r`, `pnpm upgrade -i -L -r` 等で root / `modules/*` / `packages/*` / `dry-run/*` 全体の更新可能な依存を洗い出す
2. **カテゴリ分類と方針提示（承認必須）**: 過去の実績パターン（eslint 関連, typescript 関連, react 関連, test 関連, commitlint 関連, prettier, cspell, その他個別ツール）を踏襲してカテゴリ分けし、各カテゴリの対象パッケージ・バージョン帯（patch/minor/major）をユーザーに提示する。特に major バージョンアップは breaking changes の有無を確認し、他カテゴリと分離して提示する。着手前に承認を得る
3. **カテゴリ単位での更新実行**: 承認されたカテゴリを1つずつ、対象範囲（root / `modules/*` / `packages/*` / `dry-run/*`）すべての `package.json` を更新する。`modules/*` を更新した場合は `pnpm bootstrap` を実行して各パッケージへ反映する
4. **カテゴリ単位での検証**: 更新のたびに `pnpm check-code`（ルート）と `pnpm ws-check-code`（全ワークスペース、lint/spell-check/type-check + dry-run + test を含む）を実行する。config パッケージに影響する場合は `pnpm dry-run` の実行結果も確認する
5. **カテゴリ単位でのコミット**: `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージ（`chore(*): upgrade dependencies related <category>` 形式）を提示し、承認を得てから commit する
6. **検証失敗時の修正**: 新しい recommended ルールの追加やバージョン要件変更などで検証が落ちた場合、原因ごとに分けて修正する（例: peer dependency floor の引き上げは `fix(<package>): ...`、dry-run サンプルコードの追従は `test(dr-<package>): ...`）。修正コミットも手順5と同様に承認を得てから commit する
7. **全カテゴリ完了後の最終確認**: ルートの `pnpm check-code` と `pnpm ws-check-code` を通し、全体がグリーンであることを確認する

### develop への PR 作成

1. **PR 規約の適用（固定）**: `develop` への PR 作成にあたり、以下を固定値として用いる（PR #170 の実績に基づく）
   - base ブランチ: `develop`
   - タイトル: `green keeping<YYYYMMDD>`（`<YYYYMMDD>` は作業ブランチ名に含まれる日付。抽出できない場合は当日日付を使う）
   - ラベル: `01.greenkeeping`（`gh label list` で存在を確認する。存在しない場合はユーザーに確認する）
2. **PR 本文の作成**: CLAUDE.md の PR テンプレート（変更概要/背景・目的/変更内容/影響範囲/動作確認/補足）に従い、`git log develop..HEAD --oneline` のコミット内容から作成する
3. **PR 提示と承認（必須）**: push 先、タイトル、ラベル、base ブランチ、本文をまとめてユーザーに提示し、明示的な承認を得る。承認前に push・PR 作成のいずれも実行しない
4. **push**: 対象ブランチが未 push、または upstream 未追跡の場合は `git push -u origin <branch>` を、追跡済みの場合は `git push` を実行する
5. **PR 作成**: `gh pr create --base develop --head <branch> --title "green keeping<YYYYMMDD>" --label "01.greenkeeping" --body <body>` を実行する
6. **完了報告**: 更新したカテゴリ・主要パッケージ・発生した修正内容・作成した PR の URL をユーザーに報告する

## 注意点

- 依存関係の変更はカテゴリ分類の時点（手順2）で必ず事前承認を取る。auto mode 等の既定動作より `.claude/rules/implementation-rules.md` を優先する
- 1カテゴリ = 1 コミットの粒度を保ち、検証失敗時の修正は原因ごとに別コミットへ分離する（cherry-pick しやすい粒度、`.claude/rules/commit-rules.md`）
- `modules/*` を編集した後は `pnpm bootstrap` を忘れず実行する（コピー方式のため反映されないと検証が無意味になる）
- major バージョンアップは他カテゴリと分離し、breaking changes を個別に確認してから提案する
- タイトル・ラベル・base は PR #170 の実績に基づく固定規約であり、毎回参考 PR を探索する必要はない。規約が変わった場合はこのスキル自体を更新する
- 「develop への PR 作成」の手順3（PR 提示と承認）は省略しない。push は origin への共有操作、PR 作成は GitHub 上に公開される操作であり、いずれも取り消しにくい／他者に見える変更のため
