ajax("/blog/index.html").then(function(data) {
    const parent = document.createElement("html"); parent.innerHTML = data;

    const posts = parent.getElementsByClassName("post");

    for (let post of posts) {
        const href = post.getElementsByTagName("a").item(0).getAttribute("href");

        const name = post.getElementsByTagName("a").item(0).textContent;
        
        const container = document.createElement("div");
        container.className = "link_box";

        const source = document.createElement("div");
        source.className = "source";

        const target = document.createElement("a");
        target.setAttribute("href", href);
        target.innerHTML = `<div class='target link'>${name}</div>`;

        container.appendChild(source)
        container.appendChild(target)

        ajax(target).then(function(data) {
            const child = document.createElement("html"); child.innerHTML = data;
            const description = child.querySelector('meta[name="description"]').content;
            source.innerHTML = description;
        });

        const last = document.getElementById("blog").getElementsByClassName("link_box").item(
            document.getElementById("blog").getElementsByClassName("link_box").length - 1
        )

        last.after(container)
    }
})