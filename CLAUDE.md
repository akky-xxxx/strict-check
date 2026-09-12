# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語

- すべてのアウトプットは日本語で書くこと(PR タイトル / PR 本文 / 変更概要 / レビューコメント)。
    - 例外: コミットメッセージ。
    - 例外: コード内の識別子(変数名・関数名・ファイル名)、既存の英語の固有名詞、外部仕様に合わせる必要がある文字列。
    - 例外: 既存ファイルが英語で統一されているドキュメントを編集する場合は、そのファイルの言語に合わせる。

## リポジトリ概要

strict-check は pnpm workspaces によるモノレポで、`eslint-config-sc-*` / `eslint-plugin-sc-*` という npm パッケージ群を公開している。ワークスペースは 3 種類。

- `packages/*` — npm に公開する OSS パッケージ本体(`eslint-config-{all,js,ts,react,next,jest,storybook}`、`eslint-plugin-js`)。
- `modules/*` — 複数パッケージで使う共有ソースの正本(`shared-for-eslint-config`、`shared-for-eslint-plugin`)。
- `dry-run/*` — 各パッケージのビルド成果物をサンプルコードに対して実際に lint し、動作確認する使い捨ての消費側プロジェクト(`dr-eslint-config-sc-*`、`dr-eslint-plugin-sc-js`)。結合テストの役割。

## コマンド

パッケージマネージャーは **pnpm のみ**(npm/yarn は非対応。`packageManager` フィールドでバージョン固定)。

ルート直下(`dry-run`/`modules`/`packages` を除くルートの config/scripts のみ対象):

- `pnpm check-code` — `lint` + `spell-check` を実行。変更完了前に必ず実行すること。
- `pnpm lint` / `pnpm fix` — eslint + fixpack + prettier を `lint:*`/`fix:*` として並列実行(`run-p`)。
- `pnpm spell-check` — `config/` と `scripts/` に対する cspell。

ワークスペース全体(`ws-*` スクリプトは `pnpm -r run <script>` で全パッケージに展開):

- `pnpm ws-check-code`、`pnpm ws-lint`、`pnpm ws-fix`、`pnpm ws-test`、`pnpm ws-type-check`、`pnpm ws-spell-check`。

パッケージ単位(`packages/<name>` 内、または `pnpm --filter <package-name> run <script>`):

- `pnpm check-code` — bootstrap 後、lint + spell-check + type-check を並列実行し、続けて dry-run + test を実行。パッケージの完全なゲートであり、CI が実行する内容と一致する。
- `pnpm build` — `dist/` を削除して `tsc -p tsconfig.build.json` でコンパイル。
- `pnpm test` — `vitest run --coverage`。テストを追加・変更した場合、カバレッジは **75% 以上** を維持すること。
- `pnpm test -- path/to/file.test.ts` または `pnpm vitest run path/to/file.test.ts` — 単一テストファイルの実行(テストは `src/` の構成をミラーする `spec/tests/**/*.test.ts` に配置)。
- `pnpm type-check` — `tsc`(型チェックのみ、出力なし)。
- `pnpm dry-run` — 対応する `dry-run/dr-*` プロジェクトを bootstrap して lint し、公開済みの config/plugin がサンプルコードに対して実際に機能するか検証する。
- `pnpm bootstrap` — 単一パッケージ向けの `postinstall` 相当。共有ソースを `src/libs/` にコピーし、依存するワークスペースパッケージをビルドする。`modules/*` を編集した後は必ず実行すること。

ルートの `postinstall`(`pnpm install` 時に自動実行)は順に: `copy-shared` → 全ワークスペースパッケージのビルド(`pnpm -r run build`)→ `husky` のインストール、を行う。

## アーキテクチャ

### 共有コードは import ではなくコピーされる

パッケージは実行時・ビルド時に `modules/*` から import することは一切ない。代わりに `scripts/copy-shared/index.js` が `modules/shared-for-eslint-config/src` と `modules/shared-for-eslint-plugin/src` の中身を、パッケージディレクトリ名に `eslint-config` / `eslint-plugin` を含むかどうかで判定した上で、各パッケージの `src/libs/shared-for-config` または `src/libs/shared-for-plugin` に物理コピーする。これはルートの `postinstall` と各パッケージの `bootstrap` スクリプトで実行される。

**注意点:** 共有ロジック(config/plugin パッケージが使う型・定数・ユーティリティ)を変更する場合は、必ず `modules/shared-for-eslint-config/src` または `modules/shared-for-eslint-plugin/src` の方を編集すること。`packages/*/src/libs/shared-for-*` 配下のコピー先を直接編集してはいけない — 次回の bootstrap/install で上書きされる。`modules/*` を編集した後は、テスト前に `pnpm bootstrap`(ルートまたはパッケージ単位)を実行して変更を反映させること。

### config パッケージ(`eslint-config-sc-*`)

各 config パッケージは、小さな `*Record`/`*Rules` モジュール群(例: `src/shared/config/records/*`、`src/shared/config/rules/baseRules/*`)から ESLint flat config 配列を組み立て、`src/flatConfig/index.ts` で合成して `src/index.ts` から re-export する。`eslint-config-all` は集約役で、`src/getConfigs/index.ts` が他の `eslint-config-sc-*` パッケージ(peer/dev 依存として宣言)を合成し、`getConfigs/modules/getConfigsBase/modules/` 配下で JS 用/TS 用のベース構成に分けている。

### plugin パッケージ(`eslint-plugin-js`)

`packages/eslint-plugin-js/src/rules/<rule-name>/` に ESLint ルールが 1 つずつ配置され、一貫した内部構成を持つ: `index.ts`(ルール定義)、`modules/`(AST ノード種別ごとのハンドラ、例: `identifier`、`callExpression`、`exportNamedDeclaration`)、`schema/optionSchema/`(zod ベースのオプションスキーマ)、`types/`。ルールオプションのパース・検証は `libs/shared-for-plugin/utilities/parseOptions` で共有されている。テストは `spec/tests/rules/<rule-name>/` に配置され、`spec/tests/rules/utils/tester` の共有テスターを使う。

### CI/CD

各パッケージは独立した `<package>-ci.yml` / `<package>-cd.yml` の GitHub Actions ワークフロー(加えて `local-*-ci.yml` 系、ルートの `root-ci.yml`)を持つ。これは各パッケージが独立してバージョニング・公開されることを反映している。`scripts/tagging` は `main` ブランチから `<package-name>/v<version>` の git タグを作成・push し、CD ワークフローの npm 公開トリガーとして使われる。npm への公開は GitHub OIDC の Trusted Publishing(`id-token: write` + `--provenance`)で行っており、npm トークンを secrets に保持していない。

`root-ci.yml` は `.claude/**` を変更検知の対象に含む。`.claude/` 配下を変更した pull request では、ルートの `pnpm lint`(prettier を含む)と `pnpm spell-check` が走る。`CLAUDE.md` / `AGENTS.md` は対象に含まれない。

### ルートの ESLint 設定

ルートの `eslint.config.mjs` は `dry-run/`、`modules/`、`packages/`(それぞれ独自の eslint 設定を持つ)を ignore し、`config/eslint/records/*` と `config/eslint/rules/*` から組み立てたレコードでルート直下のスクリプト・設定のみを lint する。

## 作業ルール

1. パッケージマネージャーは **pnpm のみ**。
2. コードに変更を加えた場合、`pnpm check-code` が成功していることを作業完了の条件とする。
3. テストを追加・変更した場合、`pnpm test` によるカバレッジは **75% 以上** を維持すること。
4. コミットメッセージは [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) に準拠すること。
5. オブジェクトのプロパティにアクセスする場合は、合理的な場合を除き、繰り返しのドットアクセスより分割代入(例: `const { foo, bar } = obj`)を優先すること。
6. 作業ブランチは `develop` から切ること。
7. 以下に該当する場合は、作業を進める前に方針を提示し確認を取ること: 大規模なリファクタリング、依存関係の追加・変更、テスト構成や設定ファイル(lint / tsconfig / テストランナー等)の変更。

詳細なルールは `.claude/rules/` に置いている。

- `.claude/rules/commit-rules.md` — コミットの型・粒度・承認
- `.claude/rules/common.md` — 設計・実装全般で意識すること
- `.claude/rules/common-structure.md` — co-location、ネームケース、ディレクトリ構成
- `.claude/rules/implementation-rules.md` — 実装着手前にユーザーの承認を得る手順
- `.claude/rules/pr.md` — PR の base branch、差分の確認方法
- `.claude/rules/secrets.md` — 機密情報の取り扱い
- `.claude/rules/test.md` — テストの書き方・配置・カバレッジ

作業の型が決まっているものは `.claude/skills/` の skill に手順としてまとめている。機能追加は `feature-flow`、依存関係の一括更新は `green-keeping`、リリースは `release-flow`。

### PR テンプレート

PR 本文は必ず次の形式(日本語)で書くこと:

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

## AI 間のファイルベース連携(ai-communication)

このリポジトリでは Claude Code が**設計・実装**、codex CLI が**レビュー**を担当する。両者は直接会話せず、リポジトリルートの `./ai-communication` 配下のファイルだけで受け渡しを行う。このディレクトリは git 管理外(`.gitignore` 済み)で、存在しなければ作成してよい。

`.claude/agents/` の review 系 agent(`review-eslint-rule` / `review-eslint-config` / `review-test` / `review-integrator`)による内部レビューとは役割が異なる。内部レビューは実装の途中で品質を担保するためのもので、codex は完成した変更に対する独立した外部レビューを担う。どちらか一方で他方を代替しない。

### ファイルと権限

Claude Code 視点の権限は以下の通り。**読み取り専用のファイルには、書き込み・編集・削除・リネームのいずれも行わない。**

| ファイル                                 | Claude Code                                | codex CLI                                  |
| ---------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| `ai-communication/task.md`               | 読み取りのみ                               | 読み取り禁止・書き込み禁止                 |
| `ai-communication/result_{timestamp}.md` | 新規作成して書く(既存ファイルは編集しない) | 読み取りのみ                               |
| `ai-communication/review_{timestamp}.md` | 読み取りのみ                               | 新規作成して書く(既存ファイルは編集しない) |

`{timestamp}` はファイル作成時刻を `YYYYMMDD-HHmmss`(ローカル時刻)で表したもの。例: `result_20260814-203015.md`。既存ファイルへの追記は行わず、常に新しい timestamp のファイルを作成する。

### フロー

1. タスクの入力を把握する。優先順位は「ユーザーからの直接指示 > 指定された issue > `ai-communication/task.md` の本文」。issue が指定された場合の扱いは下記「issue をタスク入力とする場合」を参照する。issue も `task.md` も無ければユーザーの指示のみで進める
2. 設計・実装を行う。`.claude/rules/implementation-rules.md` の実装前確認と `.claude/rules/commit-rules.md` のコミット承認はこれまで通り適用する。ルール追加・config 追加のような機能追加タスクでは `feature-flow` skill の手順に従い、その全タスクが完了した時点で手順3 へ進む。設計フェーズに入るかどうかの判定条件は下記「設計フェーズに入る条件」を参照する
3. **タスクが完了した時点で** `ai-communication/result_{timestamp}.md` を**新規作成**し、結果と申し送り事項を書く。作業途中の状態では作成しない(未レビューの result が複数並び、codex 側がレビュー対象を選べなくなるため)。途中経過の共有はチャットで行う。codex CLI の起動はユーザーが行う
4. ユーザーからレビュー到着を知らされたら、未対応の `ai-communication/review_*.md` を読む。ある review が「未対応」であるとは、そのファイル名が、以降に作成したどの `result_*.md` の `- reviewed_file:` からも参照されていないことを指す。ファイル名の timestamp 順では判断しない(timestamp は実際の作成順と前後することがある)。未対応の review が複数ある場合は最新の1件で打ち切らず、実際の更新日時(`ls -tr ai-communication/review_*.md` で確認できる mtime 順)が古いものから順に処理し、すべて解消してから手順7 へ進む
5. 各指摘の妥当性を自分で確認し、対応要否を判断する。修正が必要なものは実装前確認ルールに従って承認を得てから実装する。対応方法が別の既存規約からの逸脱を伴う場合は、逸脱する旨・理由・代替案を明示してユーザーの承認を得る。技術的な妥当性を自分で検証できたことは、逸脱してよいという承認を得たことの代替にならない
6. 対応後に新しい `ai-communication/result_{timestamp}.md` を作成し、対応した指摘・見送った指摘とその理由・元になった review のファイル名を書く。複数の review にまとめて対応した場合は、その全ファイル名を `- reviewed_file:` に列挙する。列挙しなかった review は手順4 の判定上「未対応」のまま残る。以降 4〜6 を必要な回数だけ繰り返す
7. レビューの指摘が無くなったら `retrospective` agent を実行し、今回の作業プロセスを振り返る。agent は会話履歴を持たないため、承認フローの逸脱・手戻り・ユーザーからの指摘といった経緯メモを呼び出し時に渡す。ドキュメント反映が必要な項目が出た場合、起票の前に `gh issue list --repo akky-xxxx/strict-check --state open --limit 1000 --json number,title,body,comments` で OPEN issue 全件の番号・タイトル・本文・コメントを取得し、類似 issue の有無を確認する(既定の `--limit` は30件までしか取得できず、本文・コメントもタイトルのみの出力には含まれないため、いずれも明示する)。類似の判定は、反映先ファイル(`CLAUDE.md`/`AGENTS.md`/`.claude/**` など)が一致し、かつ指摘している問題または提案する文言の趣旨が、本文だけでなく既存のコメントとも重なるかで行う。類似 issue が無ければ**別タスク(別ブランチ)として起票**し、類似 issue があれば新規 issue は作らず、`gh issue comment <issue番号> --repo akky-xxxx/strict-check` でその issue に今回の反映案(対象ファイル・追記文言案・理由・元タスクの1行要約)を追記コメントする。いずれの場合も現タスクの push はブロックしない。あわせて、これまでの result の `## 申し送り・レビュー観点` に「別 issue 候補」として書いた項目が起票・コメント追記のどちらも済んでいないまま残っていないか確認し、残っていれば同様に類似 issue 検索のうえ起票またはコメント追記する。ここでの「レビューの指摘が無くなったら」は、設計フェーズのサブループの解消ではなく、実装とその実装内容に対する result/review ループまで完了した、タスク全体としての解消を指す
8. push / PR 作成に進む。push と PR 作成はいずれもユーザーが実行し、エージェントは実行するコマンドと内容を提示するところまでを担当する(`.claude/rules/pr.md`)

### retrospective の実行タイミング

- retrospective 実行後、同じブランチへ新しいスコープが追加された場合: push 前に retrospective を再実行する。再実行は追加分のスコープに絞ってよく、既に起票済み・コメント追記済み・判断済みの項目を再掲しない
- retrospective の実行がユーザー操作待ちで中断した場合、またはユーザーの直接指示で push / PR 作成 / merge が先行した場合: 実行を省略せず事後に行う。呼び出し時の経緯メモに「push 等が先行した」ことを明記し、本来 push 前に行うはずだった「申し送りの別 issue 候補が起票・コメント追記のどちらも済んでいないかの確認」もあわせて行う

### 作成した result のチャットでの提示

`ai-communication/result_{timestamp}.md` を作成したターンでは、チャットの最終出力に作成したファイルを `ai-communication/result_20260814-203015.md` の形式で書く。ユーザーがそのままコピーして codex CLI にレビュー対象として渡せるようにするための表記であり、ディレクトリ名(`ai-communication/`)と拡張子(`.md`)のどちらも省略しない。設計フェーズで設計だけを書いた result の場合も同様に扱う。

### issue をタスク入力とする場合

タスクは GitHub issue で管理することを基本とする。`task.md` はローカルの git 管理外ファイルで作業デバイスに縛られるが、issue ならどのデバイスからでも起票・追記でき、着手前に内容を詰めておける。

- issue の指定は、ユーザーがチャットで issue 番号 / URL を渡す形と、`task.md` に issue の URL / 番号だけが書かれている形のどちらでもよい。後者の場合、`task.md` 本文は issue への参照とみなし、要件は issue 側を読む
- issue 番号のみ渡された場合は `gh issue view <issue 番号> --repo akky-xxxx/strict-check` で参照する。issue の URL を渡された場合は URL 自体がリポジトリを一意に定めるため `gh issue view <URL>` をそのまま使う
- issue 本文が曖昧で複数の解釈が成り立つ場合は、自分で解釈を確定せず実装前確認ルールに従ってユーザーに確認する
- `ai-communication/result_{timestamp}.md` には issue 番号・URL を一切書かない。`- task:` 行に限らず、経緯説明やレビュー対応の記述であっても同様。issue 本文の丸写しも行わない。codex に渡すのはレビューに必要な範囲の背景だけ
- result を新規作成する前に、`- task:` 行だけでなく本文全体に issue 番号・URL が紛れていないか見直す

codex には issue の id・本文のどちらも渡さない(`AGENTS.md` を参照)。背景情報を持たせないことで追認的なレビューになるのを避ける意図的な制約であり、issue で管理するようになってもこの前提は変えない。`result_{timestamp}.md` に issue 番号や URL を書くと、この前提が result 経由で崩れる。

### 設計フェーズに入る条件

フローの手順2で、次のいずれかに当たる場合は、実装(Edit / Write)に着手する前に**設計だけ**を `ai-communication/result_{timestamp}.md` に出力し、codex の設計レビューが解消するまでコード・設定・ドキュメントに一切触らない。

- 以後の実装・レビューの判断軸になるもの(`CLAUDE.md` / `AGENTS.md` / `.claude/**` / `config/**` / CI 定義)を変更する。パスではなく検査基準・分類・実行条件・権限のいずれかを変えるかで判定し、既存基準に従うデータの更新(cspell 辞書への単語追加など)は含まない。「権限」には、CI のジョブ/ステップへの secrets・環境変数の追加・変更と、ワークフローの `permissions:` の変更を含む
- 複数パッケージにまたがる、または既存の公開インターフェース・データ構造を変える
- `modules/*` を変更する。`copy-shared` により全消費側パッケージへ伝播するため、影響範囲が単一パッケージに閉じない
- 公開パッケージの破壊的変更にあたる(ESLint ルールの既定 severity 変更、ルールオプション schema の変更、config の合成内容の変更、公開範囲 `main`/`types`/`files` の変更)
- 判断軸や分類基準を新しく決める(どこまでを対象とするか、何を基準に分けるか)

変更行数・ファイル数・コード変更の有無は判定に使わない。ドキュメント1ファイルの追記でも上記に当たれば設計フェーズを踏む。`feature-flow` skill の内部レビューを通すことは、codex の設計レビューの代替にならない。

設計だけを書いた result は手順3 が禁じる「作業途中の result」には当たらない。`## 変更ファイル` には変更予定のファイルと適用後の文言を書く。Plan Mode のプランには、そのターンで実行する範囲(設計 result の作成までか、実装まで進むか)を明記する。

設計 result に対象ファイルの確定文言(markdown 等)を含める場合、リポジトリのファイルには触れずに、対象ファイルに実際に適用される整形ツールを ignore 設定(`.prettierignore`)から先に判定する。適用されると判定したツールについてのみ、確定文言を対象ファイルのパスで解決される設定のもとで実行し、意図した構造(見出し階層、リストのネストなど)で解釈されることを確認する。あわせて、その設定が正しく効いているかは確定文言側の結果だけでは裏取りできないため、変更前の対象ファイル本文も同じ手順で実行し、通ることを確認してから result を提出する。新規追加で変更前の本文が存在しない場合は、同じ整形設定が適用される既存ファイル(同じ拡張子で、ignore 設定の対象外であるもの)を対照として同じ手順で実行する。どのファイルを対照に使ったかは `## 確認済みのこと` に書く。設計レビューが解消し確定文言をリポジトリのファイルへ適用した後は、適用に使ったコマンドの終了コードだけを適用済みの根拠にせず、確定文言と適用後のファイルのうち対応する変更範囲を `diff` で突き合わせ、差分が無いことを確認する。

設計 result にたたき台や過去の指示に含まれる文言(コマンド例、手順、事実主張)を採用する場合、内容の技術的な正しさの検証を省略しない。特にコマンドの既定挙動など、自分が同じセッション内で既に確認済みの知識と矛盾しないか照合し、矛盾があれば採用前に修正する。たたき台に書かれていることは、その内容が正しいことの根拠にならない。

### 既存資産の確認

設計に入る前に、対象ディレクトリの現在の内容を実際に読む。特に `.claude/**` のようにブランチによって内容が異なりうるものは、作業ブランチを切り替えた後に読み直す。過去のターンで得た調査結果は、そのターン時点のブランチの状態でしかない。既存ファイルがある前提で「新規作成」を計画すると、既存の内容を上書きして失う。

### `result_{timestamp}.md` の書式

codex が機械的に読み取れるよう、以下の形式に統一する。ファイル参照は `path:line` 形式(コロン区切り、括弧なし)、絵文字・罫線などの装飾は使わない(`AGENTS.md` の指摘出力形式と揃えている)。

```markdown
- task: 対象タスクの1行要約
- reviewed_file: review_20260814-210000.md

## 概要

## 変更ファイル

## 設計判断

## 確認済みのこと

## 前回レビューへの対応

## 申し送り・レビュー観点
```

- `- task:`: 対象タスクの1行要約。issue が入力元であっても issue 番号 / URL は書かない
- `- reviewed_file:`: 対応した review のファイル名。複数の review にまとめて対応した場合はカンマ区切りで全件を列挙する。初回やレビュー起因でない場合は `-` とする
- `## 変更ファイル`: 変更した各ファイルのパスと変更内容を1行ずつ
- `## 設計判断`: 選んだ方針と、その理由・採らなかった選択肢
- `## 確認済みのこと`: 実行したコマンド(`pnpm ws-check-code` 等)とその結果
    - 自分がその場で実行できる検証は、result を提出する前に実行する。「未確認」と書いてよいのは、権限・環境・技術的制約により実行できないものに限り、その理由もあわせて書く
    - 検査結果は実行した後に書く。結果を先に書いてから実行してはならない。該当有無は出力の有無ではなく終了コードで判定し、マッチ0件(該当なし、`grep`/`rg` は通常 exit 1)と実行エラー(パス解決失敗等、exit 2 等)を区別する。実行エラーの場合は「該当なし」ではなく「実行エラー」として記録し、原因を解消してから再実行する
    - result を提出する直前に、対象ファイル・検索オプションを含む実行コマンドの形で、禁止対象の情報(issue 番号の実値、`#` 付き表記、issue URL 等)が本文全体に含まれていないことを `grep`/`rg` 等で機械的に検査し、実行したコマンドと結果をここに書く。issue 番号の実値は `#` 付き表記や URL に含まれる形だけでなく単独の数字列としても出現しうるため、単語境界(`\b` 等)を使った実値単体の検索を必ず含める
    - 検索パターンに禁止対象の実値を使う場合、記録するコマンドはパターン部分をプレースホルダ(例: `<issue番号>`)に置き換え、結果のみを書く。実値をそのまま転記すると禁止対象自体を書き込んでしまい、かつ検査対象はこの記録行を含む result 全文であるため記録行自身がヒットしてしまうため。記録行のコマンド欄をプレースホルダで先に下書きすること自体は構わないが、結果欄は result 全文を書き終えたうえで検査を実行してから確定させる
- `## 前回レビューへの対応`: 2回目以降のみ。指摘ごとに「対応した / 見送った」と理由。見送りは必ず理由を書く
- `## 申し送り・レビュー観点`: 特に見てほしい箇所、既知の懸念、次のタスクへの引き継ぎ。技術的制約等を理由にテスト範囲や実装範囲を当初想定より絞った場合は、その判断と理由も含める

### やらないこと

- `ai-communication/task.md` および `ai-communication/review_*.md` への書き込み・編集・削除
- 既存の `ai-communication/result_*.md` の編集・追記(常に新規ファイルを作成する)
- 作業途中の状態で `ai-communication/result_*.md` を作成すること(設計フェーズで作成する、設計だけを書いた result は該当しない)
- レビュー指摘を検証せずそのまま実装に反映すること(妥当性を自分で確認してから対応する)
- レビューの指摘が解消しないまま push / PR 作成に進むこと
