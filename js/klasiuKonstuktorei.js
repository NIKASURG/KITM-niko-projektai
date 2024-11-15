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
class Python {
  constructor({ saltinis, aprasas }) {
    this.naujasDiv = document.createElement("div");
    this.naujasParagrafas = document.createElement("p");
    this.naujasDiv.className = "pitonoKodoDezute";
    this.naujasParagrafas.textContent = aprasas;
    this.naujasDiv.appendChild(this.naujasParagrafas);

    content2.appendChild(this.naujasDiv);

    this.naujasDiv.addEventListener("click", function () {
      window.location.href = saltinis;
    });
  }
}
class svetainesDarbai {
  constructor({ saltinis, aprasas }) {
    this.naujasDiv = document.createElement("div");
    this.naujasParagrafas = document.createElement("p");
    this.naujasDiv.className = "svetainesDezute";
    this.naujasParagrafas.textContent = aprasas;
    this.naujasDiv.appendChild(this.naujasParagrafas);

    content3.appendChild(this.naujasDiv);

    this.naujasDiv.addEventListener("click", function () {
      window.location.href = saltinis;
    });
  }
}
