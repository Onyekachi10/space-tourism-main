(function () {

    "use strict"

    const roleCrew = document.querySelector("h2")
    const crewNames = document.querySelector("h1")
    const crewBio = document.querySelector("p")
    const crewImage = document.querySelector("#image")
    const dots = document.querySelectorAll(".dot")


fetch("/data.json").then(function(response){
   return response.json()
}).then(function(data){
    dots.forEach(function (unact,act){
       
        unact.addEventListener("click",function(){
            roleCrew.innerHTML = data.crew[act].role
            crewNames.innerHTML = data.crew[act].name
            crewBio.innerHTML = data.crew[act].bio
            crewImage.setAttribute("src", data.crew[act].images.webp)
        
       for(let i = 0; i <= dots.length; i++) {
        if(dots[i] !== unact) {
            dots[i].classList.remove("active")
        }
        else {
            dots[i].classList.add("active")
        }
       }
        
        })
    })
})



})
()