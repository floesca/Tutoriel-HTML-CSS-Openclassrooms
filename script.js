
const titles = document.querySelectorAll(".title-definition")

titles.forEach(titles => {
    titles.addEventListener("click", (event) => {
        const conceptsDefinition = event.target.closest(".concepts-definition")
        conceptsDefinition.classList.toggle("open")
    })
})
