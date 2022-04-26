const navBar = document.querySelector(".navbar");

const title = document.querySelector(".title");

const line = document.querySelector(".hr")

const ul = document.querySelector(".ul");

navBar.addEventListener("click", function(){
    navBar.classList.toggle("active");
    line.classList.toggle("active");
    ul.classList.toggle("active");
})

ul.addEventListener("click", function(){
    navBar.classList.toggle("active");
    line.classList.toggle("active");
    ul.classList.toggle("active");
})
