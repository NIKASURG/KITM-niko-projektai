//////////////////////////////////////////////////////////////////
// Atmesta idėja
//////////////////////////////////////////////////////////////
// window.addEventListener("load", () => {
//   const poperius = document.getElementById("poperius");
//   const windowws = document.getElementById("windowws");
//   let wAukstis = windowws.offsetHeight;
//   let wPlotis = windowws.offsetWidth;
//   poperius.height = wAukstis;
//   poperius.width = wPlotis;
//   const ctx = poperius.getContext("2d");
//   const suzi = document.getElementById("suzinot");
//   peleNsupausta = false;
//   poperius.addEventListener("onmousemove", (e) => {});
//   poperius.addEventListener("mousedown", function (e) {
//     if (e.button === 0) {
//       peleNsupausta = true;
//     }
//   });
//   addEventListener("mouseup", function (e) {
//     if (e.button === 0) {
//       peleNsupausta = false;
//     }
//   });
//   let peleY = 0;
//   let peleX = 0;
//   onmousemove = (e) => {
//     peleX = e.clientX;
//     peleY = e.clientY;
//     // if()
//   };
//   let top = {
//     x: 5,
//     y: 5,
//     p: 500,
//     a: 50,
//   };

//   function loop() {
//     console.log(peleX, peleY);
//     if (
//       top.x < peleX + 2 &&
//       top.x + 2 > peleX &&
//       top.y < peleY + 2 &&
//       top.y + top.h > peleY &&
//       peleNsupausta
//     ) {
//         console.log('yup')
//       top.x = peleX;
//       top.y = peleY;
//     }
//     ctx.fillRect(top.x, top.y, top.p, top.a);
//     requestAnimationFrame(loop);
//   }
//   loop();
// });
