//footer 
const containerFooter = document.getElementById("footer-container")

const itemFooter = [

    {
        name: "Martin Lozano Muñoz",
        profileLinkedin: "https://www.linkedin.com/in/martin-lozano-mu%C3%B1oz-bbb545235",
        profileGithub: "https://github.com/MartinLozanoM",
    },

    {
        name: "Bernardo Villafañe",
        profileLinkedin: "",
        profileGithub: "https://github.com/Berni011",
    },

    {
        name: "Daniela Artaza Quiroga",
        profileLinkedin: "https://www.linkedin.com/in/daniela-artaza-quiroga-403b3a218/",
        profileGithub: "https://github.com/DanielaQuiroga15",
    },

    {
        name: "Andrea Toledo",
        profileLinkedin: "",
        profileGithub: "",
    },

    {
        name: "Agustin Lizarraga",
        profileLinkedin: "",
        profileGithub: "https://github.com/AgustinLizarraga",
    },
 
]
const renderFooter = (item) => {
    // containerFooter.innerHTML = ""
    item.forEach(item => {
        const elementitem = document.createElement("div"); 

        elementitem.classList.add("footer-info-items")  

        elementitem.innerHTML = `

        <div class="col-8">
          <p class="footer-info-color">${item.name}</p>
        </div>
        <div class="col-4">
          <a href="${item.profileGithub}" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a
            href="${item.profileLinkedin}"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        `
        containerFooter.appendChild(elementitem)
    });
}

renderFooter(itemFooter)

   