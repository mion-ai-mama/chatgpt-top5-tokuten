/**
 * content.js — 特典ごとに書き換えるのはこのファイルだけ（文章・画像・LINEリンクの単一の源）
 *
 * - 文章中の <br> はそのまま使えます。
 * - null にした項目（avatar / visual / intro / figures / prompt / point など）は表示されません。
 * - 見た目（色・フォント・余白）は css/style.css の :root で一括管理します。特典ごとにCSSは足しません。
 * - 設計の基準は docs/requirements.md（みおん｜AI特典ページ共通デザイン仕様書）。
 */

const CONTENT = {
  meta: {
    pageTitle: "Claudeで AIチームを作る はじめてガイド｜MION AI GUIDE",
    description: "40代からでもできる。AIに仕事を任せて、時間にゆとりをつくる方法を、実際の画面つきで解説します。",
    siteUrl: "https://mion-ai-mama.github.io/instagram-tokuten-template-v2/",
  },

  // LINE誘導先（冒頭CTA・最終CTA・教科書バナーすべて共通）。ここ1か所だけ変更すればOK。
  lineUrl: "https://sub.aione.co.jp/line/open/ErxG3f10mmcK?mtid=8LTecV7UlNz5",

  // SECTION 01：ファーストビュー
  hero: {
    brand: "MION AI GUIDE",
    titleLines: ["Claudeで", "AIチームを作る", "はじめてガイド"],
    lead: "40代からでもできる！<br>AIに仕事を任せて、時間にゆとりをつくる方法",
    buttonText: "さっそく読む",
    buttonTarget: "step1",
    // 本人写真（アイコン）を使う版: { src, alt, name } ／ 使わない版: null
    avatar: null,
    // 特典内容に合うメインビジュアル: { src, alt } ／ なし: null
    visual: null,
  },

  // SECTION 02：冒頭CTA（本文より目立ちすぎない淡いグレージュの横長ボックス）
  topCta: {
    heading: "AIをもっと仕事に活かしたい方へ",
    text: "AIを使って、自分の働き方の選択肢を広げたい方に、無料で学べる情報をお届けしています。",
    buttonText: "無料で受け取る →",
    // ボックス上部の画像（タップでLINEへ）。不要なら null
    image: {
      src: "assets/images/textbook-benefits.jpg",
      alt: "AIマネタイズの教科書 5大特典。1 いま一番始めやすいAIマネタイズ手法、2 ChatGPT収益化プロンプト3選、3 AIマネタイズ神テンプレート、4 マネタイズのための生成AIツール3選、5 AI×SNSで収益を生むリアル事例",
    },
  },

  // SECTION 03：この特典でわかること（3〜5項目）
  learn: {
    heading: "このガイドで<br>わかること",
    items: [
      "ClaudeでAIチームを作る基本の考え方",
      "実際のプロンプト例と設定の手順",
      "仕事の効率がぐっと上がる活用法",
      "初心者がつまずきやすいポイントと解決策",
    ],
    // リード文（ポイントボックス）。不要なら null
    intro: "Claudeの「プロジェクト機能」を使えば、リサーチ・分析・台本作成などの作業をAIにチームで任せることができます。このガイドでは、実際の画面を使って、設定方法から活用例までをわかりやすく解説します。",
  },

  // SECTION 04：本編（STEP形式）。内容に合わなければ見出し型の steps にしてもよい。
  // figures: 実際の画面キャプチャ。point: ポイントボックス（1セクション原則1〜2個）。
  steps: [
    {
      number: "01",
      title: "プロジェクトを作成する",
      lead: "まずはClaudeで新しいプロジェクトを作成します。プロジェクトごとに目的や役割を設定することで、AIが一貫したサポートをしてくれます。",
      paragraphs: [],
      list: [],
      figures: [
        {
          src: "assets/images/sample-screen.svg",
          alt: "サンプル枠：ここに実際の画面キャプチャが入ります",
          caption: "左側メニューの「プロジェクト」から「新しいプロジェクトを作成」をクリックします。",
        },
      ],
      prompt: null,
      point: {
        label: "POINT",
        text: "プロジェクト名は「どんな目的で使うか」がわかる名前にしておくと、後から見返したときに便利です。",
        examplesLabel: "例",
        examples: ["リサーチチーム", "SNS分析チーム", "台本作成チーム"],
      },
    },
    {
      number: "02",
      title: "AIメンバーの役割を設定する",
      lead: "それぞれのAIに役割を与えることで、より質の高いアウトプットが得られます。",
      paragraphs: [],
      list: ["サンプル：役割の例を箇条書きにする", "サンプル：初心者向けに専門用語を説明する"],
      figures: [],
      prompt: {
        label: "コピペで使える指示文（サンプル）",
        text: "あなたはSNS分析の担当です。\n40代の初心者にもわかる言葉で、\n人気投稿の共通点を3つに整理してください。",
        buttonText: "指示文をコピーする",
        copiedText: "コピーしました",
      },
      point: null,
    },
  ],

  // SECTION 05：まとめ（3〜5項目）＋小さな一歩
  summary: {
    heading: "今日のまとめ",
    items: [
      "プロジェクトを作ると、AIに一貫した役割を任せられる",
      "役割を決めるほど、答えの質が安定する",
      "まずは小さな作業を1つ任せてみる",
    ],
    nextStep: {
      label: "小さな一歩",
      text: "今日は、いちばん時間がかかっている作業を1つだけ選んで、AIに任せてみましょう。",
    },
  },

  // SECTION 06：最終CTA（冒頭より少し存在感を持たせる。強引な表現は使わない）
  finalCta: {
    heading: "知るだけで終わらせない。<br>次は、あなたの番。",
    text: "AIを使って、今よりもっと自由な働き方を目指したい方へ。AI初心者さん向けの『AIマネタイズの教科書』を、LINEで無料でお届けしています。",
    buttonText: "無料で受け取る →",
  },

  // 最終CTAの下：教科書バナー＋AI収益化サポート会の案内（標準で入れる）
  textbook: {
    // 特典の内容に合わせて毎回書き直す「橋渡し」の一文
    bridge: "今回紹介した方法は、AIの活用法のほんの一例です。実際の仕事や日々の作業にどう活かすかを知ることで、できることはさらに広がります。",
    banner: "assets/images/cta-banner.jpg",
    bannerAlt: "無料プレゼント AIマネタイズ教科書。AIで働き方の選択肢を広げたい方へ。LINE登録はこちら",
    support:
      "また、「何から始めたらいいのかわからない」「自分には何が向いているのか相談したい」という方に向けて、<strong>AI収益化サポート会</strong>も実施中です。個別でのご相談も、LINEから受け付けています。",
  },

  footer: {
    copyright: "© MION",
    notice: "このページの内容の無断転載・複製はご遠慮ください。",
  },
};
