var body = document.getElementsByTagName("body")[0];

// on page load check if theme is stored in local storage and apply it
if(localStorage.getItem("theme") === "dark-mode") {
    body.className = "dark-mode";
} else {
    body.className = "light-mode";
}

function toggleDarkLight() {
    var currentClass = body.className;
    if (currentClass == "dark-mode") {
        body.className = "light-mode";
        localStorage.setItem("theme", "light-mode");
    } else {
        body.className = "dark-mode";
        localStorage.setItem("theme", "dark-mode");
    }
}
