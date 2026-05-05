const language = document.currentScript.dataset.language;

const parameters = new URLSearchParams(window.location.search);

if (parameters.has("404")) {
    if (parameters.get("404") === "true") {
        document.title = "404 | mukonqi.github.io"; 

        document.getElementById("header").innerHTML = '<a href="/404.html"><strong>404 | Mu</strong><img src="/favicon.ico" alt="Konqi"></a>';

        const description = document.getElementById("description");

        description.style.color = "red";
        if (language === "english") {
            description.innerHTML = "Whoops. We couldn't find the page you wanted.<br>So now you're at the beginning of everything for this personal space.";

            document.getElementById("switcher").setAttribute("href", "/index/turkish.html?404=true");
        }

        else if (language === "turkish") {
            description.innerHTML = "Hay aksi. İstediğiniz sayfayı bulamadık.<br>Bundan dolayı şimdi bu kişisel alan için her şeyin başlangıcındasınız.";

            document.getElementById("switcher").setAttribute("href", "/index/english.html?404=true");
        }
    }
}