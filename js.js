(function () {
  var target = new Date("2026-12-04T06:00:00+05:30").getTime();
  var ids = ["d", "h", "m", "s"].map(function (i) { return document.getElementById(i); });
  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var diff = Math.max(0, target - Date.now());
    var v = [Math.floor(diff / 864e5), Math.floor(diff / 36e5) % 24,
             Math.floor(diff / 6e4) % 60, Math.floor(diff / 1e3) % 60];
    ids.forEach(function (el, i) { el.textContent = pad(v[i]); });
  }
  tick(); setInterval(tick, 1000);

  var copy = document.getElementById("copy");
  copy.addEventListener("click", function () {
    var text = "K.P Kabilan A/C Mahal, Vadivelkari, Madurai - 625019";
    var done = function () {
      copy.textContent = "Address copied";
      setTimeout(function () { copy.textContent = "Copy address"; }, 2000);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done);
    else { var t = document.createElement("textarea"); t.value = text;
      document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); done(); }
  });

  var msg = "You are warmly invited to the wedding of Anand & Aishwarya.\n" +
    "Engagement: 3 Dec 2026, 7:00 PM\nMarriage: 4 Dec 2026, 6:00 AM\n" +
    "K.P Kabilan A/C Mahal, Vadivelkari, Madurai.\n" + location.href;
  document.getElementById("share").href = "https://wa.me/?text=" + encodeURIComponent(msg);
})();

