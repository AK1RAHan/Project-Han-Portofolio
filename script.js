//varaible
const Wadah = document.getElementById("Details");
const ProjectList = document.getElementById("ProjectList");

const openingDiv = document.getElementById("Opening");
const portofolio = document.getElementById("Portofolio");
const logo = document.getElementById("OpeningLogo");

fetch("./Projects.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            ProjectList.innerHTML += `
            <div class="ProjectContent">
                <h4><a href="${project.link}">${project.title}</a></h4>
                <a href="${project.link}"><img src="${project.image}" alt="POS" class="ProjectImage"></a>
                <button onclick="showDetails('${project.id}')">Detail</button>
            </div>`
        })
        
    });
function Opening() {
    openingDiv.classList.add("Hide");
    setTimeout(() => {
        openingDiv.style.display = "none";
    }, 500);
    portofolio.classList.add("active");
}

function showDetails(ID) {
    console.log(ID);
    fetch("./Projects.json")
    .then(response => response.json())
    .then(data => {
        const project = data.find(p => p.id === ID);
        if (project) {
            Wadah.innerHTML = `
            <button onclick="hideDetails()">X</button>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            `; 
            Wadah.classList.add("active");
        }
    })
}

function hideDetails() {
    Wadah.classList.remove("active");
    setTimeout(() => {
        Wadah.innerHTML = "";
    }, 300);
}