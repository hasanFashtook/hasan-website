let settings = document.getElementsByClassName("settings")[0];
let gar = document.getElementsByClassName("gar")[0];
let form = document.getElementsByTagName("form")[0];
let colorInput = document.getElementsByName("color");
let typeInput = document.getElementsByName("font-family");
let sizeInput = document.getElementsByName("font-size");
let btn = document.querySelector("button");
let root = document.querySelector(":root");
let body = document.querySelector("body")
let colorValue;

gar.onclick = function () {
    settings.style.left === "-300px" ?
        (settings.style.left = "0px") :
        (settings.style.left = "-300px");
};
// store the color
colorInput.forEach(ele => {
    let chs = window.localStorage.getItem("color");
    if (ele.id === chs) {
        ele.setAttribute("checked", true)
    }
    ele.addEventListener("click", (e) => {
        colorInput.forEach(ele => {
            ele.removeAttribute("checked")
        });
        colorValue = e.target.value;
        window.localStorage.setItem("color", colorValue)
        ele.setAttribute("checked", true)
    })
});
// store the type
typeInput.forEach(ele => {
    let typeFont = window.localStorage.getItem("type");
    if (ele.id === typeFont) {
        ele.setAttribute("checked", true)
    }
    ele.addEventListener("click", (e) => {
        typeInput.forEach(ele => {
            ele.removeAttribute("checked")
        });
        typeInput = e.target.value;
        window.localStorage.setItem("type", typeInput)
        ele.setAttribute("checked", true)
    })
})
// store the size
btn.onclick = function () {
    let sizeValue = sizeInput[0].value;
    window.localStorage.setItem("size", sizeValue)

}
window.addEventListener("DOMContentLoaded", function () {
    if (window.localStorage.getItem("size")) {
        sizeInput[0].value = window.localStorage.getItem("size")
    }
    if (window.localStorage.getItem("color")) {
        root.style.cssText = `--padding-section: 100px;--background-color: #ececec;--ground-color: #fafafa;--main-Color: ${window.localStorage.getItem("color")};--main-Color-alt: ${window.localStorage.getItem("color")};--main-transition: 0.5s;`
    }
    if (window.localStorage.getItem("type")) {
        body.style.cssText = `font-family: '${window.localStorage.getItem("type")}', sans-serif`
    }
    if (window.localStorage.getItem("size")) {
        root.style.cssText = `--min-font-size:${window.localStorage.getItem("size")}px;--padding-section: 100px;--background-color: #ececec;--ground-color: #fafafa;--main-Color: ${window.localStorage.getItem("color")};--main-Color-alt: ${window.localStorage.getItem("color")};--main-transition: 0.5s;`
    }
})

form.onsubmit = function (event) {

};