const slider = document.querySelector(".slider-container");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slides = document.querySelectorAll(".slide");
let activeSlide = 0;
let card=document.querySelector(".resume__card");
let burger=document.querySelector(".targer");
let menu__list=document.querySelector(".menu__list");
let menu__open=false
VanillaTilt.init(card, {
    max: 25,
    speed: 1500,
    glare: true,
    perspective: 2000
});



function showSlide(numberSlide){
    slides.forEach((slide)=>{
    slide.style.display="none";
    })


    slides[numberSlide].style.display="block"
}


function nextSlide(){
    activeSlide=(activeSlide+1)%3
    showSlide(activeSlide)
}
rightBtn.addEventListener("click", nextSlide)

function prevSlide(){
    activeSlide=(activeSlide-1+3)%3
    showSlide(activeSlide)
}

leftBtn.addEventListener("click", prevSlide)

showSlide(activeSlide)











burger.addEventListener("click", function () {
    if (menu__open == false) {
        menu__list.style.display = "block";
        burger.style.transform = "rotate(180deg)";
        menu__open = true;
    } else {
        menu__list.style.display = "none";
        burger.style.transform = "rotate(0deg)"
        menu__open = false;
    }
});