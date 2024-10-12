const poperius = document.getElementById('popiergalis')
const inX = document.getElementById('inX')
const inY = document.getElementById('inY')
const ar = document.getElementById('ar')
document.getElementById("sauk").onclick = function () { sauk() };
document.getElementById("kitas").onclick = function () { kitas() };
let bandymu = 0
const ctx = poperius.getContext('2d')
const ePlotis = window.innerWidth
const eAukstis = window.innerHeight
let lapoPlotis = ePlotis / 2
let lapoAukstis = eAukstis / 2
inX.max = lapoPlotis
poperius.width = lapoPlotis
poperius.height = lapoAukstis
inY.max = lapoAukstis
function kitas() {
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, lapoPlotis, lapoAukstis)
    x = Math.round(Math.random() * lapoPlotis)
    y = Math.round(Math.random() * lapoAukstis)
    ctx.fillRect(x, y, p, a);
    bandymu = 0
    ar.innerHTML = 'ir.........'
}
function sauk() {
    ctx.fillStyle = "red";
    ctx.fillRect(sautX, sautY, p, a);

    if ((x < sautX + p && x + p > sautX) && (y < sautY + a && y + a > sautY)) {
        console.log('pataikyta')
        ar.innerHTML = 'Pataikei, nesekmingu bandymu ' + bandymu
    }
    else {
        console.log('nepataikyta')
        bandymu++
        ar.innerHTML = 'Nepataikei, nesekmingu bandymu ' + bandymu
    }
}
inX.addEventListener('change', () => {
    sautX = parseInt(inX.value)
    console.log(sautX)

});
inY.addEventListener('change', () => {
    sautY = parseInt(inY.value)
    console.log(sautY)
});

let x = Math.round(Math.random() * lapoPlotis)
let y = Math.round(Math.random() * lapoAukstis)
console.log(x, y)
let p = 30
let a = 30
ctx.fillRect(x, y, p, a);
