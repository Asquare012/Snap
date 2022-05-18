// first dropdown: features.
let img = document.querySelector("#arrow1");
let button = document.querySelector("#feat");
let disp = document.querySelector("#drop-style");
button.addEventListener("mouseup", show);
disp.style.visibility = "hidden";

function show() {
    if (disp.style.visibility == "hidden") {
        img.src = "icon-arrow-up.svg";
        disp.style.visibility = "visible";
    } else {
        disp.style.visibility = "hidden";
        img.src = "icon-arrow-down.svg";
    }
}

// second dropdown: company.
let img2 = document.querySelector("#arrow2");
let button2 = document.querySelector("#comp");
let disp2 = document.querySelector("#drop-style2");
button2.addEventListener("mouseup", show2);
disp2.style.visibility = "hidden";

function show2() {
    if (disp2.style.visibility == "hidden") {
        img2.src = "icon-arrow-up.svg";
        disp2.style.visibility = "visible";
    } else {
        disp2.style.visibility = "hidden";
        img2.src = "icon-arrow-down.svg";
    }
}

// MENU BAR
// open menu
let butt = document.querySelector("#menubutt");
let menu = document.querySelector(".menu");
butt.addEventListener("click", () => {
    menu.style.right = 0;
});
// close menu
let close = document.querySelector("#close");
close.addEventListener("click", () => {
    menu.style.right = -400;
});

// menu bar(drop down):features
let first = document.querySelector("#first-drop");
let content = document.querySelector("#side-drop");
content.style.display = "none";
let icon = document.querySelector("#icon1");
first.addEventListener("click", () => {
    if (content.style.display == "none") {
        icon.src = "icon-arrow-up.svg";
        content.style.display = "block";
    } else {
        content.style.display = "none";
        icon.src = "icon-arrow-down.svg";
    }
});

// menu bar(drop down):company
let second = document.querySelector("#second-drop");
let content2 = document.querySelector("#side-drop2");
content2.style.display = "none";
let icon2 = document.querySelector("#icon2");
second.addEventListener("click", () => {
    if (content2.style.display == "none") {
        icon2.src = "icon-arrow-up.svg";
        content2.style.display = "block";
    } else {
        content2.style.display = "none";
        icon2.src = "icon-arrow-down.svg";
    }
});
