document.addEventListener("DOMContentLoaded", () =>{
    getCharacters()
})

function getCharacters() {
    fetch("https://api.jikan.moe/v3/anime/20/characters_staff")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}