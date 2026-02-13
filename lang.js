const LANG = {

tr: {

plan: "Günlük Plan",
notes: "Notlarım",
about: "Hakkında",
settings: "Ayarlar",

preset_default: "Varsayılan",
preset_deep: "Derin Deniz",
preset_terminal: "Terminal",
preset_paper: "Saman Kağıdı",

dark_mode: "Karanlık",
light_mode: "Aydınlık"

},

en: {

plan: "Daily Plan",
notes: "Notes",
about: "About",
settings: "Settings",

preset_default: "Default",
preset_deep: "Deep Ocean",
preset_terminal: "Terminal",
preset_paper: "Paper",

dark_mode: "Dark",
light_mode: "Light"

}

};



function dilSet(lang){

localStorage.setItem("lang", lang);

document.querySelectorAll("[data-lang]").forEach(el=>{
    const key = el.getAttribute("data-lang");
    el.innerText = LANG[lang][key];
});

}



// Sayfa açılışında dili yükle
document.addEventListener("DOMContentLoaded", () => {

const saved = localStorage.getItem("lang") || "tr";
dilSet(saved);

});
