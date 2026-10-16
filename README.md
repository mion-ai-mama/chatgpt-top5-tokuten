# Instagram特典ページ テンプレート v2

みおん｜AI特典ページ共通デザイン（白×黒×グレージュ・明朝見出し）の静的サイトテンプレートです。

## 使い方

1. GitHubで **Use this template** から複製する
2. `js/content.js` を書き換える（文章・STEP・画像・プロンプト。LINEリンクは `lineUrl`）
3. 画面キャプチャを `assets/images/` に置き、各STEPの `figures` で指定する
4. 写真ありバージョン: `hero.avatar = { src: "assets/images/profile-icon.jpg", alt, name }` ／ なしバージョン: `null`
5. GitHub Pages（main）で公開する

見た目の調整は `css/style.css` の `:root`、設計の基準は `docs/requirements.md` を参照してください。

ローカル確認: `python3 -m http.server 8000` → http://localhost:8000
