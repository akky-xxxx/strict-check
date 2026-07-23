---
name: feature-flow
description: ESLint ルール追加・config 追加等の機能追加を行う際に「既存調査 → 設計 → 実装 → レビュー」の流れを確実に実行するためのスキル。各 agent 定義に散らばった呼び出し順序を1つの手順として強制する。`/feature-flow` で明示的に起動する他、ルール追加や config 追加のタスクを検知した際にも使う。
---

# feature-flow

このスキルは、本リポジトリの design/implement/review 系 agent 群を正しい順序で呼び出すための手順書です。各 agent 定義ファイルに書かれた「呼び出し側への注意」を1つのフローとしてまとめたものであり、途中の承認ステップを飛ばしたり順序を入れ替えたりしてはいけません。

## 手順

1. **既存調査**: `investigate-existing-code` を実行する。この時点では design agent を並列実行しない
2. **並列設計**: 1. の出力を入力として、`design-eslint-rule` / `design-eslint-config` / `design-test` を並列実行する（対象外のドメインは「対象なし」の結果になる）
3. **設計承認**: 3つの設計提案をユーザーに提示し、明示的な承認を得る。承認前に次のステップへ進まない
4. **設計統合**: `design-integrator` を実行し、統合設計仕様とタスク一覧を得る
5. **統合設計承認**: 統合設計仕様とタスク一覧をユーザーに提示し、明示的な承認を得る（`.claude/rules/implementation-rules.md` に従う）
6. **タスクごとの実装〜レビュー**: タスク一覧の各タスクについて、依存関係の順序で以下を繰り返す
   1. `implementer` で該当タスクのみ実装する（`modules/*` を変更した場合は `pnpm bootstrap` を含む）
   2. `review-eslint-rule` / `review-eslint-config` / `review-test` を並列実行する
   3. `review-integrator` で集約する
   4. must fix が残る場合は 6-1 に戻る
   5. `.claude/rules/commit-rules.md` に従い、staged diff とコミットメッセージをユーザーに提示し、承認を得てから commit する
7. 全タスクが完了するまで 6. を繰り返す

## 注意点

- 各ステップの承認（3, 5, 6-5）は省略しない。auto mode 等の既定動作よりも `.claude/rules/implementation-rules.md` / `.claude/rules/commit-rules.md` を優先する
- `investigate-existing-code` は必ず design agent 群より先に実行する。並列実行してはならない
- タスク分割は独立 agent ではなく `design-integrator` の出力の一部として得る
