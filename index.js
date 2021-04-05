document.addEventListener("DOMContentLoaded", () =>{
    getCharacters()
})

function fixName() {

}

function getCharacters() {
    let ul = document.getElementById("character-list")
    ul.innerHTML = ""
    fetch("https://api.jikan.moe/v3/anime/20/characters_staff")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(character => {
            return ul.innerHTML += `

            `
        })
    })
}