const pages = document.getElementById("personal").getElementsByClassName("link_box");

for (let box of pages) {
    ajax(box.getElementsByTagName("a").item(0).href).then(function(data) {
        const child = document.createElement("html"); child.innerHTML = data;
        const description = child.querySelector('meta[name="description"]').content;
        box.getElementsByClassName("source").item(0).textContent = description;
    });
}