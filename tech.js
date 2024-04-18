(function () {
   

const techItems = document.querySelector("h1")
const spaceBio = document.querySelector(".space-para")
const techImages = document.querySelector("#image")
const nextTechUsed = document.querySelectorAll(".list-link")


fetch('/data.json').then(function (response) {
    return response.json()
}).then(function(data){
    nextTechUsed.forEach(function(act,a){
        act.addEventListener("click",function(evt){
       evt.preventDefault()
       techItems.innerHTML = data.technology[a].name
       spaceBio.innerHTML = data.technology[a].description
       techImages.setAttribute("src", data.technology[a].images.portrait)


  for (let i = 0; i<=nextTechUsed.length; i++)    {
    if (nextTechUsed[i] !== act) {
        nextTechUsed[i].classList.remove("active")
    }
     
    else {
        nextTechUsed[i].classList.toggle("active")

    }
  }  
        })
    })
})
})
()     