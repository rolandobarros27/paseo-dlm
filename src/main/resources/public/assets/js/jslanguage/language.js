main();

function getLanguage() {
    return window.navigator.language;
}
function tauKerana() {
    switchLang(0);
}
function tejuJagua() {
    switchLang(1);
}
function mboiTui() {
    switchLang(2);
}
function moniai() {
    switchLang(3);
}
function jasyJatere() {
    switchLang(4);
}
function kurupi() {
    switchLang(5);
}
function aoAo() {
    switchLang(6);
}
function luison() {
    switchLang(7);
}
function switchLang(myth) {
    const lang = getLangCode();
    switch (lang) {
        case "es":
            document.getElementById("title").innerHTML = es.mitos[myth].title;
            document.getElementById("information").innerHTML = es.mitos[myth].information;
            break;
        case "en":
            document.getElementById("title").innerHTML = en.mitos[myth].title;
            document.getElementById("information").innerHTML = en.mitos[myth].information;
            break;
        case "gn":
            document.getElementById("title").innerHTML = gu.mitos[myth].title;
            document.getElementById("information").innerHTML = gu.mitos[myth].information;
            break;
        case "pt":
            document.getElementById("title").innerHTML = po.mitos[myth].title;
            document.getElementById("information").innerHTML = po.mitos[myth].information;
            break;
        default:
            document.getElementById("title").innerHTML = en.mitos[myth].title;
            document.getElementById("information").innerHTML = en.mitos[myth].information;
            break;
    }
}
function getLangCode() {
    const lang = getLanguage();
    return lang.substring(0, 2);
}
function main() {
    switch (window.location.pathname) {
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
