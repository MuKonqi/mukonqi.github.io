function calc(url, post) {
    ajax(url).then(function(data) {
        const parent = document.createElement("html"); parent.innerHTML = data;

        const element = parent.getElementsByClassName("text").item(0).textContent;

        const count = Math.round(element.split(" ").filter(function(n) {return n != ""}).length / 200);

        const text = count >= 1 ? `${count} dk` : "1 dk'dan az"

        let description = parent.querySelector('meta[name="description"]').content;

        post.getElementsByClassName("read_time").item(0).innerText = `Okuma süresi: ${text}`;
        post.getElementsByClassName("description").item(0).innerText = description;
    });
}