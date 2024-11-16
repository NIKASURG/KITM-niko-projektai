window.addEventListener("load", function () {
  const pradziosTekst = document.getElementById("PirTekstas");
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const content3 = document.getElementById("content3");

  let rasomTeks = [
    "",
    "SVEIKI ATVYKE Į MANO SVETAINE APIE MANE",
    "Nepamiršk pasisveikint, čia visada draugiški žmonės :)",
    "Jauti? Tai draugystės ir geros nuotaikos dvelksmas!",
    "JŪS VISADA ČIA LAUKEMAS",
    "NEBENT NESI",
    "TADA NELAUKEM TAVES ):",
    "TIKIOSI GRYŠI ):",
    "undefined",
    "Pagalvojot tai klaida :P",
    "Ar aš sakiau tu nelaukemas?",
    "Juokavau, tu esi nuostabus",
    "KĄ Tu Ką vAkaRe",
    "Geros dienos",
    "Ar jau radai savo mėgstamą kampelį šioje svetainėje?",
    "Sako, geriausi nuotykiai prasideda nuo smalsumo!",
    "Tu esi nuostab(us) - i ",
    "Džiaukis savimi",
  ];

  projektai.forEach((i) => new Kaladele(i));
  pyDarbai.forEach((i) => new Python(i));
  svetaines.forEach((i) => new svetainesDarbai(i));

  let sukimas = 1;
  let miegas = 0;
  function rasytTeksta(tekstas) {
    pradziosTekst.innerHTML = tekstas;
  }
  // debugger;
  rasytTeksta(rasomTeks[sukimas]);

  function mainRatas() {
    if (sukimas < rasomTeks.length - 1 && miegas > 400) {
      sukimas++;
      console.log(sukimas);
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
