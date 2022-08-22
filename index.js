import dogs from "./data.js"



let dogsNames = Object.keys(dogs);
const likeBtn = document.getElementById("likeBtn")
const passBtn = document.getElementById("crossBtn")
let profile = document.getElementById("profile")

class ProfileData {
    constructor(data){
        Object.assign(this, data)
    }

    renderProfile() {
        const {name,avatar,age,bio} = this
        return (
            `
            <img class="profilePicture" src="${avatar}" alt="avatar image">
            <div class="discription">
            <h2>${name}, ${age}</h2>
            <h3>${bio}</h3>
             </div>
            `)
    }

    renderLike() {
        profile.innerHTML += 
             `<div class = "stampContainer" >
                <p class = "likeStamp">LIKE</p>
            </div>`
    }

     

    renderPass() {
        profile.innerHTML += 
             `<div class = "stampContainer">
                <p class = "passStamp">NOPE</p>
              </div>`
    }
}
let doggy = {}
let index = 0;

function getNewDoggy(){
    const nextDoggy = dogs[dogsNames[index % dogsNames.length]];
    index++;
    console.log(nextDoggy) 
    if (nextDoggy) { 
        doggy = new ProfileData(nextDoggy);
        profile.innerHTML = doggy.renderProfile();
    }
}


getNewDoggy()

likeBtn.addEventListener("click", () => { 
    doggy.hasBeenLiked = true
    if (doggy.hasBeenLiked) {
        doggy.likeRender();
        setTimeout(() => getNewDoggy(), 2000);
    }
    

} )
passBtn.addEventListener("click", () =>{
    doggy.hasBeenSwiped = true
    if (doggy.hasBeenSwiped) {
        doggy.passRender();
        setTimeout(() => getNewDoggy(), 2000);
    }
    
} )
