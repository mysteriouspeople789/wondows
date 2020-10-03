sessionStorage.theme = "dark"

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
    }
    else {
        sessionStorage.theme = "dark"
        document.getElementById("body").className = "dark"
    }
}
