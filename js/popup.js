const win = document.getElementById("window");
const textarea = document.querySelector("textarea");

function openWindow() {
    win.style.display = "block";
}

function closeWindow() {
    win.style.display = "none";
}

const titleBar = win.querySelector(".title-bar");
titleBar.onmousedown = function (e) {
    let offsetX = e.clientX - win.offsetLeft;
    let offsetY = e.clientY - win.offsetTop;

    function moveWindow(e) {
        win.style.left = e.clientX - offsetX + "px";
        win.style.top = e.clientY - offsetY + "px";
    }
    document.addEventListener("mousemove", moveWindow);
    document.onmouseup = function () {
        document.removeEventListener("mousemove", moveWindow);
        document.onmouseup = null;
    }
};

textarea.value = localStorage.getItem("notes") || "";

textarea.addEventListener("input", () => {
    localStorage.setItem("notes", textarea.value);
});