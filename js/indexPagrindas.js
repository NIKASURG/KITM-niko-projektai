window.addEventListener("load", function () {
  const pradziosTekst = document.getElementById("PirTekstas");
  const navigacijosKonteineris = document.getElementById(
    "navigacijosKonteineris"
  );
  const naviguotiI = document.getElementsByClassName("naviguoti");
  const slepkNav = document.getElementsByClassName("slepkNav");
  // slepkNav.addEventListener("click",e){

  // };
  let sukimas = 1;
  for (const e of naviguotiI) {
    new navigacija({ e: e });
  }

  let miegas = 0;
  function rasytTeksta(tekstas) {
    pradziosTekst.innerHTML = tekstas;
  }
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
