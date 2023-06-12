let audioMyth = "AO AO";
let audioLang = "english/"
document.onload = function () {
    switchNavbarLang();
}

main();

function getLanguage() {
    return localStorage.getItem("language") != null ? localStorage.getItem("language") : window.navigator.language;
}
function addLocalStorage(value) {
    // delete all local storage
    localStorage.clear();
    localStorage.setItem("language", value);
    main();
    switchNavbarLang();
}

function tauKerana() {
    audioMyth = "TAU Y KERANA";
    switchMythLang(0);
}
function tejuJagua() {
    audioMyth = "TEJU JAGUA";
    switchMythLang(1);
}
function mboiTui() {
    audioMyth = "MBÓI TU_I";
    switchMythLang(2);
}
function moniai() {
    audioMyth = "MONIAI";
    switchMythLang(3);
}
function jasyJatere() {
    audioMyth = "jasyjatere";
    switchMythLang(4);
}
function kurupi() {
    audioMyth = "KURUPI";
    switchMythLang(5);
}
function aoAo() {
    audioMyth = "AO AO";
    switchMythLang(6);
}
function luison() {
    audioMyth = "LUISON";
    switchMythLang(7);
}
function switchMythLang(myth) {
    const lang = getLangCode();
    switch (lang) {
        case "es":
            hideAudio()
            document.getElementById("spanishAudio").style.display = "block";
            document.getElementById("title").innerHTML = es.mitos[myth].title;
            document.getElementById("information").innerHTML = es.mitos[myth].information;
            break;
        case "en":
            hideAudio()
            document.getElementById("englishAudio").style.display = "block";
            document.getElementById("title").innerHTML = en.mitos[myth].title;
            document.getElementById("information").innerHTML = en.mitos[myth].information;
            break;
        case "gn":
            hideAudio()
            document.getElementById("guaraniAudio").style.display = "block";
            document.getElementById("title").innerHTML = gu.mitos[myth].title;
            document.getElementById("information").innerHTML = gu.mitos[myth].information;
            break;
        case "pt":
            hideAudio()
            document.getElementById("portugueseAudio").style.display = "block";
            document.getElementById("title").innerHTML = po.mitos[myth].title;
            document.getElementById("information").innerHTML = po.mitos[myth].information;
            break;
        default:
            hideAudio()
            document.getElementById("englishAudio").style.display = "block";
            document.getElementById("title").innerHTML = en.mitos[myth].title;
            document.getElementById("information").innerHTML = en.mitos[myth].information;
            break;
    }
}

function hideAudio() {
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.getElementById("spanishAudio").style.display = "none";
    document.getElementById("englishAudio").style.display = "none";
    document.getElementById("guaraniAudio").style.display = "none";
    document.getElementById("portugueseAudio").style.display = "none";
}
function switchIndexLang() {
    const lang = getLangCode();
    switch (lang) {
        case "es":
            setIndexHtml(es);
            break;
        case "en":
            setIndexHtml(en);
            break;
        case "gn":
            setIndexHtml(gu);
            break;
        case "pt":
            setIndexHtml(po);
            break;
        default:
            setIndexHtml(en);
            break;
    }
}
function switchNavbarLang() {
    const lang = getLangCode();
    switch (lang) {
        case "es":
            setNavbarLang(es);
            break;
        case "en":
            setNavbarLang(en);
            break;
        case "gn":
            setNavbarLang(gu);
            break;
        case "pt":
            setNavbarLang(po);
            break;
        default:
            setNavbarLang(en);
            break;
    }
}


function setIndexHtml(lang) {
    document.getElementById("title").innerHTML = lang.index.title;
    document.getElementById("subtitle").innerHTML = lang.index.subtitle;
    document.getElementById("activitiesTitle").innerHTML = lang.index.activitiesTitle;
    document.getElementById("activitiesSubtitle").innerHTML = lang.index.activitiesSubtitle;
    document.getElementById("activitiesFirts").innerHTML = lang.index.activitiesFirts;
    document.getElementById("activitiesFirtsDescription").innerHTML = lang.index.activitiesFirtsDescription;
    document.getElementById("activitiesSecond").innerHTML = lang.index.activitiesSecond;
    document.getElementById("activitiesSecondDescription").innerHTML = lang.index.activitiesSecondDescription;
    document.getElementById("testimonialText").innerHTML = lang.index.testimonialText;
    document.getElementById("footerTitle").innerHTML = lang.index.footerTitle;
    document.getElementById("view1").innerHTML = lang.index.view1;
    document.getElementById("view2").innerHTML = lang.index.view2;
    document.getElementById("view3").innerHTML = lang.index.view3;
    document.getElementById("view4").innerHTML = lang.index.view4;
    document.getElementById("view5").innerHTML = lang.index.view5;
    document.getElementById("view6").innerHTML = lang.index.view6;
    document.getElementById("view7").innerHTML = lang.index.view7;
    document.getElementById("view8").innerHTML = lang.index.view8;
    document.getElementById("view9").innerHTML = lang.index.view9;
}
function setNavbarLang(lang) {
   
    document.getElementById("navBarHome").innerHTML = lang.index.navbarHome;
    document.getElementById("navbarFirts").innerHTML = lang.index.navbarFirts;
    document.getElementById("dropdownMenuLink").innerHTML = lang.index.dropdownMenuLink;
    document.getElementById("navbarThird").innerHTML = lang.index.navbarThird;
    document.getElementById("selectLang").innerHTML = lang.index.selectLang;
}

function getLangCode() {
    const lang = getLanguage();
    return lang.substring(0, 2);
}

function main() {

    switch (window.location.pathname) {
        case "/index.html":
            switchIndexLang();
            break;
        case "/mitos/aoao.html":
            aoAo();
            break;
        case "/mitos/jatere.html":
            jasyJatere();
            break;
        case "/mitos/kurupi.html":
            kurupi();
            break;
        case "/mitos/luison.html":
            luison();
            break;
        case "/mitos/kerana.html":
            tauKerana();
            break;
        case "/mitos/mboitui.html":
            mboiTui();
            break;
        case "/mitos/moniai.html":
            moniai();
            break;
        case "/mitos/tejujagua.html":
            tejuJagua();
            break;
    }
}