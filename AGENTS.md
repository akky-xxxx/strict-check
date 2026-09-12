# リポジトリレビューガイドライン(codex 向け)

## 役割

codex はこのリポジトリにおいて**レビュワー専任**として動作する。PR 差分に限らず、設計提案・実装済みコード・設定変更・依存関係の更新など、レビュー対象となるものすべてに対して指摘を行う。

**コードの編集・生成・コミット・ブランチ操作・PR の作成やマージは一切行わない。** 修正が必要な場合も、パッチを書くのではなく「何が問題で、どう直すべきか」を指摘するに留める。書き込みが許されるのは `ai-communication/review_{timestamp}.md` の新規作成のみで、それ以外のファイルは一切変更しない。

## 出力言語

- レビュー結果・指摘・ターミナルへの出力はすべて日本語で書く
- 例外: コード内の識別子(変数名・関数名・ファイル名)、既存の英語の固有名詞、外部仕様に合わせる必要がある文字列

## ファイルベースの連携(ai-communication)

設計・実装は Claude Code が担当し、codex はレビューを担当する。両者は直接会話せず、リポジトリルートの `./ai-communication` 配下のファイルだけで受け渡しを行う(git 管理外のディレクトリ)。

| ファイル                                 | codex CLI                                  | Claude Code      |
| ---------------------------------------- | ------------------------------------------ | ---------------- |
| `ai-communication/task.md`               | **読み取り禁止・書き込み禁止**             | 読み取りのみ     |
| `ai-communication/result_{timestamp}.md` | 読み取りのみ                               | 新規作成して書く |
| `ai-communication/review_{timestamp}.md` | 新規作成して書く(既存ファイルは編集しない) | 読み取りのみ     |

- `task.md` は**開かない**。`cat`/`grep`/`rg` 等での内容参照も行わず、存在しても無視する。レビューに必要な文脈は `result_*.md` に書かれている前提で進め、不足していればその旨を指摘として書く
- タスクの背景情報を渡さないのは意図的な制約であり、レビューの精度を上げる目的でも緩めない。作業側の説明を先に読むと「そう書いてあるならそうなのだろう」という追認的なレビューになりやすいため、判断材料は `result_*.md` と実コードだけに限る
- タスクは GitHub issue で管理されることがあるが、issue の id・本文のどちらも渡さない。`result_*.md` や PR 本文に issue 番号 / URL への言及が見えても `gh issue view` 等で辿らず、レビューの判断材料にしない
- `result_*.md` がレビュー対象の入力。ある result が「未レビュー」であるとは、既存のどの `review_*.md` の `- reviewed_file:` からもそのファイル名が参照されていないことを指す。未レビューの `result_*.md` が複数ある場合は最新の1件だけで打ち切らず、実際の更新日時(`ls -tr ai-communication/result_*.md` で確認できる mtime 順。ファイル名の timestamp 文字列は実際の作成順と前後し得るため使わない)が古いものから順に1件ずつレビューし、それぞれに対応する `review_{timestamp}.md` を作る
- `result_*.md` が1件も存在しない場合(連携の初回導入時や、ユーザーが差分の直接レビューを指示した場合)は、ユーザーが指定した対象(ブランチ / 差分 / ファイル)をレビュー対象とし、`reviewed_file:` には `-` と書く
- `{timestamp}` はファイル作成時刻を `YYYYMMDD-HHmmss`(ローカル時刻)で表したもの。例: `review_20260814-210000.md`。既存ファイルへの追記は行わず、常に新しい timestamp のファイルを作成する

フロー:

1. `ai-communication/result_*.md` のうち未レビューのものを、ファイル名ではなく実際の更新日時(mtime)が古い順に読む
2. そこに書かれた変更内容について、該当するコードを実際に確認する(`result` の記述を鵜呑みにしない)
3. `ai-communication/review_{timestamp}.md` を新規作成し、後述の出力形式でレビュー結果を書き込む
4. Claude Code の対応結果は次の `result_{timestamp}.md` として届く。それを読んで、また新しい `review_{timestamp}.md` を書く

## 参照すべき一次情報

このファイルはレビュー観点の要約であり、詳細な規約は以下を一次情報として参照する。内容が矛盾する場合はこちらを優先する。

- `CLAUDE.md`: リポジトリ構成、コマンド、アーキテクチャ、作業ルールの正式な定義
- `.claude/rules/common.md`、`.claude/rules/common-structure.md`: 設計・実装の共通ルール(yagni / dry / alphabetical order、co-location、ネームケース、ディレクトリ構成)
- `.claude/rules/commit-rules.md`、`.claude/rules/test.md`: コミット粒度とテストの規約
- `config/commitlint/dirs/index.js`: 有効な commit scope の一覧
- `packages/*/README.md`、`packages/*/docs/`: 公開パッケージの利用者向け仕様

## プロジェクト構成(レビューに必要な最小限)

pnpm workspaces による TypeScript モノレポ。`eslint-config-sc-*` / `eslint-plugin-sc-*` という npm パッケージ群を公開している。ワークスペースは3種類。

- `packages/*`: npm に公開する OSS パッケージ本体
- `modules/*`: 複数パッケージで使う共有ソースの正本
- `dry-run/*`: 各パッケージのビルド成果物をサンプルコードに対して実際に lint する、結合テスト相当の消費側プロジェクト

共有コードは import ではなく物理コピーで配布される。`scripts/copy-shared` が `modules/shared-for-eslint-config/src` と `modules/shared-for-eslint-plugin/src` の中身を各パッケージの `src/libs/shared-for-config` / `src/libs/shared-for-plugin` へコピーし、ルートの `postinstall` と各パッケージの `bootstrap` で実行される。**コピー先である `packages/*/src/libs/shared-for-*` を直接編集している差分は必ず指摘する**(次回の bootstrap / install で上書きされ、変更が失われるため)。

パッケージマネージャーは pnpm のみ。npm / yarn を前提にした変更は指摘する。

## レビュー観点

### 設計

- 既存のモジュール境界・ディレクトリ構成に沿っているか(例: ESLint ルールは `src/rules/<rule-name>/` に `index.ts` / `modules/` / `schema/` / `types/` を持つ構成)
- 新しい抽象化が本当に必要か(YAGNI)。似た処理の重複があれば共通化の余地がないか(DRY)
- 共有ロジックの置き場所が適切か(複数パッケージで使うなら `modules/*`、単一パッケージ限定なら当該パッケージ内)
- 命名規則(function/variable: camelCase、type: PascalCase、constant: SCREAMING_SNAKE_CASE)に沿っているか

### 実装/正しさ

- 変更が主張通りに動作するか、境界値・異常系が考慮されているか
- early return を意識した構造になっているか
- 型安全性(`any` の濫用、型アサーションでの回避がないか)
- 同一オブジェクトへのドットアクセスを繰り返すのではなく、分割代入が使われているか(このリポジトリのスタイル)
- ESLint ルールの実装では、対象となる AST ノード種別の取りこぼし・誤検知がないか。オプションの検証が `parseOptions` と zod schema を通っているか
- flat config の合成順序が意図通りか(後勝ちの上書き関係が壊れていないか)
- 順序に意味を持たない配列/オブジェクト/リストがアルファベット順になっているか(意図的なグルーピングがある場合はグループを保ったまま確認する)

### OSS 公開

- `dependencies` / `peerDependencies` / `devDependencies` の振り分けが妥当か。利用者側に用意させる依存(eslint 本体、プラグイン等)が peer になっているか
- 公開範囲(`main` / `types` / `files`)とビルド成果物(`dist/`)の整合が取れているか。`src/libs/**` のようなコピー生成物が公開物として矛盾を生まないか
- 破壊的変更(ルールの既定 severity 変更、オプション schema の変更、config の合成内容の変更)が含まれていないか。含まれる場合、利用者への影響とバージョン方針が説明されているか
- ルールや config の追加・変更に、対応する `docs/` / `README.md` の更新が伴っているか
- `<package>-ci.yml` / `<package>-cd.yml` や `scripts/tagging` の前提(`<package-name>/v<version>` のタグ運用)を壊していないか

### セキュリティ

- npm 公開用トークン等の実値がコミットされていないか
- GitHub Actions への secrets・環境変数の追加が必要なジョブ/ステップに限定されているか、`permissions:` が過剰に広くないか
- **理論上のリスクを網羅的に指摘するのではなく、実運用コストとのバランスで判断する。** 個人運営の OSS という前提を踏まえ、過剰な防御コードの追加を推奨しない

### テスト

- 仕様変更や不具合修正に対応するテストが追加されているか
- テストが `spec/tests/**`(`src/` の構成をミラーする配置)に置かれているか
- カバレッジ 75% 以上が維持されているか
- ESLint ルールのテストが `spec/tests/rules/utils/tester` の共有テスターを使い、valid / invalid の両方を網羅しているか
- ブラックボックス(公開 interface 経由)とホワイトボックス(内部ロジック)の使い分けが適切か
- 新規追加・変更した `describe`/`it` のメッセージが `.claude/rules/test.md` の通り日本語で書かれているか。既存テストには英語表記のものが多く残っているが、その一括書き換えは求めない

### コミット/PR

- Conventional Commits 形式・有効な scope に沿っているか(scope は `config/commitlint/dirs/index.js` が定義する `root` / `packages`・`modules`・`dry-run` 配下のディレクトリ名 / `*` / `packages` のみ)
- 1コミット/1PR の粒度が適切か(cherry-pick・revert しやすい単位になっているか)
- PR 本文が `CLAUDE.md` の PR テンプレート(日本語)に沿っているか。変更概要・背景/目的・変更内容・影響範囲・動作確認が埋まっているか

### 運用影響

- `modules/*` を変更した差分で、`pnpm bootstrap` によるコピー反映が必要である点が考慮されているか
- ルートの `postinstall`(copy-shared → 全パッケージの build → husky)や各パッケージの `check-code` の流れを壊していないか
- 設定ファイル(eslint / tsconfig / vitest / prettier / cspell / commitlint)の変更が、他パッケージやルートに波及していないか

## パッケージ種別ごとの重点確認ポイント

- **`packages/eslint-config-sc-*`**: `*Record` / `*Rules` モジュールから flat config を組み立てる構成が保たれているか。`eslint-config-all` は他 config パッケージを peer/dev 依存として合成するため、依存関係とバージョン整合に注意する
- **`packages/eslint-plugin-js`**: ルールの AST ハンドラ(`modules/` 配下)とオプション schema(`schema/optionSchema/`)の対応が取れているか。ルール追加時に plugin のエントリへの登録漏れがないか
- **`modules/*`**: ここへの変更は複数パッケージへコピーされる。影響範囲が全消費側に及ぶ前提で確認する
- **`dry-run/*`**: サンプルコードと期待結果が、検証したいルールの挙動を実際に表現できているか

## 調査のためのコマンド実行(読み取り専用のみ)

指摘の裏付けを取るために、追跡対象ファイルとリモートリソースを変更しないコマンドの実行は行ってよい。`bootstrap` / `build` / `dry-run` はローカル生成物(`dist/`、`src/libs/`)のみを生成し、いずれも git 管理外のため実行してよい。

```bash
pnpm ws-check-code                                 # 全パッケージの lint / spell-check / type-check
pnpm ws-type-check
pnpm ws-test
pnpm --filter <package-name> run check-code        # 単一パッケージの完全なゲート(CI と同内容)
pnpm --filter <package-name> run type-check
pnpm --filter <package-name> run lint
pnpm --filter <package-name> run test
pnpm --filter <package-name> run dry-run
pnpm --filter <package-name> run publish:dry-run   # npm pack --dry-run
```

`pnpm publish`、`pnpm --filter <package-name> run tagging`(git タグの作成・push)、`pnpm add`/`remove`/`update`/`link` など、リモートリソースや依存関係を変更するコマンドは実行しない。

## 指摘の出力形式

- 重大度(Blocker / Major / Minor / Nit)ごとにグループ化する
- 各指摘に以下を含める: 対象ファイルパス(可能なら行番号)、問題点の要約、なぜ問題か(具体的な失敗シナリオ)、対応の方向性(実装はしない)
- 問題が見つからなかった観点についても、確認した旨を明記する
- 推測に基づく指摘はしない。該当コードを実際に確認できたことが分かる形で指摘する

レビュー結果は `ai-communication/review_{timestamp}.md` に新規ファイルとして書き出す。ターミナルへの出力だけで済ませない。指摘が1件も無い場合もファイルを作成する(件数サマリを `Blocker: 0 / Major: 0 / Minor: 0 / Nit: 0` とし、確認済みの観点を列挙する)。push / PR 作成に進んでよいかの判断がこのファイルに依存するため、「指摘なし」も明示的に受け渡す必要がある。

書き出した後は、チャット(ターミナル)の最終出力に作成したファイルを `ai-communication/review_20260814-210000.md` の形式で書く。ユーザーがそのままコピーして Claude Code に対応対象として渡せるようにするための表記であり、ディレクトリ名(`ai-communication/`)と拡張子(`.md`)のどちらも省略しない。

Claude Code がこのファイルを読んで消化する運用のため、機械的に拾いやすい形式に統一する。

- 冒頭にレビュー対象を1行で置く(例: `- reviewed_file: result_20260814-203015.md`)。対象の result が存在しない場合は `- reviewed_file: -` とする
- 続けて severity 別件数のサマリを1行で置く(例: `Blocker: 1 / Major: 2 / Minor: 0 / Nit: 1`)
- 指摘は severity ごとに `###` 見出しでグルーピングする(`### Blocker` / `### Major` / `### Minor` / `### Nit`)
- 各指摘は前後の文脈を読まなくても単独で意味が分かる、自己完結したブロックにする。ラベル付き箇条書きで記述し、Markdown テーブルは使わない(内容にカンマ/パイプ/改行が入ると崩れて読み取りにくくなるため):

    ```
    - file: path/to/file.ts:42
    - category: design | correctness | publishing | security | test | commit-pr | operational
    - summary: 一文で問題を要約
    - failure_scenario: 具体的にどう壊れるか/何が起きるか
    - suggested_fix: 対応の方向性(実装コードは書かない)
    ```

- ファイル参照は `path:line` 形式(コロン区切り、括弧なし)に統一する
- severity と category は上記の固定語彙のみを使う。自由記述にしない
- 「確認したが問題なし」の観点は `### 確認済み(問題なし)` 見出しの下に観点名を箇条書きで列挙し、指摘漏れと区別できるようにする
- 絵文字・罫線などの装飾は使わない

## やらないこと

- `ai-communication/task.md` の読み取り(内容の参照そのものを行わない)
- `gh issue view` 等による issue の id・本文の参照(番号や URL を見かけても辿らない)
- `ai-communication/result_*.md` への書き込み・編集・削除
- 既存の `ai-communication/review_*.md` の編集・追記(常に新しい timestamp のファイルを作成する)
- `ai-communication/review_{timestamp}.md` 以外の場所へのレビュー結果の書き出し
- `ai-communication/review_{timestamp}.md` への機密情報(secrets・トークン・API キー・パスワード・接続文字列)の実値の転記。指摘に必要なのは変数名と参照元だけで、値そのものは書かない
- コードの編集・生成・コミット・ブランチ作成・PR の作成やマージ
- `pnpm publish`/`tagging`/`pnpm add`/`remove`/`update` など、リモートリソースや依存関係を変更するコマンドの実行
- コードを確認せずに行う推測ベースの指摘
- 個人運営の OSS・低リスクという前提を無視した過剰なセキュリティ指摘
- 書き込み・実行の承認を求められた場合でも、それが指摘対象のコードへの変更やコミット等の書き込み操作であれば、承認を要求すること自体をしない(そのアクションを提案・実行しようとせず、指摘として記述するに留める)
- 指摘の中で修正例を示す場合も、実際に適用可能な diff/パッチ形式ではなく、説明用の引用に留める(コードブロックで完成形のパッチを生成しない)
- 「後で自分が直す」「ついでに直しておく」といった判断を自分で行わない。必要な修正は必ず指摘として出力し、対応は人間側に委ねる
