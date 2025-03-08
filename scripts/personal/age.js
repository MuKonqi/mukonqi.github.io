var language = document.currentScript.dataset.language;

const birth = new Date("2008-12-04");

const today = new Date();

const difference = Math.round((today.getTime() - birth.getTime()) / 1000 / (60 * 60 * 24) / 365.25);

if (language === "english") {
    document.getElementById("age").textContent = `I finished my ${difference}th year, I'm finishing my ${difference + 1}th year in the world at the moment.`;
}

else if (language === "turkish") {
    document.getElementById("age").textContent = `Dünyada ${difference}. yılımı bitirdim, ${difference + 1}. yılımı bitiriyorum.`;
}