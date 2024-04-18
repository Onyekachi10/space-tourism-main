(function () {
    "use strict"
      const menu = document.querySelector(".menu_btn")
      const nav = document.querySelector(".navbar-nav")

      menu.addEventListener("click",function(){
         menu.classList.toggle("menu_active")
         nav.classList.toggle("nav_active")
      })
})
()