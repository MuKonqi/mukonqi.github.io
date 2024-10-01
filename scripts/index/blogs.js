var language = document.currentScript.dataset.language;

$.ajax({
    url: `/blog/index.html`,
    dataType: "html",
    success: function(data) {
        var parent = document.createElement("html"); parent.innerHTML = data;

        const posts = parent.getElementsByClassName("post");

        for (let post of posts) {
            var href = post.getElementsByTagName("a").item(0).getAttribute("href");

            var name = post.getElementsByTagName("a").item(0).textContent;
            
            var container = document.createElement("div");
            container.className = "links";

            var description = document.createElement("div");
            description.className = "description";
            description.innerHTML = `<strong>${name}</strong>`

            var link = document.createElement("a");
            link.setAttribute("href", href);
            if (language === "english") {
                link.innerHTML = "<div class='link'>Turkish</div>"
            }

            else if (language === "turkish") {
                link.innerHTML = "<div class='link'>Türkçe</div>"
            }

            container.appendChild(description)
            container.appendChild(link)


            var last = document.getElementById("blog").getElementsByClassName("links").item(
                document.getElementById("blog").getElementsByClassName("links").length - 1
            )

            last.after(container)
        }
    }});