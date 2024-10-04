function show_spoiler() {
    if (document.getElementById('spoiler').style.filter === "blur(25px)") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('spoiler_button').style.backgroundColor = "#2f2f2f";
        }

        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.getElementById('spoiler_button').style.backgroundColor = "#a9a9a9";
        }

        document.getElementById('spoiler_button').style.transform = "scale(1.05)";
        document.getElementById('spoiler_button').innerHTML = "Sürprizbozan içerik mevcut.<br>Sürprizbozanı gizlemek için buraya tıklayın.";
        document.getElementById('spoiler').style.filter = "blur(0px)";
    }

    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('spoiler_button').style.backgroundColor = "#a9a9a9";
        }

        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.getElementById('spoiler_button').style.backgroundColor = "#2f2f2f";
        }

        document.getElementById('spoiler_button').style.transform = "scale(1.000)";
        document.getElementById('spoiler_button').innerHTML = "Sürprizbozan içerik mevcut.<br>Sürprizbozanı göstermek için buraya tıklayın.";
        document.getElementById('spoiler').style.filter = "blur(25px)";
    } 
}