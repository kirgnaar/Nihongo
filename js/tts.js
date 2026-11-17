var TTS = (function () {
  var voice = null;

  function pickVoice() {
    if (voice !== null) return voice;
    if (typeof speechSynthesis === "undefined" || !speechSynthesis.getVoices) return (voice = false);
    var all = speechSynthesis.getVoices();
    var ja = all.filter(function (v) { return (v.lang || "").indexOf("ja") === 0; });
    voice = ja.length ? ja[0] : false;
    return voice;
  }

  function speak(text) {
    if (typeof speechSynthesis === "undefined" || typeof SpeechSynthesisUtterance === "undefined") return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    var v = pickVoice();
    if (v) u.voice = v;
    u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  if (typeof speechSynthesis !== "undefined" && typeof speechSynthesis.onvoiceschanged !== "undefined") {
    speechSynthesis.onvoiceschanged = function () { voice = null; pickVoice(); };
  }

  return { speak: speak };
})();
