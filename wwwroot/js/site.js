// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Lägger till active klass på aktiv nav element för att få svart bakgrund
document.addEventListener("DOMContentLoaded", () => {
    let allNavLinks = document.querySelectorAll(".nav-item");
    allNavLinks.forEach((navLink) => {
        if (navLink.getAttribute("href").toLowerCase() === location.pathname.toLowerCase()) {
            navLink.classList.add("active")
        } else {
            navLink.classList.remove("active");
        }
    });
})
