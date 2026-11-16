const PARTICLES = [
  { p: "は", read: "wa", role: "thème", usage: "Annonce le sujet de la phrase, ce dont on parle. Met l'accent sur ce qui suit.", ex: [["私は学生です。", "Je suis étudiant."], ["日本語は難しいです。", "Le japonais est difficile."]] },
  { p: "が", read: "ga", role: "sujet réel", usage: "Marque l'information nouvelle, l'objet de la perception ou du goût. Obligatoire avec わかる, 好き, 上手, あります/います.", ex: [["彼が来ました。", "C'est lui qui est venu."], ["日本語がわかります。", "Je comprends le japonais."]] },
  { p: "を", read: "o", role: "objet direct", usage: "Marque ce qui subit l'action du verbe transitif. Se prononce « o ».", ex: [["パンを食べます。", "Je mange du pain."], ["音楽を聞きます。", "J'écoute de la musique."]] },
  { p: "に", read: "ni", role: "destination / moment / cible", usage: "Arrivée dans un lieu, moment précis, bénéficiaire d'une action.", ex: [["学校に行きます。", "Je vais à l'école."], ["7時に起きます。", "Je me lève à 7h."], ["友達に電話します。", "J'appelle mon ami."]] },
  { p: "で", read: "de", role: "lieu de l'action / moyen", usage: "Là où l'action a lieu, ou l'instrument employé.", ex: [["図書館で勉強します。", "J'étudie à la bibliothèque."], ["バスで行きます。", "J'y vais en bus."]] },
  { p: "と", read: "to", role: "avec / et / citation", usage: "Accompagnement, énumération complète, citation directe.", ex: [["友達と話します。", "Je parle avec un ami."], ["「はい」と言いました。", "Il a dit « oui »."]] },
  { p: "も", read: "mo", role: "aussi", usage: "Addition, inclusion : « moi aussi », « ça aussi ».", ex: [["私も学生です。", "Moi aussi je suis étudiant."], ["水もください。", "De l'eau aussi, s'il vous plaît."]] },
  { p: "の", read: "no", role: "de / possession", usage: "Relie deux noms, équivaut à « de » français. Nominalise aussi les verbes.", ex: [["先生の本です。", "C'est le livre du professeur."]] },
  { p: "へ", read: "e", role: "direction", usage: "Insiste sur la direction, moins précis que に. Se prononce « e ».", ex: [["東京へ行きます。", "Je pars en direction de Tokyo."]] },
  { p: "から", read: "kara", role: "depuis", usage: "Point de départ dans le temps ou l'espace. Aussi « parce que ».", ex: [["9時から働きます。", "Je travaille à partir de 9h."], ["東京から来ました。", "Je viens de Tokyo."]] },
  { p: "まで", read: "made", role: "jusqu'à", usage: "Limite temporelle ou spatiale.", ex: [["5時まで働きます。", "Je travaille jusqu'à 17h."], ["駅まで歩きます。", "Je marche jusqu'à la gare."]] },
  { p: "や", read: "ya", role: "liste partielle", usage: "« … et … etc. » Énumération non exhaustive, souvent avec など.", ex: [["パンやチーズを買いました。", "J'ai acheté du pain, du fromage, etc."]] },
  { p: "より", read: "yori", role: "comparatif", usage: "« Par rapport à » : AよりBのほうが…", ex: [["昨日より暖かいです。", "Il fait plus doux qu'hier."]] },
];

const SPECIAL_READ = [
  ["は", "wa", "particule de thème"],
  ["へ", "e", "particule de direction"],
  ["を", "o", "particule d'objet"],
];

const COMPARISONS = [
  {
    pair: "は vs が",
    rows: [
      ["猫は好きです。", "J'aime les chats (en général).", "は → thème général"],
      ["猫が好きです。", "J'aime les chats (ce sont eux).", "が → ce qu'on aime vraiment"],
    ],
  },
  {
    pair: "に vs で",
    rows: [
      ["学校に行きます。", "Je vais à l'école.", "に → destination"],
      ["学校で勉強します。", "J'étudie à l'école.", "で → lieu de l'action"],
    ],
  },
  {
    pair: "に vs へ",
    rows: [
      ["学校に行きます。", "Je vais à l'école.", "に → l'arrivée compte"],
      ["学校へ行きます。", "Je pars vers l'école.", "へ → la direction compte"],
    ],
  },
  {
    pair: "と vs や",
    rows: [
      ["パンとチーズを食べました。", "Pain et fromage (liste complète).", "と → et (exactement ça)"],
      ["パンやチーズを食べました。", "Pain, fromage, etc.", "や → liste non exhaustive"],
    ],
  },
  {
    pair: "は vs も",
    rows: [
      ["私は学生です。", "Je suis étudiant.", "は → nouvelle info sur moi"],
      ["私も学生です。", "Moi aussi je suis étudiant.", "も → addition"],
    ],
  },
  {
    pair: "と vs に (personne)",
    rows: [
      ["友達と話します。", "Je parle avec un ami (dialogue).", "と → réciproque"],
      ["友達に話します。", "Je parle à un ami.", "に → action dirigée vers"],
    ],
  },
];

const TRANS_PAIRS = [
  ["開ける (あける)", "開く (あく)", "ドアを開けます。 J'ouvre la porte.", "ドアが開きます。 La porte s'ouvre."],
  ["閉める (しめる)", "閉まる (しまる)", "窓を閉めます。 Je ferme la fenêtre.", "窓が閉まります。 La fenêtre se ferme."],
  ["消す (けす)", "消える (きえる)", "火を消します。 J'éteins le feu.", "火が消えます。 Le feu s'éteint."],
  ["つける", "つく", "電気をつけます。 J'allume la lumière.", "電気がつきます。 La lumière s'allume."],
  ["落とす (おとす)", "落ちる (おちる)", "コップを落としました。 J'ai fait tomber le verre.", "コップが落ちました。 Le verre est tombé."],
  ["起こす (おこす)", "起きる (おきる)", "子供を起こします。 Je réveille l'enfant.", "子供が起きます。 L'enfant se réveille."],
  ["出す (だす)", "出る (でる)", "かばんを出します。 Je sors le sac.", "かばんが出ます。 Le sac sort."],
  ["入れる (いれる)", "入る (はいる)", "お茶を入れます。 Je prépare le thé.", "部屋に入ります。 J'entre dans la pièce."],
];

const VERB_TABLE = [
  { verb: "買う — acheter", group: "1", forms: ["買います", "買いません", "買いました", "買いませんでした", "買って"] },
  { verb: "書く — écrire", group: "1", forms: ["書きます", "書きません", "書きました", "書きませんでした", "書いて"] },
  { verb: "飲む — boire", group: "1", forms: ["飲みます", "飲みません", "飲みました", "飲みませんでした", "飲んで"] },
  { verb: "話す — parler", group: "1", forms: ["話します", "話しません", "話しました", "話しませんでした", "話して"] },
  { verb: "待つ — attendre", group: "1", forms: ["待ちます", "待ちません", "待ちました", "待ちませんでした", "待って"] },
  { verb: "食べる — manger", group: "2", forms: ["食べます", "食べません", "食べました", "食べませんでした", "食べて"] },
  { verb: "見る — voir", group: "2", forms: ["見ます", "見ません", "見ました", "見ませんでした", "見て"] },
  { verb: "する — faire", group: "3", forms: ["します", "しません", "しました", "しませんでした", "して"] },
  { verb: "来る — venir", group: "3", forms: ["来ます", "来ません", "来ました", "来ませんでした", "来て"] },
];

const TE_RULES = [
  ["う・つ・る", "って", "待って, 買って, 帰って"],
  ["む・ぶ・ぬ", "んで", "飲んで, 遊んで, 死んで"],
  ["く", "いて", "書いて, 聞いて (行く → 行って : exception)"],
  ["ぐ", "いで", "泳いで, 脱いで"],
  ["す", "して", "話して, 返して"],
  ["る (groupe 2)", "て", "食べて, 見て, 寝て"],
];

const ADJ_CONJ = [
  {
    t: "Adjectifs い (exemple : 高い — cher)",
    rows: [
      ["肯定 présent", "高いです — c'est cher"],
      ["négatif présent", "高くないです — ce n'est pas cher"],
      ["affirmatif passé", "高かったです — c'était cher"],
      ["négatif passé", "高くなかったです — ce n'était pas cher"],
      ["enchaînement", "高くて — cher et…"],
      ["adverbe", "高く — chèrement (modifie le verbe)"],
    ],
  },
  {
    t: "Adjectifs な (静かな)",
    rows: [
      ["affirmatif présent", "静かです — c'est calme"],
      ["négatif présent", "静かではありません / じゃないです"],
      ["affirmatif passé", "静かでした — c'était calme"],
      ["négatif passé", "静かではありませんでした"],
      ["enchaînement", "静かで — calme et…"],
    ],
  },
];

const NUMBERS = [
  ["ゼロ / れい", "0"],
  ["いち", "1"],
  ["に", "2"],
  ["さん", "3"],
  ["し / よん", "4"],
  ["ご", "5"],
  ["ろく", "6"],
  ["なな / しち", "7"],
  ["はち", "8"],
  ["きゅう / く", "9"],
  ["じゅう", "10"],
  ["ひゃく", "100 (300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく)"],
  ["せん", "1 000 (8000 はっせん)"],
  ["いちまん", "10 000 (on compte par dizaines de milliers)"],
];

const COUNTERS = [
  ["〜つ", "objets génériques (1-10)", "ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお"],
  ["〜人", "personnes", "ひとり (1), ふたり (2), さんにん (3)…"],
  ["〜本", "objets longs (stylos, bouteilles)", "いっぽん, にほん, さんぼん, よんほん…"],
  ["〜枚", "objets plats (papiers, tickets)", "いちまい, にまい, さんまい…"],
  ["〜匹", "petits animaux", "いっぴき, にひき, さんびき…"],
  ["〜冊", "livres, cahiers", "いっさつ, にさつ, さんさつ…"],
  ["〜杯", "verres, tasses", "いっぱい, にはい, さんばい…"],
  ["〜回", "fois (fréquence)", "いっかい, にかい, さんかい…"],
  ["〜歳", "âge", "いっさい, はっさい (8), はちじゅっさい (80)…"],
  ["〜時 / 〜分", "heures / minutes", "よじ (4h), しちじ (7h) ; いっぷん, さんぷん, じゅっぷん…"],
];

const PHRASES = [
  ["こんにちは", "konnichiwa", "Bonjour (la journée)"],
  ["おはようございます", "ohayō gozaimasu", "Bonjour (le matin)"],
  ["こんばんは", "konbanwa", "Bonsoir"],
  ["さようなら", "sayōnara", "Au revoir"],
  ["ありがとうございます", "arigatō gozaimasu", "Merci beaucoup"],
  ["すみません", "sumimasen", "Excusez-moi / pardon"],
  ["はじめまして", "hajimemashite", "Enchanté(e)"],
  ["よろしくお願いします", "yoroshiku onegai shimasu", "Ravi(e) de vous rencontrer / merci d'avance"],
  ["いただきます", "itadakimasu", "Bon appétit (avant le repas)"],
  ["ごちそうさまでした", "gochisōsama deshita", "C'était délicieux (après le repas)"],
  ["お願いします", "onegai shimasu", "S'il vous plaît"],
  ["だいじょうぶです", "daijōbu desu", "Ça va / pas de problème"],
  ["わかりました", "wakarimashita", "J'ai compris"],
  ["わかりません", "wakarimasen", "Je ne comprends pas"],
  ["もう一度お願いします", "mō ichido onegai shimasu", "Encore une fois, s'il vous plaît"],
  ["英語が話せますか", "eigo ga hanasemasu ka", "Parlez-vous anglais ?"],
  ["いくらですか", "ikura desu ka", "C'est combien ?"],
  ["トイレはどこですか", "toire wa doko desu ka", "Où sont les toilettes ?"],
];

