"use strict";
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