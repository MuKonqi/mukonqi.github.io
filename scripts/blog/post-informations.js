document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML; 

let element = document.getElementsByClassName("text").item(0).textContent;

let count = Math.round(element.split(" ").filter(function(n) {return n != ""}).length / 200);

if (count >= 1) {
    var text = `${count} dk`
}

else {
    var text = `1 dk'dan az`
}

document.getElementsByClassName("read_time").item(0).innerText = `Okuma süresi: ${text}`;


let position = 0;

let clicked = false;

function set_informations(expand) {
    if (expand) {
        document.getElementById("informations").style.display = "";
        document.getElementById("informations_button").innerText = "Küçült";

        if (screen.width > 480) {
            document.getElementsByClassName("header").item(0).style.height = "95px";
            document.getElementsByClassName("content").item(0).style.margin = "calc(100px + 5vh) 25vw 5vh";
        }
        
        else if (screen.width >= 320 && screen.width <= 480) {
            document.getElementsByClassName("header").item(0).style.height = "145px";
            document.getElementsByClassName("content").item(0).style.margin = "calc(150px + 5vh) 5vw 5vh";
        }
    }

    else {
        document.getElementById("informations").style.display = "none";
        document.getElementById("informations_button").innerText = "Büyüt";

        document.getElementsByClassName("header").item(0).style.height = "45px";

        if (screen.width > 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(50px + 5vh) 25vw 5vh";
        }
        
        else if (screen.width >= 320 && screen.width <= 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(50px + 5vh) 5vw 5vh";
        }
    }
}

function show_informations() {
    if (document.getElementById("informations").style.display != "none") {
        set_informations(false)
    }

    else {
        set_informations(true)
    }

    clicked = true;
}

document.addEventListener("scroll", (event) => {
    position = window.scrollY;
    
    if (position > 0 && !clicked) {
        set_informations(false)
    }

    else if (!clicked) {
        set_informations(true)
    }
})

window.onresize = function() {
    if (document.getElementsByClassName("informations").item(0).style.display === "none") {
        set_informations(false);    
    }

    else {
        set_informations(true);
    }
}


const delegates = [];


$.ajax({
    url: `/blog/index.html`,
    dataType: "html",
    success: function(data) {
        var parent = document.createElement("html"); parent.innerHTML = data;

        const posts = parent.getElementsByClassName("post");

        for (let post of posts) {
            if (post.getElementsByClassName("name").item(0).textContent === document.getElementById("title").textContent) {
                delegates.push(post);
            }

            else {
                var href = post.getElementsByTagName("a").item(0).getAttribute("href");

                $.ajax({
                    url: href,
                    dataType: "html",
                    success: function(data) {
                        var parent_ = document.createElement("html"); parent_.innerHTML = data;
                
                        var element = parent_.getElementsByClassName("text").item(0).textContent;
            
                        var count = Math.round(element.split(" ").filter(function(n) {return n != ""}).length / 200);
            
                        if (count >= 1) {
                            var text = `${count} dk`
                        }
            
                        else {
                            var text = `1 dk'dan az`
                        }
            
                        post.getElementsByClassName("read_time").item(0).innerText = `Okuma süresi: ${text}`;
                    }});
            }
        }

        for (let delegate of delegates) {
            delegate.remove();
        }

        parent.getElementsByClassName("title2").item(0).id = "";
        parent.getElementsByClassName("title2").item(0).className = "title";
        parent.getElementsByClassName("title").item(1).innerHTML = "<h1>Diğer Bloglar</h1>";

        document.getElementsByClassName("content").item(0).after(parent.getElementsByClassName("blogs").item(0))

    }});