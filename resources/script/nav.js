const navButtons = document.getElementsByClassName("sideNavButton");

function sendToLink () {
    if(event.target.id === "indexLink") {
        window.location.href = "index.html";
    } else if (event.target.id === "portfolioLink") {
        window.location.href = "projects.html";
    } else if (event.target.id === "contactLink") {
        window.location.href = "contact.html";
    }
}

for (element of navButtons) {
    element.addEventListener("click", sendToLink);
}