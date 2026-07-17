# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語

- すべてのアウトプットは日本語で書くこと（PR タイトル / PR 本文 / 変更概要 / レビューコメント）。
  - 例外: コミットメッセージ。
  - 例外: コード内の識別子（変数名・関数名・ファイル名）、既存の英語の固有名詞、外部仕様に合わせる必要がある文字列。
  - 例外: 既存ファイルが英語で統一されているドキュメントを編集する場合は、そのファイルの言語に合わせる。

## リポジトリ概要

strict-check は pnpm workspaces によるモノレポで、`eslint-config-sc-*` / `eslint-plugin-sc-*` という npm パッケージ群を公開している。ワークスペースは 3 種類。

- `packages/*` — npm に公開する OSS パッケージ本体（`eslint-config-{all,js,ts,react,next,jest,storybook}`、`eslint-plugin-js`）。
- `modules/*` — 複数パッケージで使う共有ソースの正本（`shared-for-eslint-config`、`shared-for-eslint-plugin`）。
- `dry-run/*` — 各パッケージのビルド成果物をサンプルコードに対して実際に lint し、動作確認する使い捨ての消費側プロジェクト（`dr-eslint-config-sc-*`、`dr-eslint-plugin-sc-js`）。結合テストの役割。

## コマンド

パッケージマネージャーは **pnpm のみ**（npm/yarn は非対応。`packageManager` フィールドでバージョン固定）。

ルート直下（`dry-run`/`modules`/`packages` を除くルートの config/scripts のみ対象）:

- `pnpm check-code` — `lint` + `spell-check` を実行。変更完了前に必ず実行すること。
- `pnpm lint` / `pnpm fix` — eslint + fixpack + prettier を `lint:*`/`fix:*` として並列実行（`run-p`）。
- `pnpm spell-check` — `config/` と `scripts/` に対する cspell。

ワークスペース全体（`ws-*` スクリプトは `pnpm -r run <script>` で全パッケージに展開）:

- `pnpm ws-check-code`、`pnpm ws-lint`、`pnpm ws-fix`、`pnpm ws-test`、`pnpm ws-type-check`、`pnpm ws-spell-check`。

パッケージ単位（`packages/<name>` 内、または `pnpm --filter <package-name> run <script>`）:

- `pnpm check-code` — bootstrap 後、lint + spell-check + type-check を並列実行し、続けて dry-run + test を実行。パッケージの完全なゲートであり、CI が実行する内容と一致する。
- `pnpm build` — `dist/` を削除して `tsc -p tsconfig.build.json` でコンパイル。
- `pnpm test` — `vitest run --coverage`。テストを追加・変更した場合、カバレッジは **75% 以上** を維持すること。
- `pnpm test -- path/to/file.test.ts` または `pnpm vitest run path/to/file.test.ts` — 単一テストファイルの実行（テストは `src/` の構成をミラーする `spec/tests/**/*.test.ts` に配置）。
- `pnpm type-check` — `tsc`（型チェックのみ、出力なし）。
- `pnpm dry-run` — 対応する `dry-run/dr-*` プロジェクトを bootstrap して lint し、公開済みの config/plugin がサンプルコードに対して実際に機能するか検証する。
- `pnpm bootstrap` — 単一パッケージ向けの `postinstall` 相当。共有ソースを `src/libs/` にコピーし、依存するワークスペースパッケージをビルドする。`modules/*` を編集した後は必ず実行すること。

ルートの `postinstall`（`pnpm install` 時に自動実行）は順に: `copy-shared` → 全ワークスペースパッケージのビルド（`pnpm -r run build`）→ `husky` のインストール、を行う。

## アーキテクチャ

### 共有コードは import ではなくコピーされる

パッケージは実行時・ビルド時に `modules/*` から import することは一切ない。代わりに `scripts/copy-shared/index.js` が `modules/shared-for-eslint-config/src` と `modules/shared-for-eslint-plugin/src` の中身を、パッケージディレクトリ名に `eslint-config` / `eslint-plugin` を含むかどうかで判定した上で、各パッケージの `src/libs/shared-for-config` または `src/libs/shared-for-plugin` に物理コピーする。これはルートの `postinstall` と各パッケージの `bootstrap` スクリプトで実行される。

**注意点:** 共有ロジック（config/plugin パッケージが使う型・定数・ユーティリティ）を変更する場合は、必ず `modules/shared-for-eslint-config/src` または `modules/shared-for-eslint-plugin/src` の方を編集すること。`packages/*/src/libs/shared-for-*` 配下のコピー先を直接編集してはいけない — 次回の bootstrap/install で上書きされる。`modules/*` を編集した後は、テスト前に `pnpm bootstrap`（ルートまたはパッケージ単位）を実行して変更を反映させること。

### config パッケージ（`eslint-config-sc-*`）

各 config パッケージは、小さな `*Record`/`*Rules` モジュール群（例: `src/shared/config/records/*`、`src/shared/config/rules/baseRules/*`）から ESLint flat config 配列を組み立て、`src/flatConfig/index.ts` で合成して `src/index.ts` から re-export する。`eslint-config-all` は集約役で、`src/getConfigs/index.ts` が他の `eslint-config-sc-*` パッケージ（peer/dev 依存として宣言）を合成し、`getConfigs/modules/getConfigsBase/modules/` 配下で JS 用/TS 用のベース構成に分けている。

### plugin パッケージ（`eslint-plugin-js`）

`packages/eslint-plugin-js/src/rules/<rule-name>/` に ESLint ルールが 1 つずつ配置され、一貫した内部構成を持つ: `index.ts`（ルール定義）、`modules/`（AST ノード種別ごとのハンドラ、例: `identifier`、`callExpression`、`exportNamedDeclaration`）、`schema/optionSchema/`（zod ベースのオプションスキーマ）、`types/`。ルールオプションのパース・検証は `libs/shared-for-plugin/utilities/parseOptions` で共有されている。テストは `spec/tests/rules/<rule-name>/` に配置され、`spec/tests/rules/utils/tester` の共有テスターを使う。

### CI/CD

各パッケージは独立した `<package>-ci.yml` / `<package>-cd.yml` の GitHub Actions ワークフロー（加えて `local-*-ci.yml` 系、ルートの `root-ci.yml`）を持つ。これは各パッケージが独立してバージョニング・公開されることを反映している。`scripts/tagging` は `main` ブランチから `<package-name>/v<version>` の git タグを作成・push し、CD ワークフローの npm 公開トリガーとして使われる。

### ルートの ESLint 設定

ルートの `eslint.config.mjs` は `dry-run/`、`modules/`、`packages/`（それぞれ独自の eslint 設定を持つ）を ignore し、`config/eslint/records/*` と `config/eslint/rules/*` から組み立てたレコードでルート直下のスクリプト・設定のみを lint する。

## 作業ルール（AGENTS.md より）

1. パッケージマネージャーは **pnpm のみ**。
2. コードに変更を加えた場合、`pnpm check-code` が成功していることを作業完了の条件とする。
3. テストを追加・変更した場合、`pnpm test` によるカバレッジは **75% 以上** を維持すること。
4. コミットメッセージは [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) に準拠すること。
5. オブジェクトのプロパティにアクセスする場合は、合理的な場合を除き、繰り返しのドットアクセスより分割代入（例: `const { foo, bar } = obj`）を優先すること。
6. 作業ブランチは `develop` から切ること。
7. 以下に該当する場合は、作業を進める前に方針を提示し確認を取ること: 大規模なリファクタリング、依存関係の追加・変更、テスト構成や設定ファイル（lint / tsconfig / テストランナー等）の変更。

### PR テンプレート

PR 本文は必ず次の形式（日本語）で書くこと:

```
## 変更概要
- ...

## 背景 / 目的
- ...

## 変更内容
- ...

## 影響範囲
- ...

## 動作確認
- ...

## 補足
- ...
```
