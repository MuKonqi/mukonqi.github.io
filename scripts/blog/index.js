const posts = document.getElementsByClassName("post")

document.getElementById("informations_button").innerHTML = `Blog Sayısı: ${posts.length}`;

document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML; 


for (let post of posts) {
    const url = post.getElementsByTagName("a").item(0).getAttribute("href");

    calc(url, post)
}