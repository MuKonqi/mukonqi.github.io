const year = new Date().getFullYear();

if (year < 2026) {
    year = 2026;
}

document.getElementById("copyright").textContent = year;


ajax("/LICENSE.txt").then(function(data) {document.getElementById('license').textContent = data;});

function showLicense() {
    if (document.getElementById('license').style.display === "none") {
        document.getElementById('license').style.display = "block";
    }

    else {
        document.getElementById('license').style.display = "none";
    }
}