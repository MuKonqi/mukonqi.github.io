var year = new Date().getFullYear();

if (year < 2025) {
    year = 2025;
}

document.getElementById("copyright").textContent = year;


$.ajax({
    url: "/LICENSE.txt",
    dataType: "text",
    success: function(data) {
        document.getElementById('license').textContent = data;
    }});


function show_license() {
    if (document.getElementById('license').style.display === "none") {
        document.getElementById('license').style.display = "block";
    }

    else {
        document.getElementById('license').style.display = "none";
    }
}