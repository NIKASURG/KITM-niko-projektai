window.addEventListener("load", function () {
  const pradziosTekst = document.getElementById("PirTekstas");
  const content1 = document.getElementById("content1");
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
  ];
  class Kaladele {
    constructor({ saltinis, aprasas, paveiksliuka }) {
      this.naujasDiv = document.createElement("div");
      this.naujasParagrafas = document.createElement("p");
      this.naujasDiv.className = "senuProjektuDezute";
      this.naujasParagrafas.textContent = aprasas;
      this.naujasDiv.style.backgroundImage = `url(${paveiksliuka})`;
      this.naujasDiv.appendChild(this.naujasParagrafas);

      content1.appendChild(this.naujasDiv);

      this.naujasDiv.addEventListener("click", function () {
        window.location.href = saltinis;
      });
    }
  }

  // Naudojimo pavyzdys
  new Kaladele({
    saltinis: "./seniProjektai/farm-shooter-slifavimas",
    aprasas:
      "Tai yra lapiu genocido žaidimas kurį kurėme kartu su programavimo bureliu",
    paveiksliuka: "./seniProjektai/paveiksliukai/lapiuSaudykle.png",
  });
  new Kaladele({
    saltinis: "./seniProjektai/kids1-Žaidimas",
    aprasas: "Tai yra mano pirmasis žaidimas padarytas su JS",
    paveiksliuka: "./seniProjektai/paveiksliukai/firstGame.png",
  });
  new Kaladele({
    saltinis: "./seniProjektai/discordProfiliniuGalerije-main",
    aprasas: "Tai yra svetaine kueioje dokumentuojamos mano discord profilines",
    paveiksliuka: "./seniProjektai/paveiksliukai/galerija.png",
  });
  new Kaladele({
    saltinis: "./seniProjektai/umJOOO",
    aprasas: "Tai yra projektas kur turi vesti komandas ir judinti personaža",
    paveiksliuka: "./seniProjektai/paveiksliukai/uhhhh.png",
  });
  new Kaladele({
    saltinis: "./seniProjektai/kids1-mcmod",
    aprasas: "Tai yra vieta kurioje laikomi privalomi minecraft serverio modai",
    paveiksliuka: "./seniProjektai/paveiksliukai/minecraft.png",
  });
  new Kaladele({
    saltinis: "./seniProjektai/GivuliuUkisReklama-main",
    aprasas: "Tai yra reklama knygai Givulių Ūkis",
    paveiksliuka: "./seniProjektai/paveiksliukai/ukis.png",
  });

  let sukimas = 1;
  let miegas = 0;
  let ePlotis = window.innerWidth;
  let keistiTeksta = true;
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
