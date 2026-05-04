var language = document.currentScript.dataset.language;

const birth = new Date("2008-12-04"); // OPSEC

const today = new Date();

var difference = Math.floor((today.getTime() - birth.getTime()) / 1000 / (60 * 60 * 24) / 365.25);

if (difference < 17) {
    difference = 17;
}

if (language === "english") {
    document.getElementById("age").textContent = `I finished my ${difference}th year, now I'm finishing my ${difference + 1}th year in the world.`;
}

else if (language === "turkish") {
    document.getElementById("age").textContent = `Dünyada ${difference}. yılımı bitirdim, ${difference + 1}. yılımı bitiriyorum.`;
}