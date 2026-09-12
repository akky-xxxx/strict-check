# PR 作成ルール

- PR を作成する場合、base branch は原則 `develop` とする
- PR 本文は `CLAUDE.md` の「PR テンプレート」の形式(日本語)で書く。`release@<YYYYMMDD>` の release PR と green keeping の PR は、タイトル・ラベル・base/head・本文の形式について、それぞれ `.claude/skills/release-flow` / `.claude/skills/green-keeping` の規約を優先する
- 作業ブランチの push はユーザーが実行する。エージェントは実行するコマンド(`git push -u origin <branch>` / `git push`)を提示するところまでを担当する(`.claude/settings.json` の deny に `Bash(git push:*)` がある)
- PR 作成はエージェントが実行してよい。ただし実行前に base/head・タイトル・ラベル・本文・実行するコマンドをまとめて提示し、ユーザーの明示的な承認を得る。承認を得ずに `gh pr create` を実行しない。未 push のブランチには PR を作成できないため、ユーザーの push が済んでいることを確認してから実行する
- PR の merge はユーザーが実行する。エージェントは `gh pr merge` 等のマージ操作を実行しない(承認や依頼があっても実行しない。`.claude/settings.json` の deny に `Bash(gh pr merge:*)` がある)
- リリース時のタグ公開(`.claude/skills/release-flow` のステージ4 で実行する `pnpm --filter <package-name> run tagging`)は、作業ブランチの push とは別の操作であり、git tag の push と npm 公開のトリガーを兼ねる。これはエージェントが実行してよいが、対象パッケージ名・バージョン・作成されるタグ文字列を提示してユーザーの明示的な承認を得てから実行する。手順の詳細は同 skill に従う
- 実行担当と承認の扱いは `green-keeping` / `release-flow` を含むすべての作業に適用され、skill 側の規約が優先されるのは上記の PR の形式(タイトル・ラベル・base/head・本文)に限る
- 変更差分を確認する際は、比較の直前に `git fetch origin` でリモート追跡ブランチを更新し、基準には `origin/develop`(例: `git diff origin/develop...HEAD`)を使う。`git fetch` は `origin/develop` などのリモート追跡ブランチを更新するだけでローカル `develop` 自体は進まないため、ローカル `develop` は基準にしない。`origin/develop` も直前に fetch していなければ古いままなので、比較のたびに fetch してから使う
- issue 対応の作業では、PR merge で issue を close できるように PR description に `closes #<issue番号>` の形式で記載する
