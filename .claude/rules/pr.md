# PR 作成ルール

- PR を作成する場合、base branch は原則 `develop` とする
- PR 本文は `CLAUDE.md` の「PR テンプレート」の形式(日本語)で書く。`release@<YYYYMMDD>` の release PR と green keeping の PR は、タイトル・ラベル・base/head・本文の形式について、それぞれ `.claude/skills/release-flow` / `.claude/skills/green-keeping` の規約を優先する
- push と PR 作成はユーザーが実行する。エージェントは実行するコマンドと内容を提示するところまでを担当する。これは `green-keeping` / `release-flow` を含むすべての作業に適用され、skill 側の規約が優先されるのは上記の形式に限る
- ここでいう push は作業ブランチの push を指す。リリース時のタグ公開(`.claude/skills/release-flow` のステージ4 で実行する `pnpm tagging`)は git tag の push と npm 公開のトリガーを兼ねる別の操作であり、実行担当を含めて同 skill の手順に従う
- 変更差分を確認する際は、比較の直前に `git fetch origin` でリモート追跡ブランチを更新し、基準には `origin/develop`(例: `git diff origin/develop...HEAD`)を使う。`git fetch` は `origin/develop` などのリモート追跡ブランチを更新するだけでローカル `develop` 自体は進まないため、ローカル `develop` は基準にしない。`origin/develop` も直前に fetch していなければ古いままなので、比較のたびに fetch してから使う
- issue 対応の作業では、PR merge で issue を close できるように PR description に `closes #<issue番号>` の形式で記載する
