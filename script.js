const music = document.getElementById("music");
const openSound = document.getElementById("openSound");

function startGame() {
    music.play();
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
}

function wrong() {
    document.getElementById("game-msg").innerText = "Oops! Try again 💔";
}

function win() {
    openSound.play();
    document.getElementById("game").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");

    startFireworks();
    releaseBalloons();
}


/* ألعاب نارية */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const r = Math.random() * 3 + 2;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
        ctx.fill();
    }, 100);
}
const fireSound = document.getElementById("fireSound");
const sky = document.getElementById("sky");

/* ألعاب نارية مع صوت */
function startFireworks() {
    fireSound.play();

    setInterval(() => {
        fireSound.currentTime = 0;
        fireSound.play();

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const r = Math.random() * 4 + 2;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
        ctx.fill();
    }, 700);
}

