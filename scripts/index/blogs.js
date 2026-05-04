ajax("/blog/index.html").then(function(data) {
    var parent = document.createElement("html"); parent.innerHTML = data;

    const posts = parent.getElementsByClassName("post");

    for (let post of posts) {
        let href = post.getElementsByTagName("a").item(0).getAttribute("href");

        let name = post.getElementsByTagName("a").item(0).textContent;
        
        let container = document.createElement("div");
        container.className = "link-box";

        let source = document.createElement("div");
        source.className = "source";

        let target = document.createElement("a");
        target.setAttribute("href", href);
        target.innerHTML = `<div class='target link'>${name}</div>`;

        container.appendChild(source)
        container.appendChild(target)

        ajax(target).then(function(data) {
            let child = document.createElement("html"); child.innerHTML = data;
            let description = child.querySelector('meta[name="description"]').content;
            source.innerHTML = description;
        });

        let last = document.getElementById("blog").getElementsByClassName("link-box").item(
            document.getElementById("blog").getElementsByClassName("link-box").length - 1
        )

        last.after(container)
    }
})