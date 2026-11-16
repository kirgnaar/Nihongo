"use strict";
// ============================================================
// MOTEUR DE RÉPÉTITION ESPACÉE (SRS)
// Stockage : une seule clé localStorage « nihongo-dojo-srs ».
// Format : { v: 1, cards: { id: { b: boîte (1-5), d: prochaine révision (ms) } } }
// ============================================================

var SRS = (function () {
  var KEY = "nihongo-dojo-srs";
  var DAY = 86400000; // un jour en millisecondes
  var INTERVALS = { 1: 1 * DAY, 2: 2 * DAY, 3: 4 * DAY, 4: 8 * DAY, 5: 16 * DAY };

  function emptyState() {
    return { v: 1, cards: {} };
  }

  // Toute opération relit localStorage et revalide la structure.
  // Absence, JSON illisible ou structure invalide → état vide, jamais de blocage.
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw === null) return emptyState();
      var s = JSON.parse(raw);
      if (!s || typeof s !== "object" || s.v !== 1 || !s.cards || typeof s.cards !== "object") return emptyState();
      var cards = {};
      for (var id in s.cards) {
        if (!Object.prototype.hasOwnProperty.call(s.cards, id)) continue;
        var c = s.cards[id];
        if (!c || typeof c !== "object") continue;
        var b = c.b, d = c.d;
        if (typeof b !== "number" || b < 1 || b > 5 || b !== Math.floor(b)) continue;
        if (typeof d !== "number" || !isFinite(d)) continue;
        cards[id] = { b: b, d: d };
      }
      return { v: 1, cards: cards };
    } catch (e) {
      return emptyState();
    }
  }

  // Réécriture immédiate de l'objet entier après chaque modification.
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* stockage indisponible */ }
  }

  // now optionnel : Date.now() à chaque appel, jamais de valeur mise en cache.
  function nowMs(now) {
    return (typeof now === "number" && isFinite(now)) ? now : Date.now();
  }

  function count(now) {
    var t = nowMs(now);
    var s = load();
    var due = 0;
    for (var id in s.cards) {
      if (Object.prototype.hasOwnProperty.call(s.cards, id) && s.cards[id].d <= t) due++;
    }
    return { due: due, total: Object.keys(s.cards).length };
  }

  function due(now) {
    var t = nowMs(now);
    var s = load();
    var list = [];
    for (var id in s.cards) {
      if (Object.prototype.hasOwnProperty.call(s.cards, id) && s.cards[id].d <= t) list.push({ id: id, d: s.cards[id].d });
    }
    list.sort(function (a, b) { return a.d - b.d; });
    return list.map(function (x) { return x.id; });
  }

  // Enregistre chaque identifiant en boîte 1 avec d = now,
  // sans modifier les cartes déjà présentes.
  function add(ids, now) {
    var t = nowMs(now);
    var s = load();
    if (Object.prototype.toString.call(ids) !== "[object Array]") return;
    for (var i = 0; i < ids.length; i++) {
      var id = String(ids[i]);
      if (!Object.prototype.hasOwnProperty.call(s.cards, id)) {
        s.cards[id] = { b: 1, d: t };
      }
    }
    save(s);
  }

  // g : 0 Encore (retour boîte 1), 1 Difficile (boîte inchangée),
  //     2 Bien (+1 boîte), 3 Facile (+2 boîtes), plafond 5.
  // d = now + intervalle de la nouvelle boîte. Renvoie la nouvelle boîte.
  function judge(id, g, now) {
    var t = nowMs(now);
    var s = load();
    id = String(id);
    if (!Object.prototype.hasOwnProperty.call(s.cards, id)) return null;
    if (typeof g !== "number" || g < 0 || g > 3 || g !== Math.floor(g)) return null;
    var c = s.cards[id];
    var b;
    if (g === 0) b = 1;
    else if (g === 1) b = c.b;
    else if (g === 2) b = c.b + 1;
    else b = c.b + 2;
    if (b > 5) b = 5;
    c.b = b;
    c.d = t + INTERVALS[b];
    save(s);
    return b;
  }

  function card(id) {
    var s = load();
    id = String(id);
    if (!Object.prototype.hasOwnProperty.call(s.cards, id)) return null;
    var c = s.cards[id];
    return { b: c.b, d: c.d };
  }

  return {
    count: count,
    due: due,
    add: add,
    judge: judge,
    card: card
  };
})();
