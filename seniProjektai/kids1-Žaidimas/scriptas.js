let kaistiskin = Math.floor(Math.random() * 3);

window.addEventListener("load", () => {
    coin2s = 1
    const coin2 = document.getElementById("coin2");
    pirkinys1 = 1
    const ekranas = document.getElementById("ekranas");
    const ekranoAukstis = ekranas.clientHeight;
    const ekranoPlotis = ekranas.clientWidth;
    skin = ['kvadratas', 'mėlinas', 'kskin', 'baby']
    const raudonas = document.createElement("button");
    raudonas.id = "raudonas";
    raudonas.onclick = function() { kaistiskin = 0 }
    const žalias = document.createElement("button");
    žalias.id = "žalias";
    žalias.onclick = function() { kaistiskin = 2 }
    const mėlinas = document.createElement("button");
    mėlinas.id = "mėlinas";
    mėlinas.onclick = function() { kaistiskin = 1 }
    const BABYMODE = document.createElement("button");
    BABYMODE.id = "BABYMODE";
    BABYMODE.onclick = function() { kaistiskin = 3 }

    BABYMODE.innerHTML = 'BABYMODE (išiungti coins)';
    document.body.appendChild(BABYMODE);
    let manoCanvas = document.getElementById("canvas");
    var velniulas = document.getElementById("velniukas");
    var mėlinaspik = document.getElementById("mėlinaspik");
    var žaliaspik = document.getElementById("žaliaspik");
    var llaikas = document.getElementById("laikas");
    var ilgas = document.getElementById("ilgas");
    const išiungiklis = document.createElement("button");
    const pirkti = document.createElement("button");
    const meniu = document.createElement("button");
    const parodytikur = document.createElement("button");
    const aukštynm = document.createElement("p");
    const žemynm = document.createElement("p");
    const kairėnm = document.createElement("p");
    const dešinėnm = document.createElement("p");
    dešinėnm.id = "dešinėnm1";
    kairėnm.id = "kairėnm";
    žemynm.id = "žemynm";
    aukštynm.id = "aukštynm";
    dešinėnm.innerHTML = 'Dešinėn';
    kairėnm.innerHTML = 'Kairėn';
    aukštynm.innerHTML = 'Aukštyn';
    žemynm.innerHTML = 'Žemyn';
    parodytikur.id = "parodytikur";

    document.body.style.background = "#f3f3f3 url('backgraubd.png') no-repeat ";

    const išėjimas = document.createElement("button");
    parodytikur.innerHTML = 'Telefono kontrolės';
    const kairėn = document.createElement("div");
    const rodytim1 = document.createElement("div");
    const rodytim2 = document.createElement("div");
    const rodytim3 = document.createElement("div");
    const rodytim4 = document.createElement("div");

    rodytim1.id = "rodytim1";
    rodytim2.id = "rodytim2";
    rodytim3.id = "rodytim3";
    rodytim4.id = "rodytim4";
    kairėn.id = "kairėn";
    kairėn.onclick = function() {
        a -= 30;
    }
    const dešinėn = document.createElement("div");
    dešinėn.id = "dešinėn";
    dešinėn.onclick = function() {
        a += 30;
    }
    const viršun = document.createElement("div");
    viršun.id = "viršun";
    viršun.onclick = function() {
        b += dalys;
        kartai += 1;
    }
    const apačion = document.createElement("div");
    apačion.id = "apačion";
    apačion.onclick = function() {

        b -= dalys;
        kartai -= 1;
    }
    pirkti.id = "pirkti";
    pirkti.innerHTML = 'pirkimas 10 coins';
    išėjimas.id = "krautuvei";
    išėjimas.innerHTML = 'krautuvei';
    var vcoin = document.getElementById("vertix");


    var coin = localStorage.getItem('coin');

    pirkti.onclick = function() {
        if (pirkinys1 === 1 && coin > 9) {
            coin -= 10
            pirkinys1 = 0;
            piniginė = coin
            localStorage.setItem('coin', JSON.stringify(piniginė))

        };

    }

    pikčiurnos = [velniulas, žaliaspik, mėlinaspik]
    raudonas.innerHTML = "raudonas";
    mėlinas.innerHTML = "mėlinas";
    žalias.innerHTML = "žalias";
    const mygtukas2 = document.createElement("button");
    const parduotuvė = document.createElement("button");
    parduotuvė.id = "shop";
    parduotuvė.innerHTML = "Krautuvė(pyldoma)";


    išėjimas.onclick = function() {

        istrintiLinijas();
        x = 0
        linijos();
        document.body.appendChild(raudonas);
        document.body.appendChild(mėlinas);
        document.body.appendChild(žalias);
        document.body.appendChild(išiungiklis);
        document.body.appendChild(hints);
        document.body.appendChild(parduotuvė);
        išiungiklis.style.display = '';
        raudonas.style.display = '';
        mėlinas.style.display = '';
        žalias.style.display = '';
        BABYMODE.style.display = '';
        vertiks.style.display = '';
        hints.style.display = '';
        parduotuvė.style.display = '';
        meniu.style.display = 'none';

        išėjimas.style.display = 'none';
        pirkti.style.display = 'none';
        hp = Math.floor(Math.random() * 3);
        qp = Math.floor(Math.random() * 3);
        wp = Math.floor(Math.random() * 3);
        ep = Math.floor(Math.random() * 3);
        rp = Math.floor(Math.random() * 3);
        tp = Math.floor(Math.random() * 3);
        yp = Math.floor(Math.random() * 3);
        up = Math.floor(Math.random() * 3);
        ip = Math.floor(Math.random() * 3);
    }
    document.body.style.background = "#f3f3f3 url('parduotuvėv.png') repeat ";

    parduotuvė.onclick = function() {
        document.body.appendChild(pirkti);
        istrintiLinijas();
        document.body.appendChild(išėjimas);
        išiungiklis.style.display = 'none';
        raudonas.style.display = 'none';
        BABYMODE.style.display = 'none';
        mėlinas.style.display = 'none';
        žalias.style.display = 'none';
        vertiks.style.display = 'none';
        hints.style.display = 'none';
        parduotuvė.style.display = 'none';
        išėjimas.style.display = '';
        pirkti.style.display = '';
    }

    meniu.id = 'meniu'
    meniu.innerHTML = "meniu";

    meniu.onclick = function() {
        parodytikur.style.display = ''
        viršun.style.display = 'none';
        kairėn.style.display = 'none';
        dešinėn.style.display = 'none';
        apačion.style.display = 'none';
        istrintiLinijas()
        pauzė();
        document.body.appendChild(raudonas);
        document.body.appendChild(mėlinas);
        document.body.appendChild(žalias);
        document.body.appendChild(išiungiklis);
        document.body.appendChild(hints);
        išiungiklis.style.display = '';
        raudonas.style.display = '';
        mėlinas.style.display = '';
        BABYMODE.style.display = '';
        žalias.style.display = '';
        vertiks.style.display = '';
        hints.style.display = '';
        meniu.style.display = 'none';

        parduotuvė.style.display = '';
        hp = Math.floor(Math.random() * 3);
        qp = Math.floor(Math.random() * 3);
        wp = Math.floor(Math.random() * 3);
        ep = Math.floor(Math.random() * 3);
        rp = Math.floor(Math.random() * 3);
        tp = Math.floor(Math.random() * 3);
        yp = Math.floor(Math.random() * 3);
        up = Math.floor(Math.random() * 3);
        ip = Math.floor(Math.random() * 3);
        sustabdytiLaikmati()
        padidinkCanvas(manoCanvas, ekranoAukstis, ekranoPlotis);
    }


    const hints = document.createElement("p");
    hints.id = 'hints'




    išiungiklis.id = "išiungti";
    išiungiklis.innerHTML = "Pradėti";
    išiungiklis.onclick = function() {

        kartojimas()

    }
    hints.innerHTML = "Valdyti naudojent w s d a rodykles arba paslėptais mygtukais kurios galite pamatyti paspaudus telefono kontrolės (kiekvinas mygtukas atskyrtas skyrtinga spalva ir jo buvimo vieta nuo kitu rodo judejiomo krypti); Pasiekus 1200 taškų galite valdyti velniūkščius naudojent; e,q, bet tai jums kainuos 10 tašku už pajudinima.";
    parodytikur.onclick = function() {
        document.body.appendChild(kairėnm);
        document.body.appendChild(žemynm);
        document.body.appendChild(aukštynm);
        document.body.appendChild(rodytim1);
        document.body.appendChild(rodytim2);
        document.body.appendChild(rodytim3);
        document.body.appendChild(rodytim4);
        rodytim1.style.display = '';
        rodytim2.style.display = '';
        rodytim3.style.display = '';
        rodytim4.style.display = '';
        kairėnm.style.display = '';
        dešinėnm.style.display = '';
        aukštynm.style.display = '';
        žemynm.style.display = '';
        setTimeout(valyti, 1000);

    }

    function valyti() {
        rodytim1.style.display = 'none';
        rodytim2.style.display = 'none';
        rodytim3.style.display = 'none';
        rodytim4.style.display = 'none';
        kairėnm.style.display = 'none';
        dešinėnm.style.display = 'none';
        aukštynm.style.display = 'none';
        žemynm.style.display = 'none';
    }
    document.body.appendChild(parodytikur);
    išiungiklis.addEventListener('click', () => {
        parodytikur.style.display = 'none'
        document.body.appendChild(kairėn);
        document.body.appendChild(dešinėn);
        document.body.appendChild(viršun);
        document.body.appendChild(apačion);
        istrintiLinijas();
        viršun.style.display = '';
        kairėn.style.display = '';
        dešinėn.style.display = '';
        apačion.style.display = '';
        išiungiklis.style.display = 'none';
        raudonas.style.display = 'none';
        mėlinas.style.display = 'none';
        žalias.style.display = 'none';
        BABYMODE.style.display = 'none';
        vertiks.style.display = 'none';
        hints.style.display = 'none';
        parduotuvė.style.display = 'none';

        meniu.style.display = '';
        pralaimėtojo();
        document.body.appendChild(meniu);
        atnaujintiLaikmati()
        linijos();
        kvadratas = document.getElementById(skin[kaistiskin]);
    });

    document.body.appendChild(raudonas);
    document.body.appendChild(mėlinas);
    document.body.appendChild(žalias);
    document.body.appendChild(išiungiklis);
    document.body.appendChild(hints);
    document.body.appendChild(parduotuvė);
    padidinkCanvas(manoCanvas, ekranoAukstis, ekranoPlotis);
    let kanvasas = document.getElementById("linije");

    padidinkCanvas(kanvasas, ekranoAukstis, ekranoPlotis);

    console.log("Puslapis yra visiškai įkeltas");

    console.log("mano canvas?", manoCanvas);

    var ctx = manoCanvas.getContext("2d");

    ctx.beginPath();
    ctx.stroke();
    ctx.beginPath();
    ctx.stroke();
    //kintamūju priskirinėjimas
    nrekordas = localStorage.getItem('nrekordas');;
    let b = 0;
    let kartai = 0;
    dalys = ekranoAukstis / 9;
    gabalas = ekranoPlotis / 8;
    lol = ekranoAukstis;
    haha = ekranoPlotis;
    puseplocio = ekranoPlotis / 2;
    taškai = 0;
    let a = 0;
    let ksunkiau = 0
    apjudejimogreitis = ekranoPlotis / 400;
    pgalbinisg = ekranoPlotis / 700;
    let aukštis = Math.floor(Math.random() * 7);
    h = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    q = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    w = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    e = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    r = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    t = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    y = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    u = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    i = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    hp = Math.floor(Math.random() * 3);
    qp = Math.floor(Math.random() * 3);
    wp = Math.floor(Math.random() * 3);
    ep = Math.floor(Math.random() * 3);
    rp = Math.floor(Math.random() * 3);
    tp = Math.floor(Math.random() * 3);
    yp = Math.floor(Math.random() * 3);
    up = Math.floor(Math.random() * 3);
    ip = Math.floor(Math.random() * 3);
    pvcoin = Math.floor(Math.random() * ekranoPlotis - gabalas / 2);
    avcoin = Math.floor(Math.random() * 7);
    avcoint = avcoin * dalys
    let sunkiau = -60
    taškas = Math.floor(Math.random() * puseplocio + puseplocio / 2);
    apsunkiau = 0
    let coin2c = -10
    let coin2a = -10
    babygreitis = apjudejimogreitis - pgalbinisg
    greitis = [apjudejimogreitis, pgalbinisg, babygreitis]
        //ciklas


    function duomenys() {
        document.getElementById("taškai").innerHTML = "tavo taškų kiekis : " + taškai + ' rekordas : ' + nrekordas + ' tavo pinigai:' + coin;
        requestAnimationFrame(duomenys)
    }
    duomenys();

    if (coin2s == 0) {
        coin2c = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        coin2a = Math.floor(Math.random() * 7);
    }

    function kartojimas() {
        if (pirkinys1 === 1) {
            ipi = epi = rpi = wpi = upi = qpi = tpi = ypi = hpi = 0
        } else if (pirkinys1 === 0) {
            if (kaistiskin === hp) { hpi = 1 } else { hpi = 0 };
            if (kaistiskin === qp) { qpi = 1 } else { qpi = 0 };
            if (kaistiskin === wp) { wpi = 1 } else { wpi = 0 };
            if (kaistiskin === ep) { epi = 1 } else { epi = 0 };
            if (kaistiskin === rp) { rpi = 1 } else { rpi = 0 };
            if (kaistiskin === tp) { tpi = 1 } else { tpi = 0 };
            if (kaistiskin === yp) { ypi = 1 } else { ypi = 0 };
            if (kaistiskin === up) { upi = 1 } else { upi = 0 };
            if (kaistiskin === ip) { ipi = 1 } else { ipi = 0 };
        }
        taškai += 1;
        a++;
        if (kaistiskin === 3) { ipi = epi = rpi = wpi = upi = qpi = tpi = ypi = hpi = 2 };
        //apskritimu Smegenys

        if (taškai > 1900) { apjudejimogreitis = ekranoPlotis / 250; } else { apjudejimogreitis = ekranoPlotis / 400 }
        if (h > a && kartai === 0) { h -= greitis[hpi] } else { h += 0; };
        if (h < a && kartai === 0) { h += greitis[hpi] } else { h += 0; };
        if (q > a && kartai === 1) { q -= greitis[qpi] } else { q += 0; };
        if (q < a && kartai === 1) { q += greitis[qpi] } else { h += 0; };
        if (w > a && kartai === 2) { w -= greitis[wpi] } else { w += 0; };
        if (w < a && kartai === 2) { w += greitis[wpi] } else { h += 0; };
        if (e > a && kartai === 3) { e -= greitis[epi] } else { e += 0; };
        if (e < a && kartai === 3) { e += greitis[epi] } else { h += 0; };
        if (r > a && kartai === 4) { r -= greitis[rpi] } else { r += 0; };
        if (r < a && kartai === 4) { r += greitis[rpi] } else { h += 0; };
        if (t > a && kartai === 5) { t -= greitis[tpi] } else { t += 0; };
        if (t < a && kartai === 5) { t += greitis[tpi] } else { h += 0; };
        if (i > a && kartai === 6) { i -= greitis[ipi] } else { i += 0; };
        if (i < a && kartai === 6) { i += greitis[ipi] } else { h += 0; };
        if (sunkiau > ekranoPlotis) {
            sunkiau = 0;
            apsunkiau += dalys
            ksunkiau++

            if (apsunkiau > dalys * 6) { apsunkiau = 0, ksunkiau = 0 }
        }
        
        
        
        if ((a < h + gabalas && a + dalys > h && kartai === 0) ||
            (a < q + gabalas && a + dalys > q && kartai === 1) ||
            (a < w + gabalas && a + dalys > w && kartai === 2) ||
            (a < e + gabalas && a + dalys > e && kartai === 3) ||
            (a < r + gabalas && a + dalys > r && kartai === 4) ||
            (a < t + gabalas && a + dalys > t && kartai === 5) ||
            (a < i + gabalas && a + dalys > i && kartai === 6) ||
            (a < y + gabalas && a + dalys > y && kartai === 7) 
        ) {


            pralaimėtojo()
        };
        if (a > apsunkiau - 25 && a < sunkiau + 25 && apsunkiau == dalys * kartai) {

            pralaimėtojo();

        }
        
        if (a < taškas + dalys && a + gabalas > taškas && kartai === aukštis) {
            taškas = Math.floor(Math.random() * puseplocio + puseplocio / 2);
            atnaujintiLaikmati();
            aukštis = Math.floor(Math.random() * 7);
        }
        if (!(a > haha - gabalas && a < haha - gabalas + 1000)) {
            ctx.clearRect(0, 0, ekranoPlotis, ekranoAukstis);

            ctx.drawImage(kvadratas, a, b + 11, gabalas, dalys - 2);
            //pikti apskritimai
            // apskritimu koordinaciu masyvas
            if (taškai > nrekordas) {
                nrekordas = taškai
                let nmasyvas = (nrekordas)
                localStorage.setItem('nrekordas', JSON.stringify(nmasyvas))
            }

            if (a < pvcoin + dalys && a + gabalas > pvcoin && kartai === avcoin) {
                if (kaistiskin > 2) {} else if (kaistiskin < 2) {
                    coin++
                    let piniginė = (coin)
                    pvcoin = Math.floor(Math.random() * puseplocio + puseplocio / 2);
                    avcoin = Math.floor(Math.random() * 7);
                    avcoint = avcoin * dalys
                    localStorage.setItem('coin', JSON.stringify(piniginė));
                }
            }

            // if (a < coin2c - 40 && a > coin2c + 40 && kartai === coin2a) {
            //     coin++
            //     coin++
            //     piniginė = (coin)
            //     coin2c = Math.floor(Math.random() * puseplocio + puseplocio / 2);
            //     coin2a = Math.floor(Math.random() * 7);
            //     avcoint = avcoin * dalys
            //     localStorage.setItem('coin', JSON.stringify(piniginė))
            // };
            ctx.drawImage(pikčiurnos[qp], 100 + q, dalys + 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[hp], 100 + h, 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[wp], 100 + w, dalys * 2 + 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[ep], 100 + e, dalys * 3 + 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[rp], 100 + r, dalys * 4 + 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[tp], 100 + t, dalys * 5 + 11, dalys, dalys - 2);
            ctx.drawImage(pikčiurnos[ip], 100 + i, dalys * 6 + 11, dalys, dalys - 2);

            ctx.drawImage(llaikas, taškas, dalys * aukštis + 11, dalys, dalys - 2);
            ctx.drawImage(vcoin, pvcoin, avcoint + 10, dalys, dalys);
            if (coin2s === 0) { ctx.drawImage(coin2, 10 + coin2c, dalys * coin2a + 11, dalys, dalys - 2); }

            if (taškai > 700) {
                sunkiau += apjudejimogreitis
                ctx.drawImage(ilgas, sunkiau - ekranoPlotis, apsunkiau + 11, ekranoPlotis, dalys - 2);


            }
            //jei išeinam iš dešinio krašto gryštam i kairi krašta
        } else if (!(a > ekranoPlotis && a < ekranoPlotis + 100)) {
            a = 0;
            b = b + dalys;
            kartai += 1;
        }


        //jei kubelis apačioi gryšta viršun
        if (!(b < lol - dalys)) {
            b = 0;
            kartai = 0;
        }
        //jei kubelis viršui tada nukeliam apačion
        if (!(b > -1)) {
            b = lol - dalys * 3;
            kartai = 6
        }
        if (!(a > -1)) {
            a = haha - gabalas * 2;
            b = b - dalys;
            kartai -= 1
        }
        if (kartai > 6) {
            kartai = 0;
            b = 0;
        }
        if (taškai < 0) { pralaimėtojo() };


        labas = requestAnimationFrame(kartojimas);


    }

    function pauzė() {
        cancelAnimationFrame(labas);
    }
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "s":
            case "S":
            case "ArrowDown":
                b += dalys;
                kartai += 1;
                break;
            case "w":
            case "W":
            case "ArrowUp":
                b -= dalys;
                kartai -= 1;
                break;
            case "d":
            case "D":
            case "ArrowRight":
                a += 30;
                break;
            case "a":
            case "A":
            case "ArrowLeft":
                a -= 30;
                break;

            default:
                break;
        }
        console.log();
    });

    document.addEventListener("keydown", (event) => {
        if (taškai > 1200) {
            switch (event.key) {
                case "e":
                case "E":
                    h += 5
                    q += 5
                    w += 5
                    e += 5
                    r += 5
                    t += 5
                    y += 5
                    u += 5
                    i += 5
                    taškai -= 5
                    break;
                case "Q":
                case "q":
                    h -= 5
                    q -= 5
                    w -= 5
                    e -= 5
                    r -= 5
                    t -= 5
                    y -= 5
                    u -= 5
                    i -= 5
                    taškai -= 5
                    break;
                default:
                    break;
            }
        }
        console.log();
    })


    function linijos() {
        let canvas = document.getElementById("linije");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        x += dalys;
        ctx.moveTo(0, x);
        ctx.lineTo(8000, x);
        ctx.stroke();

        if (x < 7 * dalys) {

            requestAnimationFrame(linijos);
        } else {
            x = 10;
        }
    }



    function istrintiLinijas() {
        let canvas = document.getElementById("linije");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    let laikmatiSustabdytas = false;
    let start_time = Date.now();

    function valdytiLaikmati() {
        let likęs_laikas = Math.max(0, 30000 - (Date.now() - start_time));
        let sekundės = Math.floor(likęs_laikas / 1000);
        document.getElementById("timer").textContent = "Liko " + sekundės + " sekundžių";

        if (likęs_laikas === 0) {
            // clearInterval(laikmatiIntervalas);
            pralaimėtojo();

            atnaujintiLaikmati();
        }
    }

    let laikmatiIntervalas = setInterval(function() {
        if (!laikmatiSustabdytas) {
            valdytiLaikmati();
        }
    }, 1000);

    function sustabdytiLaikmati() {
        laikmatiSustabdytas = true;
    }

    function atnaujintiLaikmati() {
        start_time = Date.now();
        laikmatiSustabdytas = false;
    }
    sustabdytiLaikmati();

    function pralaimėtojo() {

        (a = 0),
        (b = 0),
        (kartai = 0),
        (taškai = 0),
        (ksunkiau = 0),
        (sunkiau = -60),
        (apsunkiau = 0),
        (h = Math.floor(Math.random() * puseplocio + puseplocio / 2));
        q = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        w = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        e = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        r = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        t = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        y = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        u = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        i = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        taškas = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        aukštis = Math.floor(Math.random() * 7);
        pvcoin = Math.floor(Math.random() * puseplocio + puseplocio / 2);
        avcoin = Math.floor(Math.random() * 7);
        avcoint = avcoin * dalys
        atnaujintiLaikmati();
    }

    if (a > sunkiau - 25 && a < sunkiau + 25 && ksunkiau === kartai) {
        alert - ("tavo taškų kiekis yra " + taškai),
            pralaimėtojo()
    };


});

function nupieskApksritima(ctx, aukstis, eilutesNr) {
    ctx.beginPath();
    ctx.arc(100 + aukstis, dalys * eilutesNr + dalys / 2 + 10, dalys / 2, 0, 2 * Math.PI);
    ctx.stroke();
}

//padidinu canvas
function padidinkCanvas(canvasElementas, aukstis, plotis) {
    canvasElementas.height = aukstis;
    canvasElementas.width = plotis;
}
let x = 10; //padarau linijes
window.addEventListener("load", () => {

    disableBodyScroll({ savePosition: true });
});
//funkcije kuri išiunge scrolinima
{
    if (document.readyState === "complete") {
        document.body.style.position = "";
        document.body.style.overflowY = "";

        if (document.body.style.marginTop) {
            const scrollTop = -parseInt(document.body.style.marginTop, 10);
            document.body.style.marginTop = "";
            window.scrollTo(window.pageXOffset, scrollTop);
        }
    } else {
        //window.addEventListener('load', enableBodyScroll);
    }
}

function disableBodyScroll({ savePosition = false } = {}) {
    if (document.readyState === "complete") {
        if (document.body.scrollHeight > window.innerHeight) {
            if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
            document.body.style.position = "fixed";
            document.body.style.overflowY = "scroll";
        }
    } else {
        window.addEventListener("load", () => disableBodyScroll({ savePosition }));
    }
}