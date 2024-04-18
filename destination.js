(function () {
  
    "use strict"
    const planetsImage = document.querySelector("#images")
    const h1 = document.querySelector("h1")
    const pBio = document.querySelector(".planet-para")
    const km = document.querySelector(".km")
    const time = document.querySelector(".time")
    const planetsLinks = document.querySelectorAll(".nav-link-planets")

fetch("/data.json").then(function(response){
    return response.json()})
    .then(function (data){
        planetsLinks.forEach(function(unact,a){
            unact.addEventListener("click",function(evt){
                evt.preventDefault()
        planetsImage.setAttribute("src", data.destinations[a].images.webp)
        h1.innerHTML= data.destinations[a].name
        pBio.innerHTML = data.destinations[a].description
        km.innerHTML = data.destinations[a].distance
        time.innerHTML = data.destinations[a].travel

        for (let i =0; i <=planetsLinks.length; i++) {
            if (planetsLinks[i] !== unact) {   
            planetsLinks[i].classList.remove("active")
            }

        else {
            planetsLinks[i].classList.toggle("active")
        }
        }
            })

        })
    })


})
()

