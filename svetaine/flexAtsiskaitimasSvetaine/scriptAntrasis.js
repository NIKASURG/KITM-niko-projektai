window.addEventListener("load", () => {
  let uzrasas = document.getElementById("uzrasas");
  let langelis = document.getElementById("lamgelis");
  let Ikelti = document.getElementById("Ikelti");
  console.log(localStorage.getItem("1"));
 
  const pirmas = document.getElementById("primas");
  const antras = document.getElementById("antras");
  const trecias = document.getElementById("trecias");
  const ketvirtas = document.getElementById("ketvirtas");
  const penktas = document.getElementById("penktas");
  let pirm = "";
  let ant = "";
  let tre = "";
  let ket = "";
  let pen = "";

  if(localStorage.getItem("1") == null){
    
  }
 else{
  pirm =localStorage.getItem("1") 
  ant =localStorage.getItem("2")
  tre =localStorage.getItem("3")
  ket =localStorage.getItem("4")
  pen =localStorage.getItem("5")
  pirmas.innerHTML = pirm;
  antras.innerHTML = ant;
  trecias.innerHTML = tre;
  ketvirtas.innerHTML = ket;
  penktas.innerHTML = pen;
 }
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
    penktas.innerHTML = pen;
    console.log(uzrasas.value);
    console.log("test");
    localStorage.setItem("1", pirm);
    localStorage.setItem("2", ant);

    localStorage.setItem("3", tre);

    localStorage.setItem("4", ket);
    localStorage.setItem("5", pen);
  });
});
