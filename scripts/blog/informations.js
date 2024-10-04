document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML; 


let element = document.getElementsByClassName("text").item(0).textContent;

let count = Math.round(element.split(" ").filter(function(n) {return n != ""}).length / 200);

if (count >= 1) {
    var text = `${count} dk`
}

else {
    var text = `1 dk'dan az`
}

for (let read_time of document.getElementsByClassName("read_time")) {
    read_time.innerText = `Okuma süresi: ${text}`;
}


let position = 0;

let clicked = false;

function set_informations(expand) {
    if (expand) {
        document.getElementById("informations").style.display = "";
        document.getElementById("informations_button").innerText = "Küçült";

        if (screen.width > 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(100px + 5vh) 25vw";
        }
        
        else if (screen.width >= 320 && screen.width <= 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(150px + 5vh) 5vw";
        }
    }

    else {
        document.getElementById("informations").style.display = "none";
        document.getElementById("informations_button").innerText = "Genişlet";

        if (screen.width > 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(50px + 5vh) 25vw";
        }
        
        else if (screen.width >= 320 && screen.width <= 480) {
            document.getElementsByClassName("content").item(0).style.margin = "calc(50px + 5vh) 5vw";
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
    
    if (position > 50 && !clicked) {
        set_informations(false)
    }

    else if (!clicked) {
        set_informations(true)
    }
})