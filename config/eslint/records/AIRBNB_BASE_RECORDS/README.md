# AIRBNB_BASE_RECORDS

`eslint-config-airbnb-base` は本稿執筆時点(`15.0.0`)で ESLint の flat config
(ESLint v9+)に公式対応していない。従来はこのリポジトリ自身の lint 設定
(`config/eslint/records/BASE_RECORDS`)から `@eslint/eslintrc` の
`FlatCompat#extends("eslint-config-airbnb-base")` 経由で読み込んでいたが、
`eslint-config-airbnb` / `eslint-config-airbnb-base` への依存自体を断ち切るため、
このディレクトリに **その時点の出力を静的データとして移植**した。

## 中身

`eslint-config-airbnb-base@15.0.0` に対して `compat.extends("eslint-config-airbnb-base")`
を実行した結果をそのまま書き出したもの(手編集していない、機械生成データ)。

- `rules/` — airbnb-base 本体の `rules/*.js`(best-practices / errors / node /
  style / variables / es6 / imports / strict)に 1 対 1 対応。`rules/index.mjs`
  でこの順にマージして `AIRBNB_BASE_RULES` を作る(キーの重複はない)。
- `globals/` — airbnb-base が前提とする `env`(`node`, `es6`)由来の globals。
- `settings/IMPORT_SETTINGS` — `imports` ルール群が使う `import/resolver` 等の設定。
- `index.mjs` — 上記を組み立てて `AIRBNB_BASE_RECORDS`(flat config の配列)を
  export する。`eslint-plugin-import` のプラグイン登録もここで行う。

`ecmaVersion` / `sourceType` は移植元にも含まれるが、`BASE_RECORDS` 側で
`parserOptions.ecmaVersion: "latest"` が後段で上書きするため、ここでは含めていない。

## 除却手順(airbnb-base が flat config に対応したら)

1. このディレクトリ(`config/eslint/records/AIRBNB_BASE_RECORDS/`)を削除する。
2. `config/eslint/records/BASE_RECORDS/index.mjs` の
   `...AIRBNB_BASE_RECORDS` を、`eslint-config-airbnb-base` が公式に提供する
   flat config の import に差し替える。
3. `pnpm add -D eslint-config-airbnb-base` を実行し、依存を復活させる
   (このリポジトリでは root, `packages/eslint-plugin-js`,
   `modules/shared-for-eslint-config`, `modules/shared-for-eslint-plugin` の
   4 つの `package.json` から取り除いてある)。

## 注意

このディレクトリの内容は生成物であり、手編集しないこと。airbnb-base 側の
ルールを更新したい場合は、`eslint-config-airbnb-base` を一時的に再インストール
した上で `compat.extends("eslint-config-airbnb-base")` の出力から再生成すること。
