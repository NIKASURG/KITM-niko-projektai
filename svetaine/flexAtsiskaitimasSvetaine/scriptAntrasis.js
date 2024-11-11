window.addEventListener("load", () => {
  let uzrasas = document.getElementById("uzrasas");
  let langelis = document.getElementById("lamgelis");
  let Ikelti = document.getElementById("Ikelti");
  let pirm = "";
  let ant = "";
  let tre = "";
  let ket = "";
  let pen = "";
  let pirmas = document.getElementById("pirmas");
  let antras = document.getElementById("antras");
  let trecias = document.getElementById("trecias");
  let ketvirtas = document.getElementById("ketvirtas");
  let penktas = document.getElementById("penktas");
  Ikelti.addEventListener("click", function () {
    uzrasas = document.getElementById("uzrasas");
    langelis = document.getElementById("lamgelis");
    switch (langelis.value) {
      case "1":
        console.log("vienas");
        pirm += uzrasas.value;
        uzrasas.value = "";
        break;
      case "2":
        console.log("antras");
        ant += uzrasas.value;
        uzrasas.value = "";

        break;
      case "3":
        console.log("trecias");
        tre += uzrasas.value;
        uzrasas.value = "";

        break;
      case "4":
        console.log("ketvirtas");
        ket += uzrasas.value;
        uzrasas.value = "";

        break;
      case "5":
        console.log("penktaas");
        pen += uzrasas.value;
        uzrasas.value = "";

        break;
      default:
        break;
    }

    pirmas.innerHTML = pirm;
    antras.innerHTML = ant;
    trecias.innerHTML = tre;
    ketvirtas.innerHTML = ket;
    penktas.innerHTML = penktas;
    console.log(uzrasas.value);
    console.log("test");
  });
});
