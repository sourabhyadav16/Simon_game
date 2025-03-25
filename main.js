let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    btnflash(randbtn);
}

function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        reset();
    }
}

function btnpress() {
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}