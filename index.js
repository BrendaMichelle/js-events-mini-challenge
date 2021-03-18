/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/

header.addEventListener('click', function(){
     toggleColor(header) 
    })

function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

/***** Deliverable 2 *****/

const button = document.querySelector('button.like-button')
// console.log(button)

button.addEventListener('click', function(){
const likesPtag = document.querySelector('p.likes')
const currLikes = parseInt(likes.textContent)


likes.textContent = `${currLikes + 1} Likes`

// likes.textContent = `${traveler.likes++} Likes`

})

/***** Deliverable 3 *****/

const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function(event){
    event.preventDefault()
    //console.log(event.target)


    const species = event.target[0].value 
    const video= event.target[1].value
    const photo = event.target[2].value
    const description = event.target[3].value

    //another way - using the id or name attribute on the element
    // you can use dot notation if the value doesn't have any special characters 
    // const species = event.target.species.value 
    // const video= event.target["animal-link"].value
    // const photo = event.target["animal-photo"].value
    // const description = event.target["sighting-description"].value
 
    // get the user input 


const lastIndex = traveler.animalSightings.length - 1
const newSightingObject = {
    id: traveler.animalSightings[lastIndex].id + 1 ,
    travelerId: 1,   //hard coded 
    species: species,
    photo: photo,
    link:  video,
    description: description
}

renderAnimalSightingPost(newSightingObject)

newSightingForm.reset 
})
//what element am I interested in listening for an event on?
// <form>
//what type of event do I want to listen for?
// submit 
//what should happen?
// no page reload! create a new sighting and display it on the page ie. slap in on the DOM