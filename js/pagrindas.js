window.addEventListener("load", function () {
  const pradziosTekst = document.getElementById("PirTekstas");
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const content3 = document.getElementById("content3");
  const navigacijosKonteineris = document.getElementById(
    "navigacijosKonteineris"
  );
  const naviguotiI = document.getElementsByClassName("naviguoti");

  projektai.forEach((i) => new Kaladele(i));
  pyDarbai.forEach((i) => new Python(i));
  svetaines.forEach((i) => new svetainesDarbai(i));
  for (const e of naviguotiI) {
    new navigacija({ e: e });
  }

  let sukimas = 1;
  let miegas = 0;
  function rasytTeksta(tekstas) {
    pradziosTekst.innerHTML = tekstas;
  }
  // debugger;
  rasytTeksta(rasomTeks[sukimas]);

  function mainRatas() {
    document.body.style.height = document.body.scrollHeight + "px";

    if (sukimas < rasomTeks.length - 1 && miegas > 100) {
      sukimas++;

      rasytTeksta(rasomTeks[sukimas]);
      miegas = 0;
    } else {
      if (sukimas >= rasomTeks.length - 1) {
        sukimas = 0;
      }
      miegas++;
    }
    requestAnimationFrame(mainRatas);
  }
  mainRatas();
});
