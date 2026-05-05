const language = document.currentScript.dataset.language;

let clicks = 0;

if (document.currentScript.dataset.bottom) {
    bottom(86400)
}

function come_back() {
    history.back();
}

function bottom(time) {
    document.cookie = `muk_bottom=true; max-age=${time}; samesite=None; path=/; secure=None`
}

function bottom_2() {
    if (clicks === 1) {
        bottom(2592000);

        document.documentElement.style.backgroundImage = 'url("/assets/other/Ağlayan Konqi.gif")';
        document.body.style.backgroundColor = 'transparent';
        document.getElementsByClassName("footer").item(0).style.backgroundColor = 'transparent';
        document.getElementsByClassName("space").item(0).style.display = "none";
        document.getElementById("crying").style.display = "none";
        document.getElementsByClassName("scroller").item(0).style.display = "none";
    }
    
    clicks = 1;
}

function go_top() {
    const not_bottom = document.cookie.split("; ").find((row) => row.startsWith("muk_bottom="))?.split("=")[1] === undefined;

    if (window.scrollY === not_bottom ? 0 : document.body.scrollHeight) {
        if (clicks === 1) {
            document.location.href = `/other/already-on-top/${language}.html`
        }
        
        clicks = 1;
    }

    if ((not_bottom && window.scrollY !== 0) || (!not_bottom && window.scrollY !== document.body.scrollHeight)) {
        window.scrollTo({top: not_bottom ? 0 : document.body.scrollHeight, behavior: "smooth"});
    }
}