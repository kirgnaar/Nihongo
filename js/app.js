"use strict";
const LESSONS = [
  {
    n: 1,
    title: "Se présenter",
    goal: "Dire qui vous êtes, poser une question simple, remercier.",
    dialog: [
      ["田中", "はじめまして。田中です。", "Enchanté. Je m'appelle Tanaka."],
      ["リナ", "はじめまして。リナです。フランス人です。", "Enchantée. Je m'appelle Lina. Je suis française."],
      ["田中", "リナさんは学生ですか。", "Lina, êtes-vous étudiante ?"],
      ["リナ", "はい、学生です。田中さんは先生ですか。", "Oui, je suis étudiante. Tanaka, êtes-vous professeur ?"],
      ["田中", "いいえ、会社員です。", "Non, je suis employé de bureau."],
    ],
    vocab: [
      ["私", "わたし", "je, moi"],
      ["〜さん", "さん", "Monsieur / Madame (politesse)"],
      ["先生", "せんせい", "professeur"],
      ["学生", "がくせい", "étudiant"],
      ["会社員", "かいしゃいん", "employé de bureau"],
      ["フランス人", "フランスじん", "français(e)"],
      ["日本語", "にほんご", "japonais (langue)"],
      ["はい", "はい", "oui"],
      ["いいえ", "いいえ", "non"],
      ["はじめまして", "はじめまして", "enchanté(e)"],
      ["よろしくお願いします", "よろしくおねがいします", "ravi(e) de vous rencontrer"],
    ],
    grammar: [
      {
        t: "A は B です — « A est B »",
        d: "は marque le thème de la phrase, です est la copule polie. Le japonais n'a ni article, ni genre, ni nombre : 犬 = le chien, un chien, des chiens.",
        ex: [
          ["私は学生です。", "Je suis étudiant."],
          ["田中さんは先生です。", "M. Tanaka est professeur."],
        ],
      },
      {
        t: "La question en か",
        d: "On garde la phrase affirmative et on ajoute か à la fin. Pas besoin d'inverser l'ordre des mots.",
        ex: [["リナさんは学生ですか。", "Lina est-elle étudiante ?"]],
      },
      {
        t: "の — la possession",
        d: "の relie deux noms comme « de » en français : possesseur の chose possédée.",
        ex: [["私の本です。", "C'est mon livre."]],
      },
    ],
    quiz: [
      { q: "「私は学生です」 signifie :", choices: ["Je suis étudiant.", "Je ne suis pas étudiant.", "Est-ce un étudiant ?", "L'étudiant est là."], a: 0, e: "は (thème) + です (copule)." },
      { q: "Comment forme-t-on une question ?", choices: ["En ajoutant か à la fin", "En inversant les mots", "En ajoutant か au début", "En élevant だけ"], a: 0, e: "か en fin de phrase, à l'écrit avec un point." },
      { q: "「私の本」 signifie :", choices: ["mon livre", "le livre de l'école", "je lis", "une librairie"], a: 0, e: "私 の 本 = le livre de moi." },
    ],
  },
  {
    n: 2,
    title: "Ceci, cela, là-bas",
    goal: "Désigner des objets et des lieux, demander « qu'est-ce que c'est ? ».",
    dialog: [
      ["田中", "これは何ですか。", "Qu'est-ce que c'est (près de moi) ?"],
      ["リナ", "それは日本の本です。", "C'est (près de vous) un livre japonais."],
      ["田中", "あれは何ですか。", "Et ça, là-bas, c'est quoi ?"],
      ["リナ", "あれは私のかばんです。", "Là-bas, c'est mon sac."],
      ["田中", "トイレはどこですか。", "Où sont les toilettes ?"],
      ["リナ", "あそこです。", "Là-bas."],
    ],
    vocab: [
      ["これ", "これ", "ceci (près de moi)"],
      ["それ", "それ", "cela (près de vous)"],
      ["あれ", "あれ", "cela (loin de nous deux)"],
      ["この〜", "この", "ce… (près de moi)"],
      ["その〜", "その", "ce… (près de vous)"],
      ["あの〜", "あの", "ce… (là-bas)"],
      ["ここ・そこ・あそこ", "ここ・そこ・あそこ", "ici / là / là-bas"],
      ["何", "なに / なん", "quoi"],
      ["だれ", "だれ", "qui"],
      ["どこ", "どこ", "où"],
      ["かばん", "かばん", "sac"],
      ["本", "ほん", "livre"],
    ],
    grammar: [
      {
        t: "これ・それ・あれ — les trois distances",
        d: "これ : près du locuteur. それ : près de l'interlocuteur. あれ : loin des deux. Ces mots seuls remplacent le nom.",
        ex: [["これはペンです。", "Ceci est un stylo."]],
      },
      {
        t: "この・その・あの + nom",
        d: "Même logique, mais ils sont suivis du nom qu'ils déterminent.",
        ex: [["あの人は先生です。", "Cette personne là-bas est professeur."]],
      },
      {
        t: "ここ・そこ・あそこ — les lieux",
        d: "La même série à trois distances s'applique aux endroits.",
        ex: [["駅はあそこです。", "La gare est là-bas."]],
      },
    ],
    quiz: [
      { q: "Votre interlocuteur tient un livre. Vous dites :", choices: ["この本", "その本", "あの本", "どの本"], a: 1, e: "Près de l'interlocuteur → その." },
      { q: "「あれは何ですか」 signifie :", choices: ["Qu'est-ce que c'est, là-bas ?", "Qu'est-ce que c'est, ici ?", "Qui est là ?", "Où est-ce ?"], a: 0, e: "あれ = loin des deux personnes." },
      { q: "Pour demander où sont les toilettes :", choices: ["トイレはどこですか。", "トイレはだれですか。", "トイレは何ですか。", "トイレはあれです。"], a: 0, e: "どこ = où." },
    ],
  },
  {
    n: 3,
    title: "Les particules essentielles",
    goal: "Assembler une phrase correcte : qui fait quoi, où, avec qui, jusqu'où.",
    dialog: [
      ["リナ", "明日、友達と駅へ行きます。", "Demain, je vais à la gare avec un ami."],
      ["田中", "何をしますか。", "Vous allez faire quoi ?"],
      ["リナ", "図書館で本を読みます。それから、カフェでコーヒーを飲みます。", "Je lis un livre à la bibliothèque. Puis je bois un café au café."],
      ["田中", "いいですね。私も行きたいです。", "Ah, c'est sympa. Moi aussi je voudrais y aller."],
      ["リナ", "じゃあ、九時から一緒に。", "Alors, ensemble à partir de 9h."],
    ],
    vocab: [
      ["行きます", "いきます", "aller"],
      ["見ます", "みます", "voir / regarder"],
      ["食べます", "たべます", "manger"],
      ["飲みます", "のみます", "boire"],
      ["読みます", "よみます", "lire"],
      ["買います", "かいます", "acheter"],
      ["駅", "えき", "gare"],
      ["図書館", "としょかん", "bibliothèque"],
      ["明日", "あした", "demain"],
      ["友達", "ともだち", "ami"],
      ["一緒に", "いっしょに", "ensemble"],
      ["それから", "それから", "ensuite"],
    ],
    grammar: [
      {
        t: "は (wa) — le thème",
        d: "Annonce de quoi on parle. Se prononce « wa » malgré son écriture は.",
        ex: [["私は学生です。", "Quant à moi, je suis étudiant."]],
      },
      {
        t: "を (o) — l'objet direct",
        d: "Marque ce qui subit l'action. Prononcé « o ».",
        ex: [["パンを食べます。", "Je mange du pain (le pain est mangé)."]],
      },
      {
        t: "に (ni) — destination, moment, personne visée",
        d: "Aller à…, à telle heure, donner à quelqu'un.",
        ex: [["学校に行きます。", "Je vais à l'école."], ["三時に会います。", "On se retrouve à 3h."]],
      },
      {
        t: "で (de) — lieu de l'action, moyen",
        d: "Là où l'action se passe, ou l'instrument utilisé.",
        ex: [["図書館で勉強します。", "J'étudie à la bibliothèque."], ["電車で行きます。", "J'y vais en train."]],
      },
      {
        t: "と・も・へ・から・まで",
        d: "と : avec / et. も : aussi. へ (se lit « e ») : direction. から : depuis. まで : jusqu'à.",
        ex: [["友達と行きます。", "J'y vais avec un ami."], ["私も行きます。", "Moi aussi j'y vais."], ["九時から五時まで働きます。", "Je travaille de 9h à 17h."]],
      },
    ],
    quiz: [
      { q: "パン＿食べます。", choices: ["を", "は", "に", "で"], a: 0, e: "Le pain est l'objet direct → を." },
      { q: "図書館＿本を読みます。", choices: ["で", "に", "を", "と"], a: 0, e: "Lieu où se passe l'action → で." },
      { q: "友達＿話します。", choices: ["と", "を", "が", "へ"], a: 0, e: "« Avec » un ami → と." },
    ],
  },
  {
    n: 4,
    title: "Décrire : adjectifs い et な",
    goal: "Décrire objets, lieux et personnes ; négocier un prix.",
    dialog: [
      ["店員", "いらっしゃいませ。", "Bienvenue (formule de boutique)."],
      ["リナ", "このかばんは大きいですね。いくらですか。", "Ce sac est grand, n'est-ce pas. Il coûte combien ?"],
      ["店員", "8,000円です。軽くて、きれいですよ。", "8 000 yens. Il est léger et joli."],
      ["リナ", "ちょっと高いですね。もっと安いのはありますか。", "Un peu cher. Vous avez moins cher ?"],
      ["店員", "はい、これは4,000円です。静かな色です。", "Oui, celui-ci est à 4 000 yens. Une couleur sobre."],
      ["リナ", "じゃ、これをください。", "Alors je prends celui-ci."],
    ],
    vocab: [
      ["大きい", "おおきい", "grand"],
      ["小さい", "ちいさい", "petit"],
      ["新しい", "あたらしい", "nouveau"],
      ["古い", "ふるい", "vieux"],
      ["高い", "たかい", "haut, cher"],
      ["安い", "やすい", "pas cher"],
      ["軽い", "かるい", "léger"],
      ["いい", "いい", "bon, bien"],
      ["静かな", "しずかな", "calme (な)"],
      ["きれいな", "きれいな", "joli (な)"],
      ["有名な", "ゆうめいな", "célèbre (な)"],
      ["いくら", "いくら", "combien (prix)"],
    ],
    grammar: [
      {
        t: "Adjectifs en い",
        d: "Ils se terminent en い et se placent directement devant le nom ou en fin de phrase : 大きいかばん / かばんは大きいです.",
        ex: [["新しい本ですね。", "C'est un livre neuf, non ?"]],
      },
      {
        t: "Adjectifs en な",
        d: "Ils ont besoin de な devant un nom : 静かな町. Attention : きれい et ゆうめい finissent par « い » mais sont des adjectifs な.",
        ex: [["きれいな町です。", "C'est une jolie ville."]],
      },
      {
        t: "Enchaîner : 〜くて / 〜で",
        d: "い-adjectif → くて (大きくて). な-adjectif → で (静かで). Permet de lier deux descriptions.",
        ex: [["軽くてきれいです。", "C'est léger et joli."]],
      },
    ],
    quiz: [
      { q: "きれい est :", choices: ["un adjectif な", "un adjectif い", "un verbe", "une particule"], a: 0, e: "Malgré le « i » final, きれい prend な." },
      { q: "« un livre neuf » :", choices: ["新しい本", "新な本", "本新しい", "新しく本"], a: 0, e: "い-adjectif directement devant le nom." },
      { q: "« grand et petit » (enchaîné) :", choices: ["大きくて小さい", "大きいと小さい", "大きいで小さい", "大きいに小さい"], a: 0, e: "い-adjectif → forme くて." },
    ],
  },
  {
    n: 5,
    title: "Les verbes et la forme polie ます",
    goal: "Conjuguer au présent, passé, négatif ; décrire votre journée.",
    dialog: [
      ["田中", "毎朝、何時に起きますか。", "À quelle heure vous levez-vous chaque matin ?"],
      ["リナ", "7時に起きます。朝ご飯を食べて、学校へ行きます。", "Je me lève à 7h. Je mange le petit-déjeuner et vais à l'école."],
      ["田中", "夜は何をしますか。", "Et le soir, vous faites quoi ?"],
      ["リナ", "日本語を勉強します。10時に寝ます。", "J'étudie le japonais. Je me couche à 22h."],
      ["田中", "日曜日は？", "Et le dimanche ?"],
      ["リナ", "日曜日は何もしません。", "Le dimanche, je ne fais rien."],
    ],
    vocab: [
      ["起きます", "おきます", "se lever"],
      ["寝ます", "ねます", "se coucher, dormir"],
      ["します", "します", "faire"],
      ["勉強します", "べんきょうします", "étudier"],
      ["働きます", "はたらきます", "travailler"],
      ["来ます", "きます", "venir"],
      ["毎朝", "まいあさ", "chaque matin"],
      ["夜", "よる", "soir, nuit"],
      ["日曜日", "にちようび", "dimanche"],
      ["何も", "なにも", "rien (avec négation)"],
      ["〜時", "〜じ", "heure"],
      ["朝ご飯", "あさごはん", "petit-déjeuner"],
    ],
    grammar: [
      {
        t: "Les trois groupes de verbes",
        d: "Groupe 1 (う) : 買う, 書く, 話す, 待つ, 飲む, 帰る. Groupe 2 (る) : 食べる, 見る, 寝る, 起きる. Groupe 3 (irréguliers) : する, 来る.",
        ex: [["辞書形 → ます形 : 飲む → 飲みます", "boire → je bois"]],
      },
      {
        t: "La série polie",
        d: "ます (présent/futur) ・ ません (négatif) ・ ました (passé) ・ ませんでした (passé négatif). Concerne l'accompli et le non-accompli.",
        ex: [["見ます / 見ません / 見ました / 見ませんでした", "je vois / je ne vois pas / j'ai vu / je n'ai pas vu"]],
      },
      {
        t: "Le moment : に, から, まで",
        d: "7時に (à 7h). 9時から5時まで (de 9h à 17h). Les jours et mois prennent に aussi : 日曜日に.",
        ex: [["7時に起きます。", "Je me lève à 7h."]],
      },
    ],
    quiz: [
      { q: "Le passé poli de 食べます :", choices: ["食べました", "食べましたです", "食べるました", "食べんでした"], a: 0, e: "ます → ました." },
      { q: "« Je ne vais pas » :", choices: ["行きません", "行きないです", "行きました", "行きませなかった"], a: 0, e: "Négatif présent : ません." },
      { q: "« à 7 heures » :", choices: ["7時に", "7時で", "7時を", "7時は"], a: 0, e: "Moment précis → に." },
    ],
  },
  {
    n: 6,
    title: "La forme て : actions en chaîne",
    goal: "Enchaîner plusieurs actions, exprimer une action en cours, demander poliment.",
    dialog: [
      ["田中", "今、何をしていますか。", "Qu'est-ce que vous êtes en train de faire ?"],
      ["リナ", "日本語を勉強しています。漢字を書いています。", "J'étudie le japonais. Je suis en train d'écrire des kanji."],
      ["田中", "頑張りますね。すみません、窓を開けてもいいですか。", "Vous vous donnez du mal. Pardon, puis-je ouvrir la fenêtre ?"],
      ["リナ", "はい、どうぞ。コーヒーを飲んでから、一緒に勉強しませんか。", "Oui, je vous en prie. Après avoir bu un café, voulez-vous étudier ensemble ?"],
      ["田中", "はい、手を洗って来ます。", "Oui, je me lave les mains et j'arrive."],
    ],
    vocab: [
      ["〜ています", "〜ています", "être en train de"],
      ["待って", "まって", "attendez (forme て)"],
      ["開けて", "あけて", "ouvrez"],
      ["閉めて", "しめて", "fermez"],
      ["読んで", "よんで", "lisez"],
      ["書いて", "かいて", "écrivez"],
      ["飲んで", "のんで", "buvez"],
      ["住んでいます", "すんでいます", "habiter (état)"],
      ["窓", "まど", "fenêtre"],
      ["手", "て", "main"],
      ["洗います", "あらいます", "laver"],
      ["頑張ります", "がんばります", "persévérer"],
    ],
    grammar: [
      {
        t: "Former la forme て",
        d: "Groupe 1 : う・つ・る→って ; む・ぶ・ぬ→んで ; く→いて (exception 行く→行って) ; ぐ→いで ; す→して. Groupe 2 : る→て. Groupe 3 : する→して, 来る→来て.",
        ex: [["待つ→待って, 読む→読んで, 書く→書いて", "les trois grandes règles"]],
      },
      {
        t: "〜ています — action en cours ou état",
        d: "勉強しています : j'étudie (en ce moment). 住んでいます : j'habite (état continu).",
        ex: [["今、雨が降っています。", "Il pleut en ce moment."]],
      },
      {
        t: "〜てください / 〜てもいいですか",
        d: "Forme て + ください : requête polie. てもいいですか : demander la permission.",
        ex: [["もう一度言ってください。", "Répétez, s'il vous plaît."], ["写真を撮ってもいいですか。", "Puis-je prendre une photo ?"]],
      },
      {
        t: "〜てから — « après avoir fait »",
        d: "Enchaîne deux actions dans l'ordre.",
        ex: [["手を洗ってから、食べます。", "Après m'être lavé les mains, je mange."]],
      },
    ],
    quiz: [
      { q: "La forme て de 読む :", choices: ["読んで", "読って", "読いて", "読みて"], a: 0, e: "む・ぶ・ぬ → んで." },
      { q: "La forme て de 書く :", choices: ["書いて", "書って", "書きて", "書んで"], a: 0, e: "く → いて (sauf 行く)." },
      { q: "« Je suis en train de manger » :", choices: ["食べています", "食べました", "食べましょう", "食べたいです"], a: 0, e: "Forme て + います." },
    ],
  },
  {
    n: 7,
    title: "Compter et acheter",
    goal: "Commander, demander un prix, utiliser les bons compteurs.",
    dialog: [
      ["リナ", "すみません、りんごはいくらですか。", "Excusez-moi, les pommes, c'est combien ?"],
      ["店員", "一つ200円です。", "200 yens la pièce."],
      ["リナ", "じゃ、三つください。全部でいくらですか。", "Alors, j'en prends trois. Ça fait combien en tout ?"],
      ["店員", "600円です。お弁当はいかがですか。一つ500円です。", "600 yens. Un bentō, ça vous dit ? 500 yens l'unité."],
      ["リナ", "二つお願いします。", "J'en prends deux, s'il vous plaît."],
      ["店員", "はい、1,600円です。ありがとうございます。", "Voilà, 1 600 yens. Merci beaucoup."],
    ],
    vocab: [
      ["いくら", "いくら", "combien"],
      ["〜円", "〜えん", "yen(s)"],
      ["一つ・二つ・三つ", "ひとつ・ふたつ・みっつ", "1, 2, 3 (objets génériques)"],
      ["四つ・五つ・六つ", "よっつ・いつつ・むっつ", "4, 5, 6 (objets)"],
      ["七つ・八つ・九つ・十", "ななつ・やっつ・ここのつ・とお", "7 à 10 (objets)"],
      ["〜人", "〜にん", "compteur de personnes (ひとり, ふたり)"],
      ["〜本", "〜ほん", "objets longs (いっぽん, さんぼん…)"],
      ["〜枚", "〜まい", "objets plats"],
      ["〜個", "〜こ", "petits objets"],
      ["全部で", "ぜんぶで", "en tout"],
      ["〜ください", "〜ください", "…s'il vous plaît (pour commander)"],
      ["お願いします", "おねがいします", "s'il vous plaît"],
    ],
    grammar: [
      {
        t: "Les nombres de base",
        d: "1 いち, 2 に, 3 さん, 4 し/よん, 5 ご, 6 ろく, 7 なな/しち, 8 はち, 9 きゅう/く, 10 じゅう. Puis 11 じゅういち, 20 にじゅう, 100 ひゃく, 1 000 せん, 10 000 まん.",
        ex: [["300 さんびゃく / 600 ろっぴゃく / 8000 はっせん", "attention aux exceptions"]],
      },
      {
        t: "Les compteurs",
        d: "Chaque catégorie d'objets a son compteur. 〜つ sert d'objet générique (1-10 uniquement). Personnes : 〜人 (ひとり, ふたり, さんにん). Objets longs : 〜本. Objets plats : 〜枚.",
        ex: [["りんごを三つください。", "Trois pommes, s'il vous plaît."], ["二人で行きます。", "J'y vais à deux."]],
      },
      {
        t: "Commander",
        d: "Nom + を + 数 + ください / お願いします. Le prix : 〜円です.",
        ex: [["水を二本ください。", "Deux bouteilles d'eau, s'il vous plaît."]],
      },
    ],
    quiz: [
      { q: "« trois personnes » se dit :", choices: ["さんにん", "さんじん", "みつひと", "さんひと"], a: 0, e: "さん + にん = さんにん (1 et 2 sont irréguliers : ひとり, ふたり)." },
      { q: "Compteur pour deux stylos :", choices: ["二本", "二枚", "二つ人", "二個"], a: 0, e: "Objets longs → ほん." },
      { q: "« Deux pommes, s'il vous plaît » :", choices: ["りんごを二つください。", "りんごが二枚です。", "りんごは二本です。", "りんごを二人ください。"], a: 0, e: "Objets génériques → 〜つ." },
    ],
  },
  {
    n: 8,
    title: "L'heure et les dates",
    goal: "Donner un rendez-vous, lire un horaire, situer dans la semaine et l'année.",
    dialog: [
      ["田中", "日本語の授業は何時から何時までですか。", "Le cours de japonais, c'est de quelle heure à quelle heure ?"],
      ["リナ", "9時から10時半までです。", "De 9h à 10h30."],
      ["田中", "何曜日ですか。", "C'est quel jour ?"],
      ["リナ", "月曜日と木曜日です。来週の金曜日はテストがあります。", "Lundi et jeudi. Vendredi prochain, il y a un test."],
      ["田中", "テストは大変ですね。今度の週末、一緒に勉強しましょう。", "Le test, c'est dur. Ce week-end, révise ensemble ?"],
      ["リナ", "はい、10時に駅で会いましょう。", "Oui, retrouvons-nous à 10h à la gare."],
    ],
    vocab: [
      ["何時", "なんじ", "quelle heure"],
      ["〜時・〜分", "〜じ・〜ふん", "heure(s), minute(s)"],
      ["半", "はん", "et demie"],
      ["何曜日", "なんようび", "quel jour"],
      ["月曜日", "げつようび", "lundi"],
      ["木曜日", "もくようび", "jeudi"],
      ["今日・明日・昨日", "きょう・あした・きのう", "aujourd'hui, demain, hier"],
      ["来週・今週・先週", "らいしゅう・こんしゅう・せんしゅう", "semaine prochaine, cette semaine, la semaine passée"],
      ["来年・去年", "らいねん・きょねん", "l'année prochaine, l'année dernière"],
      ["授業", "じゅぎょう", "cours"],
      ["テスト", "テスト", "test"],
      ["会います", "あいます", "se rencontrer"],
    ],
    grammar: [
      {
        t: "L'heure",
        d: "Heure : 〜時 (4時 = よじ, 7時 = しちじ exceptions). Minutes : 〜分 (いっぷん, さんぷん, ろっぷん…). 半 = et demie. 午前/午後 = am/pm.",
        ex: [["3時20分です。", "Il est 3h20."], ["9時半に会いましょう。", "Retrouvons-nous à 9h30."]],
      },
      {
        t: "Les jours",
        d: "曜日 : 月火水木金土日. Lundi = « jour de la Lune », mardi = « jour du Feu », etc.",
        ex: [["水曜日", "すいようび — mercredi"]],
      },
      {
        t: "Situer dans le temps",
        d: "今日, 明日, 昨日 ; 先週/今週/来週 ; 去年/今年/来年. に marque le moment : 日曜日に.",
        ex: [["来年の4月に日本へ行きます。", "Je vais au Japon en avril de l'année prochaine."]],
      },
    ],
    quiz: [
      { q: "4 heures :", choices: ["よじ", "しじ", "よんじ", "しちじ"], a: 0, e: "Exception : 4時 = よじ." },
      { q: "« De 9h à 17h » :", choices: ["9時から5時まで", "9時まで5時から", "9時に5時に", "9時も5時も"], a: 0, e: "から = depuis, まで = jusqu'à." },
      { q: "木曜日 est :", choices: ["jeudi", "mardi", "samedi", "dimanche"], a: 0, e: "月火水木 : 4e jour de la semaine." },
    ],
  },
  {
    n: 9,
    title: "Exister, aimer, comparer",
    goal: "Dire ce qu'il y a, exprimer ses goûts, comparer deux choses.",
    dialog: [
      ["田中", "東京に猫がいますか。", "Y a-t-il des chats à Tokyo ?"],
      ["リナ", "はい、家の近くにたくさんいます。でも犬のほうが好きです。", "Oui, il y en a plein près de chez moi. Mais je préfère les chiens."],
      ["田中", "東京と京都、どちらが好きですか。", "Tokyo et Kyoto, lequel préférez-vous ?"],
      ["リナ", "京都のほうが静かです。でも、食べ物は東京がいちばんおいしいです。", "Kyoto est plus calme. Mais côté nourriture, Tokyo est la meilleure."],
      ["田中", "そうですね。京都にはお寺がたくさんあります。", "C'est vrai. À Kyoto, il y a beaucoup de temples."],
    ],
    vocab: [
      ["あります", "あります", "il y a (objets, plantes)"],
      ["います", "います", "il y a (êtres vivants)"],
      ["好きです", "すきです", "aimer, aimer bien"],
      ["嫌いです", "きらいです", "détester"],
      ["上手です", "じょうずです", "être doué"],
      ["下手です", "へたです", "être maladroit"],
      ["猫", "ねこ", "chat"],
      ["犬", "いぬ", "chien"],
      ["近く", "ちかく", "près de"],
      ["たくさん", "たくさん", "beaucoup"],
      ["〜のほうが", "〜のほうが", "plutôt… (comparatif)"],
      ["いちばん", "いちばん", "le plus (superlatif)"],
    ],
    grammar: [
      {
        t: "あります / います — exister",
        d: "あります pour les objets et plantes, います pour les humains et animaux. Structure : 場所に 〜が あります/います.",
        ex: [["机の上に本があります。", "Il y a un livre sur la table."], ["公園に子供がいます。", "Il y a des enfants au parc."]],
      },
      {
        t: "Aimer / détester / être doué",
        d: "Ces adjectifs prennent が (pas を) : 猫が好きです. Le « aimer » est ressenti, pas agi.",
        ex: [["日本語が好きです。", "J'aime le japonais."]],
      },
      {
        t: "Comparer : より, のほうが, いちばん",
        d: "AよりBのほうが… : B est plus… que A. 〜がいちばん… : le plus.",
        ex: [["犬より猫のほうが好きです。", "J'aime plus les chats que les chiens."], ["富士山は日本でいちばん高い山です。", "Le Fuji est la montagne la plus haute du Japon."]],
      },
    ],
    quiz: [
      { q: "« Il y a un chat » :", choices: ["猫がいます", "猫があります", "猫をいます", "猫はいます"], a: 0, e: "Être vivant → います, avec が." },
      { q: "« J'aime les chats » :", choices: ["猫が好きです", "猫を好きです", "猫は好きます", "猫に好きです"], a: 0, e: "好き prend が." },
      { q: "« plus que le chien » :", choices: ["犬より", "犬から", "犬まで", "犬のほう"], a: 0, e: "より = « par rapport à »." },
    ],
  },
  {
    n: 10,
    title: "Inviter, vouloir, pouvoir",
    goal: "Proposer une sortie, dire ce qu'on veut faire et ce qu'on sait faire.",
    dialog: [
      ["田中", "今週の週末、映画を見ませんか。", "Ce week-end, ça te dirait d'aller voir un film ?"],
      ["リナ", "いいですね。日本の映画が見たいです。", "Bonne idée. J'ai envie de voir un film japonais."],
      ["田中", "いい映画ができますよ。一緒に行きましょう。", "Il y a un bon film. Allons-y ensemble."],
      ["リナ", "はい。ちなみに、日本語の新聞が読めますか。", "Oui. Au fait, savez-vous lire les journaux japonais ?"],
      ["田中", "少し読めます。まだ難しいですが、頑張ります。", "Je lis un peu. C'est encore difficile, mais je persévère."],
      ["リナ", "じゃ、映画の後、教えてください。", "Alors après le film, apprends-moi."],
    ],
    vocab: [
      ["映画", "えいが", "film"],
      ["週末", "しゅうまつ", "week-end"],
      ["〜ませんか", "〜ませんか", "ça te dirait de… ?"],
      ["〜ましょう", "〜ましょう", "faisons… ensemble"],
      ["〜たいです", "〜たいです", "je veux (faire)"],
      ["〜ことができます", "〜ことができます", "savoir faire, pouvoir"],
      ["〜ことができますか", "〜ことができますか", "pouvez-vous… ?"],
      ["少し", "すこし", "un peu"],
      ["まだ", "まだ", "encore, pas encore"],
      ["難しい", "むずかしい", "difficile"],
      ["教えます", "おしえます", "enseigner"],
      ["楽しみです", "たのしみです", "j'ai hâte"],
    ],
    grammar: [
      {
        t: "〜ませんか / 〜ましょう",
        d: "ませんか : inviter poliment (« et si on… ? »). ましょう : proposer ensemble (« allons-y »).",
        ex: [["コーヒーを飲みませんか。", "On boit un café ?"], ["行きましょう。", "Allons-y."]],
      },
      {
        t: "〜たいです — le désir",
        d: "Forme ます sans ます + たいです : 食べたいです. Le verbe devient comme un adjectif い : 食べたくないです.",
        ex: [["日本へ行きたいです。", "Je veux aller au Japon."]],
      },
      {
        t: "〜ことができます — la capacité",
        d: "Forme en dictionnaire + ことができます : savoir / pouvoir faire. Plus simple en apprenant : forme potentielle (読めます).",
        ex: [["ピアノを弾くことができます。", "Je sais jouer du piano."]],
      },
    ],
    quiz: [
      { q: "« On boit un thé ? » (invitation) :", choices: ["お茶を飲みませんか。", "お茶を飲みましょうか。", "お茶を飲みたいです。", "お茶を飲むことができます。"], a: 0, e: "Invitation polie : 〜ませんか." },
      { q: "« Je veux manger » :", choices: ["食べたいです", "食べります", "食べましょう", "食べてです"], a: 0, e: "Souche de ます + たいです." },
      { q: "« Je sais nager » :", choices: ["泳ぐことができます", "泳ぎたいです", "泳ぎません", "泳ぎましょう"], a: 0, e: "Dictionnaire + ことができます." },
    ],
  },
];

// ============================================================
// DONNÉES : GRAMMAIRE DE RÉFÉRENCE
// ============================================================

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

// ============================================================
// OUTILS
// ============================================================

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function shuffle(a) {
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function pick(a, n) { return shuffle(a).slice(0, n); }

// ============================================================
// DECKS DE QUIZ
// ============================================================

function buildKanaDeck(kana) {
  return pick(kana, 10).map(function (k) {
    var wrong = pick(kana.filter(function (x) { return x.r !== k.r; }), 3).map(function (x) { return x.r; });
    var choices = shuffle([k.r].concat(wrong));
    return { q: k.k, choices: choices, a: choices.indexOf(k.r), e: k.k + " → " + k.r };
  });
}
function buildKanjiDeck() {
  return pick(KANJI, 10).map(function (k) {
    var wrong = pick(KANJI.filter(function (x) { return x.s !== k.s; }), 3).map(function (x) { return x.s; });
    var choices = shuffle([k.s].concat(wrong));
    return { q: k.k, choices: choices, a: choices.indexOf(k.s), e: k.k + " = " + k.s + ". " + k.m };
  });
}
function buildVocabDeck() {
  var all = [];
  LESSONS.forEach(function (l) { all = all.concat(l.vocab); });
  return pick(all, 10).map(function (v) {
    var wrong = pick(all.filter(function (x) { return x[2] !== v[2]; }), 3).map(function (x) { return x[2]; });
    var choices = shuffle([v[2]].concat(wrong));
    return { q: v[0] + "（" + v[1] + "）", choices: choices, a: choices.indexOf(v[2]), e: v[0] + " = " + v[2] };
  });
}
function buildParticleDeck() {
  return [
    { q: "私＿テレビを見ます。", choices: ["は", "を", "に", "で"], a: 0, e: "Thème de la phrase → は (l'objet テレビ prend を)." },
    { q: "パン＿食べます。", choices: ["を", "は", "が", "と"], a: 0, e: "Objet direct de l'action → を." },
    { q: "学校＿行きます。", choices: ["に", "で", "を", "も"], a: 0, e: "Destination → に." },
    { q: "図書館＿本を読みます。", choices: ["で", "に", "を", "へ"], a: 0, e: "Lieu où se déroule l'action → で." },
    { q: "友達＿映画に行きます。", choices: ["と", "に", "を", "の"], a: 0, e: "Accompagnement → と." },
    { q: "猫＿好きです。(ce sont eux que j'aime)", choices: ["が", "を", "は", "で"], a: 0, e: "« 好き » (aimer) demande が, pas を." },
    { q: "九時＿五時まで働きます。", choices: ["から", "まで", "に", "で"], a: 0, e: "Point de départ → から." },
    { q: "東京＿行きます。(la direction compte)", choices: ["へ", "に", "を", "が"], a: 0, e: "Direction → へ (lu « e »)." },
    { q: "私＿行きます。(moi aussi)", choices: ["も", "は", "が", "を"], a: 0, e: "« Aussi » → も." },
    { q: "先生＿本です。", choices: ["の", "を", "は", "で"], a: 0, e: "Possession → の (le livre du professeur)." }
  ];
}

var DECKS = [
  { id: "hiragana", title: "ひらがな Hiragana", desc: "10 kana au hasard → donnez le rōmaji.", build: function () { return buildKanaDeck(HIRA); } },
  { id: "katakana", title: "カタカナ Katakana", desc: "10 kana au hasard → donnez le rōmaji.", build: function () { return buildKanaDeck(KATA); } },
  { id: "kanji", title: "漢字 Kanji N5", desc: "10 kanji au hasard → donnez le sens.", build: buildKanjiDeck },
  { id: "vocab", title: "語 Vocabulaire", desc: "10 mots des leçons → donnez le français.", build: buildVocabDeck },
  { id: "particles", title: "助詞 Particules", desc: "10 phrases à compléter → la bonne particule.", build: buildParticleDeck }
];

// ============================================================
// ÉTAT ET PERSISTANCE
// ============================================================

function load(k, d) {
  try { var s = localStorage.getItem(k); return s !== null ? JSON.parse(s) : d; } catch (e) { return d; }
}
function save(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ }
}

var lessonsDone = load("nihongo-dojo-lessons", []);
var scores = load("nihongo-dojo-scores", {});
var state = { tab: "home", script: "h", romaji: true, selKana: -1, selKanji: -1, selP: 0, openLesson: 1, q: "", quiz: null };
var lq = null;

var TABS = [["home", "Accueil"], ["kana", "Kana"], ["lessons", "Leçons"], ["grammar", "Grammaire"], ["kanji", "Kanji"], ["quiz", "Quiz"]];

// ============================================================
// ACTIONS
// ============================================================

function setTab(t) { state.tab = t; render(); }
function setScript(s) { state.script = s; state.selKana = -1; render(); }
function toggleRomaji() { state.romaji = !state.romaji; render(); }
function selKana(i) { state.selKana = i; render(); }
function selKanji(i) { state.selKanji = i; render(); }
function selP(i) { state.selP = i; render(); }
function openLesson(n) { state.openLesson = state.openLesson === n ? null : n; render(); }
function kanjiQuery(v) {
  state.q = v;
  document.getElementById("kgrid").innerHTML = kanjiGridHTML();
}
function toggleLesson(n) {
  var i = lessonsDone.indexOf(n);
  if (i >= 0) lessonsDone.splice(i, 1); else lessonsDone.push(n);
  save("nihongo-dojo-lessons", lessonsDone);
  render();
}
function startDeck(id) {
  var d = DECKS.filter(function (x) { return x.id === id; })[0];
  state.quiz = { id: id, title: d.title, items: d.build(), idx: 0, score: 0, picked: null, done: false };
  render();
}
function deckHome() { state.quiz = null; render(); }
function qNew() {
  var qz = state.quiz;
  qz.items = DECKS.filter(function (x) { return x.id === qz.id; })[0].build();
  qz.idx = 0; qz.score = 0; qz.picked = null; qz.done = false;
  render();
}
function qChoose(c) {
  var qz = state.quiz;
  if (qz.picked !== null) return;
  qz.picked = c;
  if (c === qz.items[qz.idx].a) qz.score++;
  render();
}
function qNext() {
  var qz = state.quiz;
  if (qz.idx + 1 >= qz.items.length) {
    qz.done = true;
    var pct = Math.round((qz.score / qz.items.length) * 100);
    if ((scores[qz.id] || 0) < pct) { scores[qz.id] = pct; save("nihongo-dojo-scores", scores); }
  } else { qz.idx++; qz.picked = null; }
  render();
}
function qRestart() {
  var qz = state.quiz;
  qz.idx = 0; qz.score = 0; qz.picked = null; qz.done = false;
  qz.items = DECKS.filter(function (x) { return x.id === qz.id; })[0].build();
  render();
}
function startLQ(n) {
  var l = LESSONS[n - 1];
  lq = { n: n, items: l.quiz.slice(), idx: 0, score: 0, picked: null, done: false };
  render();
}
function lqChoose(c) {
  if (lq.picked !== null) return;
  lq.picked = c;
  if (c === lq.items[lq.idx].a) lq.score++;
  render();
}
function lqNext() {
  if (lq.idx + 1 >= lq.items.length) lq.done = true;
  else { lq.idx++; lq.picked = null; }
  render();
}
function lqRestart() {
  lq.idx = 0; lq.score = 0; lq.picked = null; lq.done = false;
  render();
}

// ============================================================
// RENDU
// ============================================================

function navHTML() {
  return TABS.map(function (t) {
    return '<button class="navbtn' + (state.tab === t[0] ? " on" : "") + '" onclick="setTab(\'' + t[0] + '\')">' + t[1] + '</button>';
  }).join("");
}

function homeHTML() {
  var done = lessonsDone.length;
  var vals = Object.keys(scores).map(function (k) { return scores[k]; });
  var avg = vals.length ? Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length) : 0;
  var h = '<div class="hero"><div class="big serif">日本語 <span style="font-size:1.1rem;color:#d6d3d1">— dōjō</span></div>';
  h += '<p>Une méthode complète, interactive, en français : kana, 10 leçons progressives, 104 kanji du JLPT N5, grammaire de référence et quiz corrigés instantanément. Ce que les livres ne font pas : vous répondre quand vous vous trompez.</p>';
  h += '<div class="hero3"><div class="stat"><b>' + done + '/10</b><span>leçons terminées</span></div>';
  h += '<div class="stat"><b>' + avg + '/100</b><span>score moyen des quiz</span></div>';
  h += '<div class="stat"><b>104</b><span>kanji N5 couverts</span></div></div></div>';

  var road = [
    ["1", "Kana", "Hiragana + katakana, mnémotechnie française, drill."],
    ["2", "Leçons 1–5", "Se présenter, particules, verbes, adjectifs."],
    ["3", "Leçons 6–10", "Forme て, compteurs, invitations, comparaison."],
    ["4", "Kanji N5", "104 kanji : sens, lectures, exemples, astuces."],
    ["5", "JLPT N5", "Quiz : 80% de réussite régulière = niveau atteint."]
  ];
  h += '<h2 class="serif" style="margin-top:2rem">Le parcours</h2><div class="grid g5" style="margin-top:.75rem">';
  h += road.map(function (r) { return '<div class="road"><span class="rn">' + r[0] + '</span><div class="rt">' + r[1] + '</div><div class="rd2">' + esc(r[2]) + '</div></div>'; }).join("");
  h += '</div>';

  h += '<h2 class="serif" style="margin-top:2rem">Phrases de survie</h2><p class="muted small">À connaître avant tout le reste. Rōmaji fourni pour le premier voyage.</p>';
  h += '<div class="grid g3" style="margin-top:.75rem">';
  h += PHRASES.map(function (p) {
    return '<div class="phcard"><div class="pj">' + esc(p[0]) + '</div><div class="pr">' + esc(p[1]) + '</div><div class="pf">' + esc(p[2]) + '</div></div>';
  }).join("");
  h += '</div>';
  return h;
}

function kanaHTML() {
  var data = state.script === "h" ? HIRA : KATA;
  var rows = state.script === "h" ? HIRA_ROWS : KATA_ROWS;
  var h = '<div class="rowf"><div class="seg">';
  h += '<button class="segbtn' + (state.script === "h" ? " on" : "") + '" onclick="setScript(\'h\')">平仮名 Hiragana</button>';
  h += '<button class="segbtn' + (state.script === "k" ? " on" : "") + '" onclick="setScript(\'k\')">片仮名 Katakana</button></div>';
  h += '<button class="btn" onclick="toggleRomaji()">' + (state.romaji ? "Masquer" : "Afficher") + ' le rōmaji</button>';
  h += '<span class="muted small">Cliquez un caractère pour sa mnémotechnie.</span></div>';

  if (state.selKana >= 0) {
    var s = data[state.selKana];
    h += '<div class="selbox"><div class="bigkana serif">' + s.k + '</div><div><div style="font-size:1.05rem;font-weight:600">Rōmaji : ' + esc(s.r) + '</div><div class="muted" style="margin-top:.25rem">' + esc(s.m) + '</div></div></div>';
  }

  h += '<div class="kana-grid">';
  rows.forEach(function (row) {
    row.forEach(function (ci) {
      if (ci === null) { h += '<div class="kcell empty"></div>'; return; }
      var k = data[ci];
      h += '<button class="kcell' + (state.selKana === ci ? " sel" : "") + '" onclick="selKana(' + ci + ')"><div class="serif kk">' + k.k + '</div><div class="romaji' + (state.romaji ? "" : " off") + '">' + esc(k.r) + '</div></button>';
    });
  });
  h += '</div>';

  h += '<h3 class="serif">Dakuten ゛ et handakuten ゜ — les sons voisés</h3>';
  DAKU.forEach(function (d) {
    h += '<div class="card"><span class="pill" style="margin:0 0 .5rem">' + esc(d.label) + '</span><div class="rowf" style="margin-top:.25rem">';
    for (var i = 0; i < 5; i++) {
      h += '<div style="width:3.6rem;text-align:center;background:#f5f5f4;border:1px solid #f0efee;border-radius:.6rem;padding:.4rem 0"><div class="serif" style="font-size:1.15rem">' + (state.script === "h" ? d.h[i] : d.k[i]) + '</div><div style="font-size:.6rem;color:#78716c">' + esc(d.r[i]) + '</div></div>';
    }
    h += '</div><div class="muted small" style="margin-top:.5rem">' + esc(d.note) + '</div></div>';
  });

  h += '<h3 class="serif">Sons combinés (yōon) — petit ゃゅょ</h3>';
  h += '<table><tbody>';
  COMBOS.forEach(function (c, ri) {
    h += '<tr' + (ri % 2 ? ' style="background:#fafaf9"' : "") + '>';
    for (var j = 0; j < 3; j++) {
      h += '<td style="text-align:center"><span class="serif" style="font-size:1.05rem">' + (state.script === "h" ? c.h[j] : c.k[j]) + '</span> <span class="muted small">' + esc(c.r[j]) + '</span></td>';
    }
    h += '</tr>';
  });
  h += '</tbody></table>';
  return h;
}

function lessonQuizHTML(n) {
  if (!lq || lq.n !== n) {
    return '<div style="margin-top:1.5rem"><button class="btn primary" onclick="startLQ(' + n + ')">Lancer le mini-quiz (3 questions)</button></div>';
  }
  var h = "";
  if (lq.done) {
    var pct = Math.round((lq.score / lq.items.length) * 100);
    h += '<div class="card" style="text-align:center"><div class="serif" style="font-size:1.9rem">' + lq.score + ' <span style="font-size:1rem;color:#a8a29e">/ ' + lq.items.length + '</span></div>';
    h += '<div class="muted small" style="margin-top:.25rem">' + pct + '% — ' + (pct >= 90 ? "素晴らしい ! Excellent." : pct >= 60 ? "よくできました ! Bien joué." : "もう一度 ! À retravailler.") + '</div>';
    h += '<button class="btn primary" style="margin-top:1rem" onclick="lqRestart()">Recommencer</button></div>';
    return h;
  }
  var it = lq.items[lq.idx];
  h += '<div class="qbar"><i style="width:' + Math.round(((lq.idx + (lq.picked !== null ? 1 : 0)) / lq.items.length) * 100) + '%"></i></div>';
  h += '<div class="qtext">' + esc(it.q) + '</div>';
  h += '<div class="qchoice">' + it.choices.map(function (c, i) {
    var cls = "qc";
    if (lq.picked !== null) cls += i === it.a ? " right" : (i === lq.picked ? " wrong" : " dim");
    return '<button class="' + cls + '" onclick="lqChoose(' + i + ')">' + esc(c) + '</button>';
  }).join("") + '</div>';
  if (lq.picked !== null) {
    h += '<div class="feedback"><div class="fbrow"><div>' + (lq.picked === it.a ? '<span class="ok">正解 ! </span>' : '<span class="ko">残念… </span>') + esc(it.e) + '</div>';
    h += '<button class="btn dark" onclick="lqNext()">' + (lq.idx + 1 >= lq.items.length ? "Terminer" : "Suivant") + '</button></div></div>';
  }
  return h;
}

function lessonsHTML() {
  var h = '<div style="display:flex;justify-content:space-between;align-items:baseline"><h2 class="serif">10 leçons progressives</h2><span class="muted small">' + lessonsDone.length + '/10 terminées</span></div>';
  LESSONS.forEach(function (l) {
    var isOpen = state.openLesson === l.n;
    var isDone = lessonsDone.indexOf(l.n) >= 0;
    h += '<div class="litem"><button class="lhead" onclick="openLesson(' + l.n + ')">';
    h += '<span class="lrow"><span class="num' + (isDone ? " done" : "") + '">' + l.n + '</span><span><span class="ltitle">Leçon ' + l.n + ' — ' + esc(l.title) + '</span><div class="lgoal">' + esc(l.goal) + '</div></span></span>';
    h += '<span class="caret" style="font-size:.8rem;' + (isOpen ? "transform:rotate(180deg)" : "") + '">▼</span></button>';
    if (isOpen) {
      h += '<div class="lbody">';
      h += '<h3 class="serif" style="margin:0 0 .5rem">Dialogue</h3><div class="dialog">';
      l.dialog.forEach(function (d) {
        h += '<div style="margin-top:.4rem"><span class="who">' + esc(d[0]) + '</span>' + esc(d[1]) + ' <span class="fr">— ' + esc(d[2]) + '</span></div>';
      });
      h += '</div>';
      h += '<h3 class="serif">Vocabulaire</h3><div class="vocab">';
      l.vocab.forEach(function (v) {
        h += '<div class="vitem"><span class="jp">' + esc(v[0]) + '</span><span class="rd">' + esc(v[1]) + '</span><div class="fr">' + esc(v[2]) + '</div></div>';
      });
      h += '</div>';
      h += '<h3 class="serif">Grammaire</h3>';
      l.grammar.forEach(function (g) {
        h += '<div class="gpoint"><div class="gt">' + esc(g.t) + '</div><p>' + esc(g.d) + '</p>';
        g.ex.forEach(function (x) {
          h += '<div class="gx">' + esc(x[0]) + ' <span class="tr">— ' + esc(x[1]) + '</span></div>';
        });
        h += '</div>';
      });
      h += '<h3 class="serif">Mini-quiz</h3>' + lessonQuizHTML(l.n);
      h += '<label class="donelbl"><input type="checkbox"' + (isDone ? " checked" : "") + ' onchange="toggleLesson(' + l.n + ')"/>Marquer la leçon ' + l.n + ' comme terminée</label>';
      h += '</div>';
    }
    h += '</div>';
  });
  return h;
}

function grammarHTML() {
  var h = '<h2 class="serif">Les particules — l\'ossature de la phrase</h2>';
  h += '<p class="muted small">Le japonais place la particule APRÈS le groupe de mots. Cliquez pour les exemples.</p>';
  h += '<div class="chips" style="margin-top:.75rem">';
  h += PARTICLES.map(function (p, i) {
    return '<button class="chip' + (state.selP === i ? " sel" : "") + '" onclick="selP(' + i + ')">' + p.p + '<small>' + esc(p.read) + '</small></button>';
  }).join("");
  h += '</div>';
  var p = PARTICLES[state.selP];
  h += '<div class="card"><div style="display:flex;align-items:baseline;gap:.75rem"><span class="serif" style="font-size:2.2rem">' + p.p + '</span><span class="muted small">se lit « ' + esc(p.read) + ' » · ' + esc(p.role) + '</span></div>';
  h += '<p class="muted" style="margin-top:.6rem;font-size:.9rem">' + esc(p.usage) + '</p>';
  p.ex.forEach(function (x) {
    h += '<div class="exbox"><b>' + esc(x[0]) + '</b><div class="tr">' + esc(x[1]) + '</div></div>';
  });
  h += '</div>';
  h += '<div class="note"><b>Trois particules trahissent l\'oral :</b> ';
  h += SPECIAL_READ.map(function (s) { return '<span class="serif">' + s[0] + '</span> se lit « ' + esc(s[1]) + ' » (' + esc(s[2]) + ')'; }).join(" · ");
  h += '</div>';

  h += '<h2 class="serif" style="margin-top:2.5rem">Comparaisons et pièges</h2><div class="grid g2" style="margin-top:.75rem">';
  COMPARISONS.forEach(function (c) {
    h += '<div class="compcard"><div class="cp">' + esc(c.pair) + '</div>';
    c.rows.forEach(function (r) {
      h += '<div class="exbox"><b>' + esc(r[0]) + '</b><div class="tr">' + esc(r[1]) + '</div><div style="font-size:.75rem;color:#b91c1c;font-weight:600;margin-top:.15rem">' + esc(r[2]) + '</div></div>';
    });
    h += '</div>';
  });
  h += '</div>';

  h += '<h2 class="serif" style="margin-top:2.5rem">Verbes transitifs vs intransitifs</h2>';
  h += '<p class="muted small">他動詞 (transitif) : agit sur un objet → を. 自動詞 (intransitif) : pas d\'objet → が. C\'est la même action, vue de l\'agent ou de la chose.</p>';
  h += '<table><thead><tr><th>Transitif (を)</th><th>Intransitif (が)</th><th>Exemple transitif</th><th>Exemple intransitif</th></tr></thead><tbody>';
  TRANS_PAIRS.forEach(function (r) {
    h += '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td class="muted">' + esc(r[2]) + '</td><td class="muted">' + esc(r[3]) + '</td></tr>';
  });
  h += '</tbody></table>';

  h += '<h2 class="serif" style="margin-top:2.5rem">Conjugaison — forme polie</h2>';
  h += '<table><thead><tr><th>Verbe (groupe)</th><th>Présent</th><th>Négatif</th><th>Passé</th><th>Passé négatif</th><th>Forme て</th></tr></thead><tbody>';
  VERB_TABLE.forEach(function (v) {
    h += '<tr><td>' + esc(v.verb) + ' <span class="muted small">G' + esc(v.group) + '</span></td>';
    v.forms.forEach(function (f) { h += '<td>' + esc(f) + '</td>'; });
    h += '</tr>';
  });
  h += '</tbody></table>';
  h += '<div class="card"><div style="font-weight:600;color:#9f1239">Les 6 règles de la forme て (groupe 1)</div><div class="grid g3" style="margin-top:.75rem">';
  TE_RULES.forEach(function (r) {
    h += '<div class="exbox">' + esc(r[0]) + ' → <b style="color:#b91c1c">' + esc(r[1]) + '</b><div class="tr">' + esc(r[2]) + '</div></div>';
  });
  h += '</div></div>';

  h += '<h2 class="serif" style="margin-top:2.5rem">Adjectifs — conjugaison complète</h2><div class="grid g2" style="margin-top:.75rem">';
  ADJ_CONJ.forEach(function (a) {
    h += '<div class="compcard"><div class="cp">' + esc(a.t) + '</div>';
    a.rows.forEach(function (r) {
      h += '<div style="display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid #f0efee;padding:.35rem 0;font-size:.88rem"><span class="muted">' + esc(r[0]) + '</span><span style="text-align:right">' + esc(r[1]) + '</span></div>';
    });
    h += '</div>';
  });
  h += '</div>';

  h += '<h2 class="serif" style="margin-top:2.5rem">Nombres et compteurs</h2><div class="grid g2" style="margin-top:.75rem">';
  h += '<div class="compcard"><div class="cp">Nombres de base</div><div class="grid g3" style="margin-top:.5rem">';
  NUMBERS.forEach(function (n) {
    h += '<div class="exbox">' + esc(n[0]) + '<div class="tr">' + esc(n[1]) + '</div></div>';
  });
  h += '</div></div><div class="compcard"><div class="cp">Compteurs usuels</div>';
  COUNTERS.forEach(function (c) {
    h += '<div class="exbox"><b>' + esc(c[0]) + '</b> <span class="muted">' + esc(c[1]) + '</span><div class="tr">' + esc(c[2]) + '</div></div>';
  });
  h += '</div></div>';
  return h;
}

function kanjiFilter() {
  var q = state.q.trim().toLowerCase();
  return KANJI.map(function (k, i) { return { k: k, i: i }; }).filter(function (o) {
    if (!q) return true;
    return o.k.s.toLowerCase().indexOf(q) >= 0 || o.k.k === state.q.trim() || o.k.ex[0].indexOf(state.q.trim()) >= 0;
  });
}

function kanjiGridHTML() {
  var f = kanjiFilter();
  if (!f.length) return '<div class="muted" style="padding:1.5rem;text-align:center;border:1px dashed #d6d3d1;border-radius:1rem;margin-top:1.25rem">Aucun kanji trouvé.</div>';
  return f.map(function (o) {
    return '<button class="jcell' + (state.selKanji === o.i ? " sel" : "") + '" onclick="selKanji(' + o.i + ')">' + o.k.k + '<span>' + esc(o.k.s) + '</span></button>';
  }).join("");
}

function kanjiHTML() {
  var h = '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem">';
  h += '<h2 class="serif">Les 104 kanji du JLPT N5</h2>';
  h += '<input class="ksearch" value="' + esc(state.q) + '" oninput="kanjiQuery(this.value)" placeholder="Rechercher (sens ou kanji)…"/></div>';
  if (state.selKanji >= 0) {
    var k = KANJI[state.selKanji];
    h += '<div class="selbox"><div class="serif" style="font-size:4.5rem;line-height:1">' + k.k + '</div><div style="flex:1;min-width:13rem">';
    h += '<div style="font-size:1.2rem;font-weight:600">' + esc(k.s) + '</div>';
    h += '<div style="margin-top:.5rem"><span class="pill">音 on\'yomi : ' + esc(k.on) + '</span> <span class="pill">訓 kun\'yomi : ' + esc(k.kun) + '</span></div>';
    h += '<p style="margin-top:.6rem">' + esc(k.m) + '</p>';
    h += '<div class="exbox" style="background:#fff"><b>' + esc(k.ex[0]) + '</b> <span class="muted small">(' + esc(k.ex[1]) + ')</span> <span class="tr">— ' + esc(k.ex[2]) + '</span></div></div></div>';
  }
  h += '<div class="kanji-grid" id="kgrid">' + kanjiGridHTML() + '</div>';
  h += '<p class="muted small" style="margin-top:1.25rem">Astuce : les lectures on\'yomi servent aux mots composés d\'origine chinoise (日本, 学校) ; les lectures kun\'yomi aux mots japonais seuls (山, 川).</p>';
  return h;
}

function quizHTML() {
  var qz = state.quiz;
  if (!qz) {
    var h = '<h2 class="serif">Entraînement</h2><p class="muted small">10 questions par série, correction et explication immédiates. Visez 8/10 avant de passer au deck suivant.</p>';
    h += '<div class="grid g3" style="margin-top:.75rem">';
    h += DECKS.map(function (d) {
      var s = scores[d.id];
      return '<button class="deck" onclick="startDeck(\'' + d.id + '\')"><div class="dt">' + esc(d.title) + '</div><div class="dd">' + esc(d.desc) + '</div>' + (s !== undefined ? '<div class="ds">Meilleur score : ' + s + '/100</div>' : '') + '</button>';
    }).join("");
    h += '</div>';
    return h;
  }
  var h2c = '<button class="btn" onclick="deckHome()">← Retour aux decks</button>';
  if (qz.done) {
    var pct = Math.round((qz.score / qz.items.length) * 100);
    h2c += '<div class="card" style="text-align:center"><div class="serif" style="font-size:2.4rem">' + qz.score + ' <span style="font-size:1.1rem;color:#a8a29e">/ ' + qz.items.length + '</span></div>';
    h2c += '<div class="muted small" style="margin-top:.3rem">' + pct + '% — ' + (pct >= 90 ? "素晴らしい ! Excellent." : pct >= 70 ? "よくできました ! Bien joué." : pct >= 50 ? "続けて ! Ça progresse." : "もう一度 ! À retravailler.") + '</div>';
    h2c += '<button class="btn primary" style="margin-top:1.25rem" onclick="qRestart()">Recommencer</button>';
    h2c += '<button class="btn dark" style="margin-top:1.25rem" onclick="qNew()">Nouvelle série de questions</button></div>';
    return h2c;
  }
  var it = qz.items[qz.idx];
  h2c += '<div class="card"><div style="display:flex;justify-content:space-between" class="muted small"><span>' + esc(qz.title) + '</span><span>Question ' + (qz.idx + 1) + ' / ' + qz.items.length + ' · Score ' + qz.score + '</span></div>';
  h2c += '<div class="qbar"><i style="width:' + Math.round(((qz.idx + (qz.picked !== null ? 1 : 0)) / qz.items.length) * 100) + '%"></i></div>';
  h2c += '<div class="qtext">' + esc(it.q) + '</div>';
  h2c += '<div class="qchoice">' + it.choices.map(function (c, i) {
    var cls = "qc";
    if (qz.picked !== null) cls += i === it.a ? " right" : (i === qz.picked ? " wrong" : " dim");
    return '<button class="' + cls + '" onclick="qChoose(' + i + ')">' + esc(c) + '</button>';
  }).join("") + '</div>';
  if (qz.picked !== null) {
    h2c += '<div class="feedback"><div class="fbrow"><div>' + (qz.picked === it.a ? '<span class="ok">正解 ! </span>' : '<span class="ko">残念… </span>') + esc(it.e) + '</div>';
    h2c += '<button class="btn dark" onclick="qNext()">' + (qz.idx + 1 >= qz.items.length ? "Terminer" : "Suivant") + '</button></div></div>';
  }
  h2c += '</div>';
  return h2c;
}

function render() {
  document.getElementById("nav").innerHTML = navHTML();
  var el = document.getElementById("app");
  if (state.tab === "home") el.innerHTML = homeHTML();
  else if (state.tab === "kana") el.innerHTML = kanaHTML();
  else if (state.tab === "lessons") el.innerHTML = lessonsHTML();
  else if (state.tab === "grammar") el.innerHTML = grammarHTML();
  else if (state.tab === "kanji") el.innerHTML = kanjiHTML();
  else if (state.tab === "quiz") el.innerHTML = quizHTML();
}

render();