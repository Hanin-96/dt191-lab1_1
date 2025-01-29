"use strict";

//Lägger till active klass på aktiv nav element för att få svart bakgrund
document.addEventListener("DOMContentLoaded", () => {
    let allNavLinks = document.querySelectorAll(".nav-item");
    //Loopar igenom alla nav-länkar
    allNavLinks.forEach((navLink) => {
        //Kontrollerar om länken är den valda path och lägger till klassen active
        if (navLink.getAttribute("href").toLowerCase() === location.pathname.toLowerCase()) {
            navLink.classList.add("active")
        } else {
            //Ta bort klassen active om nav-länken inte stämmer överens med path
            navLink.classList.remove("active");
        }
    });
})
