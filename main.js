if(sessionStorage.theme === undefined) {
    sessionStorage.theme = "dark"
}

setTimeout(function() {
    if(sessionStorage.theme === "dark") {
        document.getElementById("body").className = "dark"
    } else {
        document.getElementById("body").className = "light"
    }
}, 0)


function showDropdown() {
    document.getElementById("dropdown-content").style.display = "block"
}

function hideDropdown() {
    document.getElementById("dropdown-content").style.display = "none"
}

function changeTheme() {
    if(sessionStorage.theme === "dark") {
        sessionStorage.theme = "light"
        document.getElementById("body").className = "light"
        document.getElementById("toggle-dark").innerHTML = "View in dark mode"
    }
    else {
        sessionStorage.theme = "dark"
        document.getElementById("body").className = "dark"
        document.getElementById("toggle-dark").innerHTML = "View in light mode"
    }
}
