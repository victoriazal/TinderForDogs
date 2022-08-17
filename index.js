import dogs from "./data.js"



let dogsNames = ["Rex",'Bella','Teddy']
const likeBtn = document.getElementById("likeBtn")
const passBtn = document.getElementById("crossBtn")
let profile = document.getElementById("profile")

class ProfileData {
    constructor(data){
        Object.assign(this, data)
    }

    renderProfile(){
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

    likeRender(){
        profile.innerHTML += 
             `<div class = "stampContainer" >
                <p class = "likeStamp">LIKE</p>
            </div>`
    }

     

    passRender(){
        profile.innerHTML += 
             `<div class = "stampContainer">
                <p class = "passStamp">NOPE</p>
              </div>`
    }
}
let doggy = {}

function getNewDoggy(){
    const nextDoggy = dogs[dogsNames.shift()]
    console.log(nextDoggy) 
    doggy = nextDoggy ? new ProfileData(nextDoggy) : {}
    profile.innerHTML = doggy.renderProfile()
    console.log(dogsNames.length)
    if(dogsNames.length === 0){
        dogsNames = ["Rex",'Bella','Teddy']
    }
}


getNewDoggy()

likeBtn.addEventListener("click", () => { 
    doggy.hasBeenLiked = true
    if (doggy.hasBeenLiked){
        doggy.likeRender()
        setTimeout(() =>{
            getNewDoggy()
        },2000)
    }
    

} )
passBtn.addEventListener("click", () =>{
    doggy.hasBeenSwiped = true
    if (doggy.hasBeenSwiped){
        doggy.passRender()
        setTimeout(() =>{
            getNewDoggy()
        },2000)
    }
    
} )