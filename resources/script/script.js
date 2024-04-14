let currentIndex;
const projects = [
    {
        index: 0,
        imgSource: "resources/images/cheatsheet.png",
        link: "https://odiovock.github.io/Cheatsheet/",
        description: "Cheatsheet is a learner project from codecademy. This project aimed to implement the use of the table tag as well" + 
        " as the use of link to guide users within the page."
    },
    {
        index: 1,
        imgSource: "resources/images/tea-cozy.png",
        link: "https://odiovock.github.io/Tea-Cozy/",
        description: "Tea-cozy is a learner project from codecademy. This project uses the CSS flex display property to position elements within the page."
    },
    {
        index: 2,
        imgSource: "resources/images/cone.png",
        description: "Project under construction, I hope to had more soon!"
    }
]

setProjectWindow(initialiseOnLoad());

function setProjectWindow (project) {
    document.getElementById("projectImage").src = project.imgSource;
    document.getElementById("projectDescription").innerHTML = project.description
    currentIndex = project.index;
}

function initialiseOnLoad () {
    const onLoadURLParams = new URLSearchParams(window.location.search);
    let onLoadIndex;
    
    if (onLoadURLParams.has("index") && onLoadURLParams.get("index") < projects.length) {
        onLoadIndex = onLoadURLParams.get("index");
    } else {
        onLoadIndex = 0;
    }
    return projects[onLoadIndex];
}

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

function changeProjectWindow () {
    let chosenProject;
    console.log(event);
    if (event.target.id === "upButton" || event.target.id === "upArrow") {
        chosenProject = currentIndex + 1;
        if(chosenProject >= projects.length) {
            chosenProject = 0;
        }
        setProjectWindow(projects[chosenProject]);

    } else if (event.target.id === "downButton" || event.target.id === "downArrow") {
        chosenProject = currentIndex - 1;
        if(chosenProject < 0) {
            chosenProject = projects.length - 1;
        }
        setProjectWindow(projects[chosenProject]);

    }
}

upButton.addEventListener("click", changeProjectWindow);
downButton.addEventListener("click", changeProjectWindow);
