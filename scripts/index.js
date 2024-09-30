var language = navigator.language || navigator.browserLanguage || navigator.languages;


if (language.indexOf('tr') > -1) {
    switch_language("turkish");
}

else {
    switch_language("english");
}


function switch_language(language) {
    if (document.getElementById('english').style.display === "none" | language === "english") {
        document.getElementById('turkish').style.display = "none";
        document.getElementById('english').style.display = "block";
        document.getElementById('footer').getElementsByClassName('button').item(0).textContent = "Switch to Turkish";
        document.getElementById('footer').getElementsByTagName('p').item(0).innerHTML = '&copy; 2024 MuKonqi (Muhammed S.)<br>Licensed with <strong id="license_button" onclick="show_license()">MIT License</strong>';
    }

    else if (document.getElementById('turkish').style.display === "none" | language === "turkish") {
        document.getElementById('english').style.display = "none";
        document.getElementById('turkish').style.display = "block";       
        document.getElementById('footer').getElementsByClassName('button').item(0).textContent = "İngilizceye Geç";
        document.getElementById('footer').getElementsByTagName('p').item(0).innerHTML = '&copy; 2024 MuKonqi (Muhammed S.)<br><strong id="license_button" onclick="show_license()">MIT Lisansı</strong> ile Lisanslandı';
    }
}