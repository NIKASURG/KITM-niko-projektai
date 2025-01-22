class Kaladele {
  constructor({ saltinis, aprasas, paveiksliuka }) {
    this.naujasDiv = document.createElement("div");
    this.naujasParagrafas = document.createElement("p");
    this.naujasParagrafas.className = "parDez";
    this.naujasDiv.className = "senuProjektuDezute";
    this.naujasParagrafas.textContent = aprasas;
    this.naujasDiv.style.backgroundImage = `url(${paveiksliuka})`;
    this.naujasDiv.appendChild(this.naujasParagrafas);

    this.naujasDiv.addEventListener("click", function () {
      window.location.href = saltinis;
    });
    content1.appendChild(this.naujasDiv);
  }
}
class Python {
  constructor({ saltinis, aprasas }) {
    this.naujasDiv = document.createElement("div");
    this.naujasParagrafas = document.createElement("p");
    this.naujasDiv.className = "pitonoKodoDezute";
    this.naujasParagrafas.textContent = aprasas;
    this.naujasDiv.appendChild(this.naujasParagrafas);

    this.naujasDiv.addEventListener("click", function () {
      window.location.href = saltinis;
    });
    content2.appendChild(this.naujasDiv);
  }
}
class svetainesDarbai {
  constructor({ saltinis, aprasas }) {
    this.naujasDiv = document.createElement("div");
    this.naujasParagrafas = document.createElement("p");
    this.naujasDiv.className = "svetainesDezute";
    this.naujasParagrafas.textContent = aprasas;
    this.naujasDiv.appendChild(this.naujasParagrafas);

    this.naujasDiv.addEventListener("click", function () {
      window.location.href = saltinis;
    });
    content3.appendChild(this.naujasDiv);
  }
}
class navigacija {
  constructor({ e }) {
    this.naujeNavigacija = document.createElement("a");
    this.naujeNavigacija.textContent = e.innerHTML;
    this.naujeNavigacija.className = "navTekstas";
    this.naujeNavigacija.className = "atitraukti";

    this.naujeNavigacija.href = "#" + e.id;
    navigacijosKonteineris.appendChild(this.naujeNavigacija);
  }
}
