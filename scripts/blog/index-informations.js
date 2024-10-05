const posts = document.getElementsByClassName("post")


document.getElementById("informations_button").innerHTML = `Blog Sayısı: ${posts.length}`;

document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML; 


for (let post of posts) {
    var href = post.getElementsByTagName("a").item(0).getAttribute("href");

    $.ajax({
        url: href,
        dataType: "html",
        success: function(data) {
            var parent = document.createElement("html"); parent.innerHTML = data;
    
            var element = parent.getElementsByClassName("text").item(0).textContent;

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