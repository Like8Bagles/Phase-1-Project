const BASE_URL = "https://api.jikan.moe/v3/anime/20"
let characters
document.addEventListener("DOMContentLoaded", () =>{
    getCharacters()
})

function getCharacters() {
    let ul = document.getElementById("list");
    ul.innerHTML = "";
    fetch(BASE_URL + "/characters_staff")
    .then(res => res.json())
    .then(data => {
        characters = data.characters
        console.log(characters)
        data.characters.forEach(character => {          
            ul.innerHTML += 
            `<li><a href="#" id="${character.mal_id}">${fixName(character.name)}</a>  <button id = "button">Like!</button></li>`
        })
        addEventListeners()
    })
}

function addEventListeners() {
    let ul = document.getElementById("list");
    ul.addEventListener("click", handleClick)
}

function handleClick(e) {
    console.log(e)
    let id = e.target.id
    let main = document.getElementById("main-content")
    let button = e.target
    let div = document.getElementById("content")
    
    if (id === "button") {
        button.style.backgroundColor = "#FF0000"
    }
    else {
        const content = characters.find(character => e.target.id == character.mal_id).image_url
        const role = characters.find(character => e.target.id == character.mal_id).role
        const name = characters.find(character => e.target.id == character.mal_id).name
        div.innerHTML = ""
        div.innerHTML += `<img src = "${content}" alt = "${role}">
        <h3>${fixName(name)}</h3>`
    }
}

function fixName(name) {
    if (name.includes(", ")) {
        let splitName = name.split(", ");
        let newName = splitName[1] + " " + splitName[0]
        return newName
    }
    else {
        return name
    }
}

