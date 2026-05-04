var root = document.currentScript.dataset.root;

const pages = [root];

function update_document() {
    let page = pages[pages.length - 1]

    if (page === "index") {
        document.getElementsByClassName("index").item(0).style.filter = "blur(0px)";
        document.getElementsByClassName("projects").item(0).style.filter = "blur(5px)";
        document.getElementsByClassName("setup").item(0).style.filter = "blur(5px)";

        document.title = "MuKonqi: Hakkımda"
    }

    else if (page === "projects") {
        document.getElementsByClassName("index").item(0).style.filter = "blur(5px)";
        document.getElementsByClassName("projects").item(0).style.filter = "blur(0px)";
        document.getElementsByClassName("setup").item(0).style.filter = "blur(5px)";

        document.title = "MuKonqi: Projeler"
    }

    else if (page === "setup") {
        document.getElementsByClassName("index").item(0).style.filter = "blur(5px)";
        document.getElementsByClassName("projects").item(0).style.filter = "blur(5px)";
        document.getElementsByClassName("setup").item(0).style.filter = "blur(0px)";

        document.title = "MuKonqi: Kurulum"
    }
}

function show_page(page) {
    ajax(`/personal/${page}.html`).then(function(data) {
        let parent = document.createElement("html"); parent.innerHTML = data;

        let content = parent.getElementsByClassName(page).item(0).innerHTML;

        if (document.getElementsByClassName(page).item(0).style.display === "none") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.getElementById(`${page}_button`).style.backgroundColor = "#a9a9a9";
            }

            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                document.getElementById(`${page}_button`).style.backgroundColor = "#2f2f2f";
            }

            pages.push(page);

            document.getElementById(`${page}_button`).style.transform = "scale(1.25)";
            document.getElementsByClassName(page).item(0).style.display = "block";
            document.getElementsByClassName(page).item(0).innerHTML = content;
        }

        else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.getElementById(`${page}_button`).style.backgroundColor = "#2f2f2f";
            }

            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                document.getElementById(`${page}_button`).style.backgroundColor = "#a9a9a9";
            }

            pages.splice(pages.indexOf(page), 1)

            document.getElementById(`${page}_button`).style.transform = "scale(1.00)";
            document.getElementsByClassName(page).item(0).style.display = "none";
        }

        update_document();
    })};