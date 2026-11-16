"use strict";
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

var TABS = [["home", "Accueil"], ["kana", "Kana"], ["lessons", "Leçons"], ["grammar", "Grammaire"], ["kanji", "Kanji"], ["quiz", "Quiz"], ["srs", "Révision"]];

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
  else if (state.tab === "srs") el.innerHTML = srsHTML();
}

function srsHTML() {
  var srcs = srsSources();
  var s = state.srs;
  if (!s) {
    var c = SRS.count();
    var fresh = 0;
    srcs.forEach(function (src) {
      src.cards.forEach(function (id) { if (SRS.card(id) === null) fresh++; });
    });
    var newCount = Math.min(10, fresh);
    var h = '<h2 class="serif">Révision espacée</h2>';
    h += '<p class="muted small">Le moteur retient vos cartes et vous les représente quand elles sont dues ; chaque session introduit en plus jusqu\'à 10 cartes nouvelles, prises dans l\'ordre hiragana, katakana, kanji, vocabulaire.</p>';
    if (c.due > 0 || newCount > 0) {
      h += '<div class="card" style="text-align:center"><div class="serif" style="font-size:2.2rem">' + esc(c.due) + '</div>';
      h += '<div class="muted small" style="margin-top:.25rem">cartes dues (' + esc(c.total) + ' enregistrées au total) — ' + esc(newCount) + ' cartes nouvelles seront proposées</div>';
      h += '<button class="btn primary" style="margin-top:1.25rem" onclick="srsStart()">Commencer la révision</button></div>';
    } else {
      h += '<div class="card" style="text-align:center"><div class="serif" style="font-size:1.3rem">Rien à réviser aujourd\'hui.</div>';
      h += '<div class="muted small" style="margin-top:.25rem">' + esc(c.total) + ' cartes enregistrées, aucune due pour le moment.</div></div>';
    }
    return h;
  }
  var id = s.ids[s.idx];
  var src = srcs.filter(function (x) { return x.cards.indexOf(id) >= 0; })[0];
  var h2 = '<div class="card">';
  h2 += '<div style="display:flex;justify-content:space-between" class="muted small"><span>Révision</span><span>Carte ' + (s.idx + 1) + ' / ' + s.ids.length + '</span></div>';
  h2 += '<div class="qbar"><i style="width:' + Math.round((s.idx / s.ids.length) * 100) + '%"></i></div>';
  h2 += '<div class="qtext">' + esc(src.front(id)) + '</div>';
  if (!s.shown) {
    h2 += '<div style="text-align:center"><button class="btn primary" onclick="srsShow()">Voir la réponse</button></div>';
  } else {
    h2 += '<div class="feedback"><div style="text-align:center;font-size:1.15rem">' + esc(src.back(id)) + '</div></div>';
    h2 += '<div class="qchoice">';
    h2 += '<button class="qc" onclick="srsJudge(0)">Encore</button>';
    h2 += '<button class="qc" onclick="srsJudge(1)">Difficile</button>';
    h2 += '<button class="qc" onclick="srsJudge(2)">Bien</button>';
    h2 += '<button class="qc" onclick="srsJudge(3)">Facile</button>';
    h2 += '</div>';
  }
  h2 += '</div>';
  return h2;
}

function srsJudge(g) {
  var s = state.srs;
  if (!s) return;
  var id = s.ids[s.idx];
  if (SRS.card(id) === null) SRS.add([id]);
  SRS.judge(id, g);
  if (g === 0) s.ids.push(id);
  s.idx++;
  if (s.idx >= s.ids.length) state.srs = null;
  else state.srs.shown = false;
  render();
}

function srsShow() {
  state.srs.shown = true;
  render();
}

function srsStart() {
  var ids = SRS.due();
  var fresh = [];
  var srcs = srsSources();
  for (var i = 0; i < srcs.length && fresh.length < 10; i++) {
    var notYet = srcs[i].cards.filter(function (id) { return SRS.card(id) === null; });
    fresh = fresh.concat(pick(notYet, 10 - fresh.length));
  }
  ids = shuffle(ids.concat(fresh));
  state.srs = ids.length ? { ids: ids, idx: 0, shown: false } : null;
  render();
}

function srsImport(srcId) {
  var src = srsSources().filter(function (s) { return s.id === srcId; })[0];
  if (!src) return;
  var fresh = src.cards.filter(function (id) { return SRS.card(id) === null; });
  SRS.add(pick(fresh, 20));
  render();
}

// ============================================================
// RÉVISION ESPACÉE (SRS)
// ============================================================

function srsSources() {
  var voc = [];
  LESSONS.forEach(function (l) { l.vocab.forEach(function (v) { voc.push(v); }); });
  function findKana(data, id) {
    var c = id.slice(2);
    var f = data.filter(function (x) { return x.k === c; });
    return f.length ? f[0] : null;
  }
  function findKanji(id) {
    var c = id.slice(6);
    var f = KANJI.filter(function (x) { return x.k === c; });
    return f.length ? f[0] : null;
  }
  function findVoc(id) {
    var w = id.slice(4);
    var f = voc.filter(function (x) { return x[0] === w; });
    return f.length ? f[0] : null;
  }
  return [
    {
      id: "hiragana",
      title: "ひらがな Hiragana",
      cards: HIRA.map(function (k) { return "h:" + k.k; }),
      front: function (id) { var k = findKana(HIRA, id); return k ? k.k : id; },
      back: function (id) { var k = findKana(HIRA, id); return k ? k.r + " — " + k.m : ""; }
    },
    {
      id: "katakana",
      title: "カタカナ Katakana",
      cards: KATA.map(function (k) { return "k:" + k.k; }),
      front: function (id) { var k = findKana(KATA, id); return k ? k.k : id; },
      back: function (id) { var k = findKana(KATA, id); return k ? k.r + " — " + k.m : ""; }
    },
    {
      id: "kanji",
      title: "漢字 Kanji N5",
      cards: KANJI.map(function (k) { return "kanji:" + k.k; }),
      front: function (id) { var k = findKanji(id); return k ? k.k : id; },
      back: function (id) {
        var k = findKanji(id);
        return k ? k.s + " — on : " + k.on + " · kun : " + k.kun + " — " + k.m : "";
      }
    },
    {
      id: "vocab",
      title: "語 Vocabulaire",
      cards: voc.map(function (v) { return "voc:" + v[0]; }),
      front: function (id) { var v = findVoc(id); return v ? v[0] + "（" + v[1] + "）" : id; },
      back: function (id) { var v = findVoc(id); return v ? v[2] : ""; }
    }
  ];
}

render();