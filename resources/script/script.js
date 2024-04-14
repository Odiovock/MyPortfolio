const projects = [
    {
        imgSource: "resources/images/cheatsheet.png",
        link: "https://odiovock.github.io/Cheatsheet/",
        description: "Cheatsheet is a learner project from codecademy. This project aimed to implement the use of the table tag as well" + 
        " as the use of link to guide users within the page."
    },
    {
        imgSource: "resources/images/tea-cozy.png",
        link: "https://odiovock.github.io/Tea-Cozy/",
        description: "Tea-cozy is a learner project from codecademy. This project uses the CSS flex display property to position elements within the page."
    },
    {
        imgSource: "resources/images/cone.png",
        description: "Project under construction, I hope to had more soon!"
    }
]

setProjectWindow(initialiseOnLoad());

function setProjectWindow (project) {
    document.getElementById("projectImage").src = project.imgSource;
    document.getElementById("projectDescription").innerHTML = project.description
}

function initialiseOnLoad () {
    const onLoadURLParams = new URLSearchParams(window.location.search);
    let onLoadIndex;
    
    if(onLoadURLParams.has("index") && onLoadURLParams.get("index") < projects.length) {
        onLoadIndex = onLoadURLParams.get("index");
    } else {
        onLoadIndex = 0;
    }
    console.log(onLoadIndex)
    return projects[onLoadIndex];
}
