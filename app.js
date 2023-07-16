const timer = document.querySelector('#timer');
const btns = document.querySelectorAll('.btns button');

let ms = 0;
let s = 0;
let m = 0;
let h = 0;

let displayMS;
let displayS;
let displayM;
let displayH;

let counter = null;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(button => {
            button.classList.remove("active");
        })

        e.target.classList.add("active");

        if(btn.textContent === 'Start') {
            counter = setInterval(() => {
                 startTimer();
            }, 0.1)
        } else if(btn.textContent === 'Stop') {
            clearInterval(counter);
        } else {
             clearInterval(counter);
             ms = 0;
             s = 0;
             m = 0;
             h = 0;
            timer.textContent = '00:00:00:00';
        }
    })
})

function startTimer() {
    ms++;
    if(ms === 100) {
       ms = 0;
       s++
    }
    if(s === 60) {
       s = 0;
       m++
    }
    if(m === 60) {
       m = 0;
       h++
    }

    if(ms < 10) {
       displayMS = `0${ms}`
    } else {
       displayMS = `${ms}`
    }
    if(s < 10) {
       displayS = `0${s}`
    } else {
       displayS = `${s}`
    }
    if(m < 10) {
       displayM = `0${m}`
    } else {
       displayM = `${m}`
    }
    if(h < 10) {
       displayH = `0${h}`
    } else {
       displayH = `${h}`
    }

    timer.textContent = `${displayH}:${displayM}:${displayS}:${displayMS}`;

    if(h === 24) {
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        clearInterval(counter);
            timer.textContent = '00:00:00:00';
    }
}