var pages = document.getElementById("personal").getElementsByClassName("link-box");

for (let box of pages) {
    ajax(box.getElementsByTagName("a").item(0).href).then(function(data) {
        let child = document.createElement("html"); child.innerHTML = data;
        let description = child.querySelector('meta[name="description"]').content;
        box.getElementsByClassName("source").item(0).textContent = description;
    });
}