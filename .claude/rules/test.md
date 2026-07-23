# test

- `describe` / `it` のメッセージは日本語で記述する
- カバレッジ75%を目指す
- 対象に応じてブラックボックステストとホワイトボックステストを使い分ける
  - eslint-plugin のルール(`spec/tests/rules/{rule-name}/*.test.ts`): ブラックボックステスト。共有テスター(`spec/tests/rules/utils/tester`)を通して valid/invalid のコードサンプルから振る舞いを検証し、内部の AST ハンドラ実装には依存しない
  - shared のユーティリティ・型(`modules/shared-for-eslint-{plugin,config}/spec/**`、`libs/shared-for-plugin/utilities/parseOptions` 等): ホワイトボックステスト。内部のロジック分岐や境界値を直接検証し、カバレッジを担保する
- config パッケージの変更は、単体テストに加えて `pnpm dry-run` で対応する `dry-run/dr-*` プロジェクトに対する実際の lint 結果を確認する
