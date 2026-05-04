function calc(url, post) {
    ajax(url).then(function(data) {
        let parent = document.createElement("html"); parent.innerHTML = data;

        let element = parent.getElementsByClassName("text").item(0).textContent;

        let count = Math.round(element.split(" ").filter(function(n) {return n != ""}).length / 200);

        if (count >= 1) {
            var text = `${count} dk`;
        }

        else {
            var text = `1 dk'dan az`;
        }

        let description = parent.querySelector('meta[name="description"]').content;

        post.getElementsByClassName("read_time").item(0).innerText = `Okuma süresi: ${text}`;
        post.getElementsByClassName("description").item(0).innerText = description;
    });
}