document, addEventListener('DOMContentLoaded', () => {
    let mode = 1;
    let ta = document.getElementById('ta');
    let sv = document.getElementById('sv');
    let kr = document.getElementById('kr');
    let at = document.getElementById('at');
    ta.addEventListener("click", function () {
        mode = 0
        perdazyk()
    })
    sv.addEventListener("click", function () {
        mode = 1
        perdazyk()
    })
    kr.addEventListener("click", function () {
        mode = 2
        perdazyk()
    })
    at.addEventListener("click", function () {
        mode = 3
        perdazyk()
    })
    function perdazyk() {
        if (mode == 0) {
            divSpalva('white', 'rgba(44, 44, 46, 0.459)')
        }
        else if (mode == 1) {
            divSpalva('black', 'rgba(228, 228, 245, 0.459)')

        }
        else if (mode == 2) {
            divSpalva('darkred', 'red')
         }
        else if (mode == 3) {
            divSpalva(randomColor(), randomColor())
        }

    }
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.459)`;
    }
    function divSpalva(text, backgound) {
        document.querySelectorAll('div').forEach(function (div) {
            div.style.backgroundColor = backgound;
            div.style.color = text;
        });
        document.querySelectorAll('footer').forEach(function (fotter) {
            fotter.style.backgroundColor = backgound;
            fotter.style.color = text;
        });
        document.querySelectorAll('body').forEach(function (body) {
            body.style.backgroundColor = backgound;
            body.style.color = text;
        });
        if (mode == 1) {

            document.querySelectorAll('a').forEach(function (a) {
                a.style.backgroundColor = 'rgba(41, 41, 179, 0.459)';
                a.style.color = 'rgba(41, 41, 179, 0.459)';
            });

        }
        else {


            document.querySelectorAll('a').forEach(function (a) {
                a.style.backgroundColor = backgound;
                a.style.color = text;
            });
        }

    }

})