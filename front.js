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