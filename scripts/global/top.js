var language = document.currentScript.dataset.language;

let clicks = 0;

function go_top() {
    if (window.scrollY === 0) {
        if (clicks === 1) {
            document.location.href = `/other/already-on-top/${language}.html`
        }
        
        clicks = 1;
    }

    else {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
}

function come_back() {
    history.back();
}

function warning() {
    if (clicks === 1) {
        document.documentElement.style.backgroundImage = 'url("/assets/other/Ağlayan Konqi.gif")';
        document.body.style.backgroundColor = 'transparent';
        document.getElementsByClassName("footer").item(0).style.backgroundColor = 'transparent';
        document.getElementsByClassName("space").item(0).style.display = "none";
        document.getElementById("crying").style.display = "none";
        document.getElementsByClassName("scroller").item(0).style.display = "none";
    }
    
    clicks = 1;
}