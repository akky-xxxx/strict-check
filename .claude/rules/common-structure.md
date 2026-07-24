# common structure

- 原則として co-location とする
- 原則として1ファイル1エクスポート

## ネームケース

- constant（プリミティブな定数。例: `SEVERITY`, `ARRAY_LENGTHS`）: SCREAMING_SNAKE_CASE
- function: camelCase
- rule（eslint-plugin のルールディレクトリ名。例: `forbidden-multiple-named-exports`）: kebab-case
- schema（zod スキーマ変数。例: `optionsSchema`）: camelCase
- type: UpperCamelCase
- variable: camelCase

## モノレポ構成

```
<root>
  ├ packages   # npm に公開する OSS パッケージ本体 (eslint-config-sc-*, eslint-plugin-js)
  ├ modules    # 複数パッケージで使う共有ソースの正本 (shared-for-eslint-config, shared-for-eslint-plugin)
  └ dry-run    # 各パッケージのビルド成果物を検証する消費側プロジェクト (dr-*)
```

## eslint-plugin-js のルール

```
packages/eslint-plugin-js/src/rules/{rule-name}
  ├ index.ts              # ルール定義 (TSESLint.RuleModule)
  ├ modules
  | └ {astNodeType}        # AST ノード種別ごとのハンドラ (例: callExpression, identifier)
  ├ schema
  | └ optionSchema         # zod ベースのオプションスキーマ
  └ types
    └ index.ts             # MessageId, Option 等

packages/eslint-plugin-js/spec/tests/rules/{rule-name}
  └ *.test.ts              # 共有テスター (spec/tests/rules/utils/tester) を使用
```

## eslint-config-sc-\* の config

```
packages/eslint-config-sc-{name}/src
  ├ shared/config
  | ├ records/{recordName}  # 既存 config のレコード化 (例: airbnbBaseRecords)
  | ├ rules/baseRules        # ベースとなる rule 定義
  | └ settings               # eslint settings (import 解決等)
  ├ flatConfig/index.ts      # 上記を合成した flat config 配列
  └ libs/shared-for-config   # modules/shared-for-eslint-config からコピーされた共有コード (直接編集禁止)
```
