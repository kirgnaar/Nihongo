// Données P5 : textes de lecture.
// Rédaction : examinateur en chef. Règle stricte : uniquement du vocabulaire
// et de la grammaire couverts jusqu'à la leçon indiquée (champ lessons).
// cat 1 : un texte court par leçon ; cat 2 : textes gradués ; cat 3 : textes longs type examen ; cat 4 : textes longs (annonce, lettre, extrait de livre).
// Format : { id, cat, level, lessons, title, advice, lines: [[jp, lecture kana, français]], quiz: [{q, choices, a, e}] }.
const LECTURES = [
  {
    id: "c1",
    cat: 1,
    level: "Leçon 1",
    lessons: [1],
    title: "「はじめまして」",
    advice: "Repérez le motif 〜は〜です, la brique de base de la leçon : は annonce le thème, です est la copule polie. Un simple か final transforme une affirmation en question.",
    lines: [
      ["はじめまして。リナです。", "はじめまして。リナです。", "Enchantée. Je m'appelle Lina."],
      ["リナはフランス人です。学生です。", "リナはフランスじんです。がくせいです。", "Lina est française. Elle est étudiante."],
      ["田中さんは日本語の先生です。", "たなかさんはにほんごのせんせいです。", "Monsieur Tanaka est professeur de japonais."],
      ["「リナさんは会社員ですか。」「いいえ、学生です。」", "「リナさんはかいしゃいんですか。」「いいえ、がくせいです。」", "« Êtes-vous employée de bureau, Lina ? » « Non, je suis étudiante. »"],
      ["よろしくお願いします。", "よろしくおねがいします。", "Ravi de vous rencontrer."]
    ],
    quiz: [
      { q: "Que fait Monsieur Tanaka dans le texte ?", choices: ["Il est étudiant", "Il est professeur de japonais", "Il est employé de bureau", "Il est français"], a: 1, e: "日本語の先生です : professeur de japonais. の relie les deux noms, comme « de » en français." },
      { q: "Que répond Lina à « 会社員ですか » ?", choices: ["はい", "はじめまして", "よろしくお願いします", "いいえ"], a: 3, e: "いいえ、学生です : elle n'est pas employée de bureau, elle est étudiante." },
      { q: "「よろしくお願いします » s'emploie :", choices: ["À la fin d'une présentation", "Pour demander le prix", "Pour dire non", "Pour commander un plat"], a: 0, e: "Formule de politesse qui conclut une première rencontre." }
    ],
  },
  {
    id: "c2",
    cat: 1,
    level: "Leçon 2",
    lessons: [1, 2],
    title: "「それは何ですか」",
    advice: "Trois distances : これ (près de moi), それ (près de vous), あれ (loin de nous deux). Même logique pour この/その/あの suivis d'un nom, et ここ/そこ/あそこ pour les lieux.",
    lines: [
      ["これは何ですか。", "これはなんですか。", "Qu'est-ce que ceci ?"],
      ["それは私の本です。", "それはわたしのほんです。", "Cela, près de vous, c'est mon livre."],
      ["あれはリナのかばんです。", "あれはリナのかばんです。", "Là-bas, c'est le sac de Lina."],
      ["この人は田中さんです。", "このひとはたなかさんです。", "Cette personne, près de moi, c'est Monsieur Tanaka."],
      ["「トイレはどこですか。」「あそこです。」", "「トイレはどこですか。」「あそこです。」", "« Où sont les toilettes ? » « Là-bas. »"]
    ],
    quiz: [
      { q: "Le sac de Lina se trouve :", choices: ["Près du locuteur", "Près de l'interlocuteur", "Dans une bibliothèque", "Loin des deux personnes"], a: 3, e: "あれはリナのかばんです : あれ désigne un objet éloigné des deux personnes." },
      { q: "「それは私の本です » : le livre est…", choices: ["près de la personne qui écoute", "près de la personne qui parle", "loin des deux personnes", "sur la table"], a: 0, e: "それ = objet proche de l'interlocuteur, celui qui écoute." },
      { q: "Pour demander où sont les toilettes :", choices: ["トイレは何ですか。", "トイレはだれですか。", "トイレはどこですか。", "トイレはこれですか。"], a: 2, e: "どこ = où. 何 = quoi, だれ = qui." }
    ],
  },
  {
    id: "c3",
    cat: 1,
    level: "Leçon 3",
    lessons: [1, 2, 3],
    title: "「明日、駅へ」",
    advice: "へ indique la direction (駅へ), で le lieu de l'action (図書館で), と signifie « avec » (友達と), に le moment (9時に). それから relie deux actions successives.",
    lines: [
      ["明日、リナは友達と駅へ行きます。", "あした、リナはともだちとえきへいきます。", "Demain, Lina va à la gare avec une amie."],
      ["図書館で本を読みます。それから、カフェでコーヒーを飲みます。", "としょかんでほんをよみます。それから、カフェでコーヒーをのみます。", "Elle lit un livre à la bibliothèque. Ensuite, elle boit un café au café."],
      ["リナは本を買います。", "リナはほんをかいます。", "Lina achète un livre."],
      ["田中さんも行きたいです。", "たなかさんもいきたいです。", "Monsieur Tanaka voudrait aussi y aller."],
      ["9時に友達と駅で会います。", "くじにともだちとえきであいます。", "À 9h, elle retrouve son amie à la gare."]
    ],
    quiz: [
      { q: "Où Lina lit-elle un livre ?", choices: ["À la bibliothèque", "À la gare", "Au café", "À l'école"], a: 0, e: "図書館で本を読みます : で marque le lieu où se déroule l'action." },
      { q: "Avec qui Lina va-t-elle à la gare ?", choices: ["Avec Monsieur Tanaka", "Avec un professeur", "Avec un(e) ami(e)", "Toute seule"], a: 2, e: "友達と駅へ行きます : と = avec." },
      { q: "« 田中さんも行きたいです » signifie :", choices: ["Tanaka ne veut pas y aller", "Tanaka voudrait aussi y aller", "Tanaka attend à la gare", "Tanaka lit à la gare"], a: 1, e: "も = aussi ; 行きたいです = vouloir aller." }
    ],
  },
  {
    id: "c4",
    cat: 1,
    level: "Leçon 4",
    lessons: [1, 2, 3, 4],
    title: "「新しいかばん」",
    advice: "L'adjectif en い se place directement devant le nom (新しいかばん), l'adjectif en な prend な (静かな色). 〜くて et 〜で enchaînent deux descriptions : 軽くて、きれいです.",
    lines: [
      ["リナは新しいかばんを買います。", "リナはあたらしいかばんをかいます。", "Lina achète un nouveau sac."],
      ["店員「いらっしゃいませ。」", "てんいん「いらっしゃいませ。」", "Le vendeur : « Bienvenue ! »"],
      ["このかばんは大きいですね。いくらですか。", "このかばんはおおきいですね。いくらですか。", "Ce sac est grand, non ? Il coûte combien ?"],
      ["4,000円です。軽くて、きれいですよ。", "よんせんえんです。かるくて、きれいですよ。", "4 000 yens. Il est léger et joli."],
      ["「ちょっと高いですね。もっと安いのはありますか。」", "「ちょっとたかいですね。もっとやすいのはありますか。」", "« Un peu cher. Avez-vous quelque chose de moins cher ? »"],
      ["この小さいかばんは2,000円です。静かな色です。", "このちいさいかばんはにせんえんです。しずかないろです。", "Ce petit sac est à 2 000 yens. C'est une couleur sobre."],
      ["リナはそれを買います。", "リナはそれをかいます。", "Lina achète celui-ci."]
    ],
    quiz: [
      { q: "Combien coûte le grand sac ?", choices: ["2 000 yens", "8 000 yens", "4 000 yens", "400 yens"], a: 2, e: "このかばんは大きいですね → 4,000円です." },
      { q: "Pourquoi Lina hésite-t-elle devant le premier sac ?", choices: ["Il est trop petit", "Il est un peu cher", "Il est trop lourd", "Il est vieux"], a: 1, e: "ちょっと高いですね : un peu cher." },
      { q: "Dans « 静かな色 », l'adjectif 静かな est :", choices: ["Un adjectif en い", "Un verbe", "Un nom", "Un adjectif en な"], a: 3, e: "静かな garde な devant le nom : c'est un adjectif en な." }
    ],
  },
  {
    id: "c5",
    cat: 1,
    level: "Leçon 5",
    lessons: [1, 2, 3, 4, 5],
    title: "「毎朝」",
    advice: "La série polie : ます, ません, ました, ませんでした. に marque l'heure précise (7時に), から〜まで la plage horaire (9時から5時まで).",
    lines: [
      ["リナは毎朝7時に起きます。", "リナはまいあさしちじにおきます。", "Chaque matin, Lina se lève à 7h."],
      ["朝ご飯を食べて、学校へ行きます。", "あさごはんをたべて、がっこうへいきます。", "Elle mange le petit-déjeuner puis va à l'école."],
      ["9時から5時まで、学校の図書館で働きます。", "くじからごじまで、がっこうのとしょかんではたらきます。", "De 9h à 17h, elle travaille à la bibliothèque de l'école."],
      ["夜は日本語を勉強します。", "よるはにほんごをべんきょうします。", "Le soir, elle étudie le japonais."],
      ["10時に寝ます。", "じゅうじにねます。", "Elle se couche à 22h."],
      ["日曜日は何もしません。", "にちようびはなにもしません。", "Le dimanche, elle ne fait rien."]
    ],
    quiz: [
      { q: "À quelle heure Lina se lève-t-elle ?", choices: ["À 9h", "À 7h", "À 5h", "À 10h"], a: 1, e: "毎朝7時に起きます : に marque le moment précis." },
      { q: "Que fait Lina de 9h à 17h ?", choices: ["Elle étudie le japonais", "Elle dort", "Elle achète un sac", "Elle travaille"], a: 3, e: "9時から5時まで、学校の図書館で働きます : から〜まで = de… à… (une plage horaire)." },
      { q: "« 日曜日は何もしません » signifie :", choices: ["Le dimanche, je ne fais rien", "Le dimanche, je fais du sport", "Le dimanche, je me lève à 7h", "Le dimanche, je travaille"], a: 0, e: "何も + verbe négatif = rien du tout." }
    ],
  },
  {
    id: "c6",
    cat: 1,
    level: "Leçon 6",
    lessons: [1, 2, 3, 4, 5, 6],
    title: "「窓を開けて」",
    advice: "〜ています exprime l'action en cours (書いています) ou un état (住んでいます). 〜てもいいですか demande la permission, 〜てから signifie « après avoir fait ».",
    lines: [
      ["今、リナは日本語を勉強しています。漢字を書いています。", "いま、リナはにほんごをべんきょうしています。かんじをかいています。", "En ce moment, Lina étudie le japonais. Elle est en train d'écrire des kanji."],
      ["田中さん「すみません、窓を開けてもいいですか。」", "たなかさん「すみません、まどをあけてもいいですか。」", "Tanaka : « Puis-je ouvrir la fenêtre ? »"],
      ["リナ「はい、どうぞ。」", "リナ「はい、どうぞ。」", "Lina : « Oui, je vous en prie. »"],
      ["田中さんは手を洗って来ます。", "たなかさんはてをあらってきます。", "Tanaka va se laver les mains."],
      ["コーヒーを飲んでから、一緒に勉強します。", "コーヒーをのんでから、いっしょにべんきょうします。", "Après avoir bu un café, ils étudient ensemble."],
      ["田中さん「リナさんは頑張りますね。」", "たなかさん「リナさんはがんばりますね。」", "Tanaka : « Vous vous donnez du mal, Lina. »"]
    ],
    quiz: [
      { q: "Que fait Lina en ce moment ?", choices: ["Elle ouvre la fenêtre", "Elle lave ses mains", "Elle prépare un café", "Elle étudie le japonais"], a: 3, e: "今、日本語を勉強しています : 〜ています = action en cours." },
      { q: "« 窓を開けてもいいですか » est :", choices: ["Une demande de permission", "Une interdiction", "Un ordre direct", "Une question de prix"], a: 0, e: "〜てもいいですか : puis-je… ?" },
      { q: "« 手を洗って来ます » signifie :", choices: ["J'ai déjà lavé mes mains", "Je lave la fenêtre", "Je vais me laver les mains", "Je ne lave pas mes mains"], a: 2, e: "〜て来ます : faire l'action puis revenir." }
    ],
  },
  {
    id: "c7",
    cat: 1,
    level: "Leçon 7",
    lessons: [1, 2, 3, 4, 5, 6, 7],
    title: "「りんごを三つ」",
    advice: "Chaque catégorie d'objets a son compteur : 〜つ (objets génériques, de 1 à 10), 〜本 (objets longs), 〜枚 (objets plats), 〜個 (petits objets), 〜人 (personnes). Pour commander : nom + を + nombre + ください.",
    lines: [
      ["リナ「すみません、りんごはいくらですか。」", "リナ「すみません、りんごはいくらですか。」", "Lina : « Excusez-moi, les pommes, c'est combien ? »"],
      ["店員「一つ200円です。」", "てんいん「ひとつにひゃくえんです。」", "Le vendeur : « 200 yens la pièce. »"],
      ["リナ「三つください。全部でいくらですか。」", "リナ「みっつください。ぜんぶでいくらですか。」", "Lina : « Trois, s'il vous plaît. En tout, ça fait combien ? »"],
      ["店員「600円です。お弁当はいかがですか。一つ500円です。」", "てんいん「ろっぴゃくえんです。おべんとうはいかがですか。ひとつごひゃくえんです。」", "Le vendeur : « 600 yens. Un bentō, ça vous dit ? 500 yens l'unité. »"],
      ["リナ「二つお願いします。」", "リナ「ふたつおねがいします。」", "Lina : « J'en prends deux, s'il vous plaît. »"],
      ["店員「はい、1,600円です。ありがとうございます。」", "てんいん「はい、せんろっぴゃくえんです。ありがとうございます。」", "Le vendeur : « Voilà, 1 600 yens. Merci beaucoup. »"]
    ],
    quiz: [
      { q: "Combien paie Lina pour les pommes ?", choices: ["600 yens", "200 yens", "1 600 yens", "500 yens"], a: 0, e: "Trois pommes à 200 yens : 600円 (ろっぴゃくえん)." },
      { q: "Avec « お弁当はいかがですか », le vendeur :", choices: ["Refuse la vente", "Annonce la fermeture", "Propose un bentō", "Demande l'heure"], a: 2, e: "いかがですか : formule polie pour proposer quelque chose." },
      { q: "Le total de l'achat est de :", choices: ["1 100 yens", "1 600 yens", "600 yens", "2 100 yens"], a: 1, e: "Pommes 600 yens + deux bentō à 500 yens = 1 600円." }
    ],
  },
  {
    id: "c8",
    cat: 1,
    level: "Leçon 8",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8],
    title: "「テストは何曜日」",
    advice: "L'heure : 〜時〜分, 半 = et demie. Les jours se terminent par 曜日 : 月曜日 (lundi), 火曜日 (mardi)… に marque le moment (金曜日に), 〜ましょう propose une action commune.",
    lines: [
      ["日本語の授業は9時から10時半までです。", "にほんごのじゅぎょうはくじからじゅうじはんまでです。", "Le cours de japonais va de 9h à 10h30."],
      ["何曜日ですか。月曜日と木曜日です。", "なんようびですか。げつようびともくようびです。", "C'est quels jours ? Lundi et jeudi."],
      ["来週の金曜日にテストがあります。", "らいしゅうのきんようびにテストがあります。", "Vendredi prochain, il y a un test."],
      ["テストは大変ですね。", "テストはたいへんですね。", "Le test, c'est stressant, non ?"],
      ["今度の週末、一緒に勉強しましょう。", "こんどのしゅうまつ、いっしょにべんきょうしましょう。", "Ce week-end, révisons ensemble."],
      ["10時に駅で会いましょう。", "じゅうじにえきであいましょう。", "Retrouvons-nous à 10h à la gare."]
    ],
    quiz: [
      { q: "Quand a lieu le test ?", choices: ["Lundi prochain", "Jeudi prochain", "Vendredi prochain", "Ce week-end"], a: 2, e: "来週の金曜日にテストがあります : 来週 = la semaine prochaine." },
      { q: "Le cours de japonais dure…", choices: ["de 10h à 10h30", "de 9h à 10h30", "de 9h à 12h", "une demi-heure"], a: 1, e: "9時から10時半まで : から〜まで pour la plage horaire, 半 = et demie." },
      { q: "« 駅で会いましょう » : on propose…", choices: ["de courir à la gare", "d'acheter un billet", "de partir sans l'autre", "de se retrouver à la gare"], a: 3, e: "〜ましょう propose de faire ensemble ; 会いましょう = retrouvons-nous." }
    ],
  },
  {
    id: "c9",
    cat: 1,
    level: "Leçon 9",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    title: "「猫と犬」",
    advice: "あります pour les objets, います pour les vivants : 場所に〜があります/います. Aimer prend が (猫が好きです). Comparer : AよりBのほうが, superlatif : いちばん.",
    lines: [
      ["リナの家の近くに猫がたくさんいます。", "リナのいえのちかくにねこがたくさんいます。", "Près de chez Lina, il y a beaucoup de chats."],
      ["公園に子供もいます。", "こうえんにもこどももいます。", "Au parc, il y a aussi des enfants."],
      ["リナは犬のほうが好きです。猫より犬のほうが好きです。", "リナはいぬのほうがすきです。ねこよりいぬのほうがすきです。", "Lina préfère les chiens. Elle aime plus les chiens que les chats."],
      ["東京と京都、どちらが好きですか。", "とうきょうときょうと、どちらがすきですか。", "Tokyo et Kyoto, laquelle préfère-t-elle ?"],
      ["京都のほうが静かです。食べ物は東京がいちばんおいしいです。", "きょうとのほうがしずかです。たべものはとうきょうがいちばんおいしいです。", "Kyoto est plus calme. Côté nourriture, Tokyo est la meilleure."],
      ["京都にはお寺がたくさんあります。", "きょうとにはおてらがたくさんあります。", "À Kyoto, il y a beaucoup de temples."]
    ],
    quiz: [
      { q: "Qu'y a-t-il près de chez Lina ?", choices: ["Beaucoup de chiens", "Beaucoup de chats", "Beaucoup de temples", "Beaucoup de parcs"], a: 1, e: "家の近くに猫がたくさんいます : います pour les êtres vivants." },
      { q: "Lina préfère :", choices: ["les chats", "les enfants", "les deux autant", "les chiens"], a: 3, e: "猫より犬のほうが好きです : Bのほうが = B l'emporte sur A." },
      { q: "« 食べ物は東京がいちばんおいしい » signifie :", choices: ["Côté nourriture, Tokyo est la meilleure", "Kyoto mange mieux", "La nourriture est chère à Tokyo", "Tokyo est calme"], a: 0, e: "いちばん forme le superlatif : le plus." }
    ],
  },
  {
    id: "c10",
    cat: 1,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「映画へ行きましょう」",
    advice: "〜ませんか invite poliment (« ça te dirait de… ? »), 〜ましょう propose ensemble, 〜たいです exprime l'envie, 〜ことができます la capacité. 少し = un peu, まだ = encore.",
    lines: [
      ["田中さん「今週の週末、映画を見ませんか。」", "たなかさん「こんしゅうのしゅうまつ、えいがをみませんか。」", "Tanaka : « Ce week-end, ça te dirait d'aller voir un film ? »"],
      ["リナ「いいですね。日本の映画が見たいです。」", "リナ「いいですね。にほんのえいががみたいです。」", "Lina : « Bonne idée. J'ai envie de voir un film japonais. »"],
      ["二人で映画へ行きます。", "ふたりでえいがへいきます。", "Ils vont au cinéma à deux."],
      ["リナは日本語の新聞が少し読めます。", "リナはにほんごのしんぶんがすこしよめます。", "Lina sait lire un peu les journaux japonais."],
      ["まだ難しいですが、頑張ります。", "まだむずかしいですが、がんばります。", "C'est encore difficile, mais elle persévère."],
      ["映画の後、田中さんは漢字を教えます。", "えいがのあと、たなかさんはかんじをおしえます。", "Après le film, Tanaka lui enseignera des kanji."],
      ["リナ「楽しみです。」", "リナ「たのしみです。」", "Lina : « J'ai hâte. »"]
    ],
    quiz: [
      { q: "Que propose Tanaka à Lina ?", choices: ["De lire un journal", "D'étudier tout de suite", "De préparer un bentō", "D'aller voir un film"], a: 3, e: "映画を見ませんか : 〜ませんか est une invitation polie." },
      { q: "« 日本の映画が見たいです » : Lina…", choices: ["a envie de voir un film japonais", "déteste les films", "a déjà vu le film", "préfère les films français"], a: 0, e: "〜たいです exprime le désir de faire." },
      { q: "Après le film, Tanaka :", choices: ["Lira le journal", "Rentrera à la gare", "Enseignera des kanji à Lina", "Préparera le repas"], a: 2, e: "漢字を教えます : 教えます = enseigner." }
    ],
  },
  {
    id: "g1",
    cat: 2,
    level: "Leçon 4",
    lessons: [1, 2, 3, 4],
    title: "「私の学校」",
    advice: "Un texte qui combine les leçons 1 à 4 : la présentation 〜は〜です, les trois distances これ/それ/あれ, les adjectifs い et な. Lisez à voix haute en repérant chaque particule.",
    lines: [
      ["私はリナです。フランス人です。学生です。", "わたしはリナです。フランスじんです。がくせいです。", "Je m'appelle Lina. Je suis française. Je suis étudiante."],
      ["私のかばんは大きいです。新しいかばんです。", "わたしのかばんはおおきいです。あたらしいかばんです。", "Mon sac est grand. C'est un sac neuf."],
      ["この本は日本の本です。高いです。", "このほんはにほんのほんです。たかいです。", "Ce livre est un livre du Japon. Il est cher."],
      ["そのかばんは安いです。軽くて、きれいです。", "そのかばんはやすいです。かるくて、きれいです。", "Ce sac-là est pas cher. Il est léger et joli."],
      ["あの人は田中さんです。日本語の先生です。", "あのひとはたなかさんです。にほんごのせんせいです。", "Cette personne là-bas, c'est Monsieur Tanaka. C'est un professeur de japonais."],
      ["私の学校はあそこです。学校は静かで、きれいです。", "わたしのがっこうはあそこです。がっこうはしずかで、きれいです。", "Mon école est là-bas. L'école est calme et jolie."],
      ["いい学校です。", "いいがっこうです。", "C'est une bonne école."],
      ["明日、友達と学校へ行きます。", "あした、ともだちとがっこうへいきます。", "Demain, j'irai à l'école avec une amie."]
    ],
    quiz: [
      { q: "Le sac de Lina est :", choices: ["grand et neuf", "petit et vieux", "léger et vieux", "cher"], a: 0, e: "私のかばんは大きいです。新しいかばんです : l'adjectif い se place devant le nom." },
      { q: "Le livre du Japon est :", choices: ["pas cher", "léger", "cher", "vieux"], a: 2, e: "この本は日本の本です。高いです." },
      { q: "L'école de Lina est :", choices: ["bruyante", "calme et jolie", "toute petite", "très loin"], a: 1, e: "学校は静かで、きれいです : な-adjectif + で pour enchaîner." }
    ],
  },
  {
    id: "g2",
    cat: 2,
    level: "Leçon 6",
    lessons: [1, 2, 3, 4, 5, 6],
    title: "「毎朝の勉強」",
    advice: "La forme て enchaîne les actions du quotidien (洗って、食べます) et 〜ています décrit une action en cours (書いています). 〜てから : « après avoir fait ».",
    lines: [
      ["毎朝6時に起きます。", "まいあさろくじにおきます。", "Chaque matin, elle se lève à 6h."],
      ["手を洗って、朝ご飯を食べます。", "てをあらって、あさごはんをたべます。", "Elle se lave les mains puis mange le petit-déjeuner."],
      ["朝ご飯はパンです。それから、コーヒーを飲みます。", "あさごはんはパンです。それから、コーヒーをのみます。", "Le petit-déjeuner, c'est du pain. Ensuite, elle boit un café."],
      ["8時に学校へ行きます。", "はちじにがっこうへいきます。", "À 8h, elle va à l'école."],
      ["今、日本語を勉強しています。漢字を書いています。", "いま、にほんごをべんきょうしています。かんじをかいています。", "En ce moment, elle étudie le japonais. Elle écrit des kanji."],
      ["田中さんは本を読んでいます。", "たなかさんはほんをよんでいます。", "Monsieur Tanaka est en train de lire un livre."],
      ["一緒に日本語を勉強します。頑張ります。", "いっしょににほんごをべんきょうします。がんばります。", "Ils étudient le japonais ensemble. Elle persévère."],
      ["夜は日本語の本を読んでから、10時に寝ます。", "よるはにほんごのほんをよんでから、じゅうじにねます。", "Le soir, après avoir lu un livre de japonais, elle se couche à 22h."]
    ],
    quiz: [
      { q: "Que fait Lina juste après s'être levée ?", choices: ["Elle écrit des kanji", "Elle boit seulement un café", "Elle se lave les mains et mange", "Elle va à l'école"], a: 2, e: "手を洗って、朝ご飯を食べます : la forme て enchaîne deux actions dans l'ordre." },
      { q: "À 8 heures, Lina…", choices: ["se lève", "va à l'école", "lit un livre", "boit un café"], a: 1, e: "8時に学校へ行きます : へ marque la direction." },
      { q: "Le soir, Lina…", choices: ["écrit des kanji", "regarde la fenêtre", "se lève à 6h", "lit puis se couche à 22h"], a: 3, e: "本を読んでから、10時に寝ます : 〜てから = après avoir fait." }
    ],
  },
  {
    id: "g3",
    cat: 2,
    level: "Leçon 7",
    lessons: [1, 2, 3, 4, 5, 6, 7],
    title: "「お店で」",
    advice: "Chaque objet a son compteur : 〜本 pour les bouteilles, 〜つ pour les objets génériques. Suivez les prix en yens et vérifiez le total : 全部で.",
    lines: [
      ["明日、リナは水とりんごを買います。", "あした、リナはみずとりんごをかいます。", "Demain, Lina achète de l'eau et des pommes."],
      ["水は一本150円です。りんごは一つ100円です。", "みずはいっぽんひゃくごじゅうえんです。りんごはひとつひゃくえんです。", "L'eau coûte 150 yens la bouteille. Les pommes, 100 yens la pièce."],
      ["リナ「水を二本ください。」", "リナ「みずをにほんください。」", "Lina : « Deux bouteilles d'eau, s'il vous plaît. »"],
      ["店員「はい。りんごはいかがですか。一つ100円です。」", "てんいん「はい。りんごはいかがですか。ひとつひゃくえんです。」", "Le vendeur : « Oui. Des pommes, ça vous dit ? 100 yens la pièce. »"],
      ["リナ「四つください。全部でいくらですか。」", "リナ「よっつください。ぜんぶでいくらですか。」", "Lina : « Quatre, s'il vous plaît. En tout, ça fait combien ? »"],
      ["店員「700円です。」", "てんいん「ななひゃくえんです。」", "Le vendeur : « 700 yens. »"],
      ["リナ「ちょっと高いですね。」", "リナ「ちょっとたかいですね。」", "Lina : « Un peu cher, tout de même. »"],
      ["店員「この水は安いです。一本100円です。全部で600円です。」", "てんいん「このみずはやすいです。いっぽんひゃくえんです。ぜんぶでろっぴゃくえんです。」", "Le vendeur : « Cette eau est moins chère. 100 yens la bouteille. Total : 600 yens. »"],
      ["リナ「はい、お願いします。ありがとうございます。」", "リナ「はい、おねがいします。ありがとうございます。」", "Lina : « D'accord, je prends ça. Merci beaucoup. »"]
    ],
    quiz: [
      { q: "Combien coûtent quatre pommes ?", choices: ["100 yens", "400 yens", "300 yens", "700 yens"], a: 1, e: "一つ100円 × 4 = 400円 (よんひゃくえん)." },
      { q: "Le premier total annoncé est de :", choices: ["600 yens", "300 yens", "1 000 yens", "700 yens"], a: 3, e: "Eau : 2 × 150 = 300. Pommes : 4 × 100 = 400. Total 700円." },
      { q: "Pourquoi le total final tombe-t-il à 600 yens ?", choices: ["Lina prend l'eau moins chère", "Lina renonce aux pommes", "Le vendeur offre une pomme", "Les pommes sont en promo"], a: 0, e: "この水は安いです。一本100円 : 2 × 100 + 400 = 600円." }
    ],
  },
  {
    id: "g4",
    cat: 2,
    level: "Leçon 8",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8],
    title: "「一週間」",
    advice: "Les jours se terminent par 曜日 et prennent に pour un moment précis (月曜日に). から〜まで délimite une plage. Repérez 今週, 来週, 明日 pour suivre la chronologie.",
    lines: [
      ["日本語の授業は月曜日と木曜日です。", "にほんごのじゅぎょうはげつようびともくようびです。", "Le cours de japonais a lieu le lundi et le jeudi."],
      ["授業は9時から10時半までです。", "じゅぎょうはくじからじゅうじはんまでです。", "Le cours va de 9h à 10h30."],
      ["月曜日に漢字を書きます。木曜日に本を読みます。", "げつようびにかんじをかきます。もくようびにほんをよみます。", "Le lundi, elle écrit des kanji. Le jeudi, elle lit un livre."],
      ["今週の金曜日はテストがあります。", "こんしゅうのきんようびはテストがあります。", "Ce vendredi, il y a un test."],
      ["リナは明日、図書館で勉強します。", "リナはあした、としょかんでべんきょうします。", "Demain, Lina étudie à la bibliothèque."],
      ["10時に田中さんと駅で会います。", "じゅうじにたなかさんとえきであいます。", "À 10h, elle retrouve Monsieur Tanaka à la gare."],
      ["一緒に勉強します。", "いっしょにべんきょうします。", "Ils étudient ensemble."],
      ["日曜日は何もしません。", "にちようびはなにもしません。", "Le dimanche, elle ne fait rien."],
      ["来週も授業があります。", "らいしゅうもじゅぎょうがあります。", "La semaine prochaine, il y a aussi cours."],
      ["土曜日に友達とカフェへ行きます。コーヒーを飲みます。", "どようびにともだちとカフェへいきます。コーヒーをのみます。", "Samedi, elle ira au café avec une amie. Elles boiront un café."],
      ["テストは大変です。リナは頑張ります。", "テストはたいへんです。リナはがんばります。", "Le test est stressant. Lina persévère."]
    ],
    quiz: [
      { q: "Quels jours Lina a-t-elle cours de japonais ?", choices: ["Mercredi et vendredi", "Samedi et dimanche", "Mardi et jeudi", "Lundi et jeudi"], a: 3, e: "月曜日と木曜日です : le lundi (jour de la Lune) et le jeudi." },
      { q: "Que fait Lina le lundi ?", choices: ["Elle écrit des kanji", "Elle lit un livre", "Elle va au café", "Elle ne fait rien"], a: 0, e: "月曜日に漢字を書きます : に marque le jour précis." },
      { q: "Le dimanche, Lina…", choices: ["a un test", "va à la bibliothèque", "ne fait rien", "écrit des kanji"], a: 2, e: "日曜日は何もしません : 何も + négation = rien." }
    ],
  },
  {
    id: "g5",
    cat: 2,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「週末の映画」",
    advice: "Toutes les leçons réunies : 〜ませんか pour inviter, 〜ましょう pour proposer, 〜たいです pour l'envie, 〜ことができます pour la capacité, et 〜てください pour la demande.",
    lines: [
      ["テストの後、田中さん「今度の週末、映画を見ませんか。」", "テストのあと、たなかさん「こんどのしゅうまつ、えいがをみませんか。」", "Après le test, Tanaka : « Ce week-end, ça te dirait de voir un film ? »"],
      ["リナ「いいですね。日本の映画が見たいです。」", "リナ「いいですね。にほんのえいががみたいです。」", "Lina : « Bonne idée. J'ai envie de voir un film japonais. »"],
      ["映画は4時からです。3時に駅で会いましょう。", "えいがはよじからです。さんじにえきであいましょう。", "Le film commence à 16h. Retrouvons-nous à 15h à la gare."],
      ["二人は電車で行きます。", "ふたりはでんしゃでいきます。", "Ils y vont en train."],
      ["映画は少し難しいですが、二人は好きです。", "えいがはすこしむずかしいですが、ふたりはすきです。", "Le film est un peu difficile, mais tous les deux l'aiment bien."],
      ["映画の後、カフェへ行きます。コーヒーを飲みます。", "えいがのあと、カフェへいきます。コーヒーをのみます。", "Après le film, ils vont au café. Ils boivent un café."],
      ["リナは日本語の新聞が少し読めます。まだ難しいですが、頑張ります。", "リナはにほんごのしんぶんがすこしよめます。まだむずかしいですが、がんばります。", "Lina sait lire un peu les journaux japonais. C'est encore difficile, mais elle persévère."],
      ["田中さん「新聞を読むことができます。」", "たなかさん「しんぶんをよむことができます。」", "Tanaka : « Moi, je sais lire le journal. »"],
      ["リナ「いいですね。教えてください。」", "リナ「いいですね。おしえてください。」", "Lina : « Chouette alors. Apprends-moi, s'il te plaît. »"],
      ["田中さん「はい、教えます。」", "たなかさん「はい、おしえます。」", "Tanaka : « Oui, je te montrerai. »"],
      ["田中さん「来週も一緒に勉強しましょう。」", "たなかさん「らいしゅうもいっしょにべんきょうしましょう。」", "Tanaka : « La semaine prochaine, étudions ensemble de nouveau. »"],
      ["リナ「はい、楽しみです。」", "リナ「はい、たのしみです。」", "Lina : « Oui, j'ai hâte. »"]
    ],
    quiz: [
      { q: "Que propose Tanaka après le test ?", choices: ["D'aller voir un film", "De lire un journal", "De prendre le train", "De réviser le test"], a: 0, e: "映画を見ませんか : 〜ませんか est l'invitation polie." },
      { q: "Comment vont-ils au cinéma ?", choices: ["À pied", "En bus", "En train", "En voiture"], a: 2, e: "電車で行きます : で marque aussi le moyen de transport." },
      { q: "À la fin, ils décident :", choices: ["de voir un autre film", "de réviser ensemble la semaine prochaine", "de rester au café", "de ne plus se voir"], a: 1, e: "来週も一緒に勉強しましょう : 〜ましょう propose une action commune." }
    ],
  },
  {
    id: "e1",
    cat: 3,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「東京の家」",
    advice: "Format examen : un texte descriptif suivi de questions. あります sert aux objets, います aux êtres vivants ; 〜が好きです exprime les goûts. Répondez aux questions sans relire la traduction d'abord.",
    lines: [
      ["リナは東京の近くに住んでいます。", "リナはとうきょうのちかくにすんでいます。", "Lina habite près de Tokyo."],
      ["家の近くに公園があります。公園に猫と犬がたくさんいます。", "いえのちかくにこうえんがあります。こうえんにねこといぬがたくさんいます。", "Près de sa maison, il y a un parc. Au parc, il y a beaucoup de chats et de chiens."],
      ["リナの家は小さいですが、きれいです。", "リナのいえはちいさいですが、きれいです。", "La maison de Lina est petite, mais jolie."],
      ["窓の近くに机があります。机の上に本があります。", "まどのちかくにつくえがあります。つくえのうえにほんがあります。", "Près de la fenêtre, il y a un bureau. Sur le bureau, il y a des livres."],
      ["毎朝7時に起きます。電車で学校へ行きます。", "まいあさしちじにおきます。でんしゃでがっこうへいきます。", "Chaque matin, elle se lève à 7h et va à l'école en train."],
      ["学校は9時から3時までです。", "がっこうはくじからさんじまでです。", "L'école va de 9h à 15h."],
      ["去年の4月に日本へ来ました。日本語の授業は月曜日と木曜日です。", "きょねんのしがつににほんへきました。にほんごのじゅぎょうはげつようびともくようびです。", "Elle est venue au Japon en avril de l'année dernière. Ses cours de japonais ont lieu le lundi et le jeudi."],
      ["リナは日本語を少し話します。日本語の新聞はまだ難しいです。", "リナはにほんごをすこしはなします。にほんごのしんぶんはまだむずかしいです。", "Lina parle un peu japonais. Les journaux japonais sont encore difficiles pour elle."],
      ["新聞を少し読めます。まだ難しいですが、頑張ります。", "しんぶんをすこしよめます。まだむずかしいですが、がんばります。", "Elle sait les lire un peu. C'est encore difficile, mais elle persévère."],
      ["日本の食べ物が好きです。猫より犬のほうが好きです。", "にほんのたべものがすきです。ねこよりいぬのほうがすきです。", "Elle aime la nourriture japonaise. Elle préfère les chiens aux chats."],
      ["来年、フランスへ帰ります。日本も好きです。", "らいねん、フランスへかえります。にほんもすきです。", "L'année prochaine, elle rentrera en France. Elle aime le Japon aussi."]
    ],
    quiz: [
      { q: "Depuis quand Lina est-elle au Japon ?", choices: ["Depuis avril de cette année", "Depuis trois ans", "Depuis avril de l'année dernière", "Elle n'y est jamais allée"], a: 2, e: "去年の4月に日本へ来ました : 去年 = l'année dernière." },
      { q: "Où se trouvent les livres de Lina ?", choices: ["Dans le parc", "Sur le bureau, près de la fenêtre", "Dans son sac", "À l'école"], a: 1, e: "窓の近くに机があります。机の上に本があります : 上 = sur, dessus." },
      { q: "Lina rentrera en France…", choices: ["le mois prochain", "la semaine prochaine", "à la fin de la journée", "l'année prochaine"], a: 3, e: "来年 = l'année prochaine." }
    ],
  },
  {
    id: "e2",
    cat: 3,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「田中先生」",
    advice: "Un portrait complet : horaires, goûts, comparatifs, capacité. Attention aux questions qui demandent une déduction (où habite-t-il maintenant ?), pas une simple lecture mot à mot.",
    lines: [
      ["田中さんは日本語の先生です。", "たなかさんはにほんごのせんせいです。", "Monsieur Tanaka est professeur de japonais."],
      ["授業は月曜日と木曜日、9時から10時半までです。", "じゅぎょうはげつようびともくようび、くじからじゅうじはんまでです。", "Ses cours ont lieu le lundi et le jeudi, de 9h à 10h30."],
      ["田中さんの家は京都の近くにあります。", "たなかさんのいえはきょうとのちかくにあります。", "La maison de Tanaka se trouve près de Kyoto."],
      ["家の近くにお寺がたくさんあります。京都は静かです。", "いえのちかくにおてらがたくさんあります。きょうとはしずかです。", "Près de sa maison, il y a beaucoup de temples. Kyoto est calme."],
      ["田中さんは去年、東京へ来ました。", "たなかさんはきょねん、とうきょうへきました。", "L'année dernière, Tanaka est venu à Tokyo."],
      ["食べ物は東京がいちばんおいしいです。", "たべものはとうきょうがいちばんおいしいです。", "Côté nourriture, Tokyo est la meilleure."],
      ["田中さんの家に猫がいます。田中さんは猫が好きです。", "たなかさんのいえにねこがいます。たなかさんはねこがすきです。", "Il y a un chat chez Tanaka. Tanaka aime les chats."],
      ["犬より猫のほうが好きです。", "いぬよりねこのほうがすきです。", "Il préfère les chats aux chiens."],
      ["週末、田中さんは映画を見ます。日本の映画が好きです。", "しゅうまつ、たなかさんはえいがをみます。にほんのえいががすきです。", "Le week-end, Tanaka regarde des films. Il aime les films japonais."],
      ["映画の後、カフェでコーヒーを飲みます。", "えいがのあと、カフェでコーヒーをのみます。", "Après le film, il boit un café au café."],
      ["田中さんは新聞を読むことができます。漢字も書くことができます。", "たなかさんはしんぶんをよむことができます。かんじもかくことができます。", "Tanaka sait lire le journal. Il sait aussi écrire les kanji."],
      ["来年、田中さんはフランスへ行きます。楽しみです。", "らいねん、たなかさんはフランスへいきます。たのしみです。", "L'année prochaine, Tanaka ira en France. Il a hâte."]
    ],
    quiz: [
      { q: "Où habite Tanaka maintenant ?", choices: ["Près de Tokyo", "Près de Kyoto", "En France", "Dans un temple"], a: 1, e: "田中さんの家は京都の近くにあります : le présent あります décrit la situation actuelle." },
      { q: "Tanaka préfère :", choices: ["les chiens", "les deux autant", "les poissons", "les chats"], a: 3, e: "犬より猫のほうが好きです : 猫 l'emporte." },
      { q: "Que fera Tanaka l'année prochaine ?", choices: ["Il ira en France", "Il arrêtera d'enseigner", "Il déménagera à Kyoto", "Il achètera un chien"], a: 0, e: "来年、田中さんはフランスへ行きます。楽しみです." }
    ],
  },
  {
    id: "e3",
    cat: 3,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「テストの前」",
    advice: "Un récit complet : dates, horaires, chaînes d'actions en て, invitation en 〜ませんか. Suivez la chronologie : demain la bibliothèque, vendredi le test, après le test le cinéma.",
    lines: [
      ["来週の金曜日、日本語のテストがあります。", "らいしゅうのきんようび、にほんごのテストがあります。", "Vendredi prochain, il y a un test de japonais."],
      ["テストは9時からです。", "テストはくじからです。", "Le test commence à 9h."],
      ["リナは漢字を書きます。まだ難しいですが、頑張ります。", "リナはかんじをかきます。まだむずかしいですが、がんばります。", "Lina écrit des kanji. C'est encore difficile, mais elle persévère."],
      ["明日の4時、図書館で田中さんに会います。", "あしたのよじ、としょかんでたなかさんにあいます。", "Demain à 16h, elle retrouve Tanaka à la bibliothèque."],
      ["田中さん「一緒に勉強しましょう。」", "たなかさん「いっしょにべんきょうしましょう。」", "Tanaka : « Étudions ensemble. »"],
      ["リナ「はい、お願いします。」", "リナ「はい、おねがいします。」", "Lina : « Oui, volontiers. »"],
      ["図書館は静かです。本がたくさんあります。", "としょかんはしずかです。ほんがたくさんあります。", "La bibliothèque est calme. Il y a beaucoup de livres."],
      ["二人で漢字を書いて、本を読みます。", "ふたりでかんじをかいて、ほんをよみます。", "À deux, ils écrivent des kanji et lisent un livre."],
      ["6時にカフェへ行きます。コーヒーを飲んでから、家へ帰ります。", "ろくじにカフェへいきます。コーヒーをのんでから、いえへかえります。", "À 18h, ils vont au café. Après avoir bu un café, ils rentrent chez eux."],
      ["田中さん「テストの後、映画を見ませんか。」", "たなかさん「テストのあと、えいがをみませんか。」", "Tanaka : « Après le test, ça te dirait de voir un film ? »"],
      ["リナ「いいですね。楽しみです。」", "リナ「いいですね。たのしみです。」", "Lina : « Bonne idée. J'ai hâte. »"],
      ["金曜日のテストは大変ですが、リナは頑張ります。", "きんようびのテストはたいへんですが、リナはがんばります。", "Le test de vendredi sera éprouvant, mais Lina persévère."]
    ],
    quiz: [
      { q: "Quand a lieu le test ?", choices: ["Demain", "Ce vendredi", "Dans deux semaines", "Vendredi prochain"], a: 3, e: "来週の金曜日 : la semaine prochaine, vendredi." },
      { q: "Que feront-ils après le test ?", choices: ["Ils iront voir un film", "Ils retourneront à la bibliothèque", "Ils dormiront", "Ils iront à la gare"], a: 0, e: "テストの後、映画を見ませんか : l'invitation porte sur l'après-test." },
      { q: "À quelle heure se retrouvent-ils à la bibliothèque ?", choices: ["À 18h", "À 9h", "À 16h", "À 10h30"], a: 2, e: "明日の4時 : 4時 se lit よじ." }
    ],
  },
  {
    id: "a1",
    cat: 4,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「公園のニュース」",
    advice: "Une annonce de news : lisez d'abord le texte en entier pour repérer quoi, où, quand et combien, puis revenez ligne par ligne. Les chiffres et les heures portent l'information.",
    lines: [
      ["東京の近くに大きい公園があります。公園に猫がたくさんいます。", "とうきょうのちかくにおおきいこうえんがあります。こうえんにねこがたくさんいます。", "Près de Tokyo, il y a un grand parc. Au parc, il y a beaucoup de chats."],
      ["今週の土曜日、公園で日本の映画を見ることができます。", "こんしゅうのどようび、こうえんでにほんのえいがをみることができます。", "Ce samedi, on peut voir un film japonais dans le parc."],
      ["映画は6時から8時半までです。見る人は一人300円です。", "えいがはろくじからはちじはんまでです。みるひとはひとりさんびゃくえんです。", "Le film passe de 18h à 20h30. Le prix est de 300 yens par personne."],
      ["公園の近くにお寺もあります。お寺は古くて、有名です。", "こうえんのちかくにおてらもあります。おてらはふるくて、ゆうめいです。", "Près du parc, il y a aussi un temple. Le temple est vieux et célèbre."],
      ["カフェもあります。コーヒーは200円です。映画の後、カフェでコーヒーを飲むことができます。", "かふぇもあります。こーひーはにひゃくえんです。えいがのあと、かふぇでこーひーをのむことができます。", "Il y a aussi un café. Le café coûte 200 yens. Après le film, on peut prendre un café."],
      ["公園は静かで、きれいです。", "こうえんはしずかで、きれいです。", "Le parc est calme et joli."],
      ["日曜日、子供がたくさん来ます。猫も子供も日曜日が好きです。", "にちようび、こどもがたくさんきます。ねこもこどももにちようびがすきです。", "Le dimanche, beaucoup d'enfants viennent. Chats et enfants aiment le dimanche."],
      ["土曜日、公園で会いましょう。", "どようび、こうえんであいましょう。", "Samedi, retrouvons-nous au parc."]
    ],
    quiz: [
      { q: "Que peut-on faire au parc ce samedi ?", choices: ["Voir un film japonais", "Acheter un journal", "Visiter la gare", "Prendre un cours de kanji"], a: 0, e: "公園で日本の映画を見ることができます : 〜ことができます = pouvoir faire quelque chose." },
      { q: "Combien coûte le film ?", choices: ["200 yens", "100 yens", "300 yens", "8 yens"], a: 2, e: "見る人は一人300円です : 300円 se lit さんびゃくえん. Attention : 200円, c'est le café." },
      { q: "Le film passe :", choices: ["de 9h à 10h30", "de 6h à 8h30", "de 18h à 22h", "de 18h à 20h30"], a: 3, e: "映画は6時から8時半までです : le soir, 6時 = 18h et 8時半 = 20h30. 半 = et demie." }
    ]
  },
  {
    id: "a2",
    cat: 4,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「フランスの友達へ」",
    advice: "Une lettre : repérez d'abord qui écrit et à qui, puis les moments de la semaine (毎朝, 夜, 土曜日, 日曜日) et l'horizon (来年). Les particules font le reste.",
    lines: [
      ["フランスのアンナさんへ。リナです。", "ふらんすのアンナさんへ。リナです。", "À Anna, en France. C'est Lina."],
      ["私は去年の4月に日本へ来ました。今、東京の近くに住んでいます。", "わたしはきょねんのしがつににほんへきました。いま、とうきょうのちかくにすんでいます。", "Je suis venue au Japon en avril de l'année dernière. J'habite maintenant près de Tokyo."],
      ["毎朝7時に起きます。朝ご飯はパンです。それから、コーヒーを飲みます。", "まいあさしちじにおきます。あさごはんはぱんです。それから、こーひーをのみます。", "Je me lève chaque matin à 7h. Le petit-déjeuner, c'est du pain. Ensuite, je bois un café."],
      ["学校の日本語の授業は月曜日と木曜日です。9時から10時半までです。", "がっこうのにほんごのじゅぎょうはげつようびともくようびです。くじからじゅうじはんまでです。", "Mes cours de japonais à l'école ont lieu le lundi et le jeudi, de 9h à 10h30."],
      ["夜は漢字を書いて、日本語を勉強します。10時に寝ます。", "よるはかんじをかいて、にほんごをべんきょうします。じゅうじにねます。", "Le soir, j'écris des kanji et j'étudie le japonais. Je me couche à 22h."],
      ["土曜日、友達とカフェへ行きます。コーヒーを飲んでから、一緒に本を読みます。", "どようび、ともだちとかふぇへいきます。こーひーをのんでから、いっしょにほんをよみます。", "Le samedi, je vais au café avec une amie. Après avoir bu un café, nous lisons un livre ensemble."],
      ["日曜日は何もしません。", "にちようびはなにもしません。", "Le dimanche, je ne fais rien."],
      ["日本の食べ物が好きですが、来年、フランスへ帰ります。", "にほんのたべものがすきですが、らいねん、ふらんすへかえります。", "J'aime la nourriture japonaise, mais l'année prochaine, je rentrerai en France."],
      ["アンナさん、来年、会いましょう。楽しみです。", "アンナさん、らいねん、あいましょう。たのしみです。", "Anna, retrouvons-nous l'année prochaine. J'ai hâte."]
    ],
    quiz: [
      { q: "Quand Lina est-elle venue au Japon ?", choices: ["Cette année, en avril", "L'année dernière, en avril", "Il y a dix ans", "Le mois prochain"], a: 1, e: "去年の4月に日本へ来ました : 去年 = l'année dernière." },
      { q: "Que fait Lina le samedi ?", choices: ["Elle ne fait rien", "Elle écrit des kanji", "Elle va au café avec une amie", "Elle lit le journal"], a: 2, e: "土曜日、友達とカフェへ行きます : 何もしません, c'est le dimanche." },
      { q: "Que fera Lina l'année prochaine ?", choices: ["Elle rentrera en France", "Elle ira à Kyoto", "Elle ouvrira un café", "Elle achètera un chat"], a: 0, e: "来年、フランスへ帰ります : 帰ります = rentrer chez soi." }
    ]
  },
  {
    id: "a3",
    cat: 4,
    level: "Leçon 10",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "「田中さんの猫」",
    advice: "Un extrait adapté de livre : suivez qui fait quoi et à quel moment (毎朝, 週末, 来年). Lisez d'abord pour l'histoire, puis ligne par ligne pour la langue.",
    lines: [
      ["田中さんの家に猫がいます。猫は小さいです。", "たなかさんのいえにねこがいます。ねこはちいさいです。", "Chez Monsieur Tanaka, il y a un chat. Le chat est petit."],
      ["猫は去年、京都から来ました。", "ねこはきょねん、きょうとからきました。", "L'année dernière, le chat est arrivé de Kyoto."],
      ["毎朝、田中さんは新聞を読みます。猫は机の上に来ます。", "まいあさ、たなかさんはしんぶんをよみます。ねこはつくえのうえにきます。", "Chaque matin, Tanaka lit le journal. Le chat vient sur le bureau."],
      ["猫は新聞の上で寝ます。田中さんは猫と一緒に新聞を読みます。", "ねこはしんぶんのうえでねます。たなかさんはねこといっしょにしんぶんをよみます。", "Le chat dort sur le journal. Tanaka lit le journal avec son chat."],
      ["猫は10時に田中さんと寝ます。", "ねこはじゅうじにたなかさんとねます。", "À 22h, le chat se couche avec Tanaka."],
      ["週末、田中さんは映画を見ます。猫も一緒に見ます。猫は映画が好きです。", "しゅうまつ、たなかさんはえいがをみます。ねこもいっしょにみます。ねこはえいががすきです。", "Le week-end, Tanaka regarde des films. Le chat les regarde aussi. Le chat aime les films."],
      ["来年、田中さんはフランスへ行きます。猫も行きたいです。", "らいねん、たなかさんはふらんすへいきます。ねこもいきたいです。", "L'année prochaine, Tanaka ira en France. Le chat, lui, voudrait aussi y aller."]
    ],
    quiz: [
      { q: "D'où vient le chat ?", choices: ["De Tokyo", "De France", "De Kyoto", "De la gare"], a: 2, e: "京都から来ました : から marque le point de départ, comme dans から〜まで pour le temps." },
      { q: "Où dort le chat ?", choices: ["Sur le canapé", "Sous la table", "Dans le parc", "Sur le journal"], a: 3, e: "猫は新聞の上で寝ます : 上で = sur, au-dessus." },
      { q: "L'année prochaine, le chat :", choices: ["ira en France avec Tanaka", "voudrait aussi y aller", "restera à la maison", "arrêtera de dormir"], a: 1, e: "猫も行きたいです : 〜たいです = vouloir faire. Le texte ne dit pas qu'il ira." }
    ]
  }
];