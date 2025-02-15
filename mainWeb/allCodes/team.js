const left = document.querySelector('.our_team .team_main .left');
const right = document.querySelector('.our_team .team_main .right');
const slider = document.querySelector('.our_team .team_main .frame .slide');
const slideWidth = 18 * 16; 
const visibleSlides = 4; 
const totalSlides = slider.children.length; 
const maxTranslate = -(18 * (totalSlides - visibleSlides)) * 16; 

let translateValue = 0;

function updateArrowState() {
    if (translateValue === 0) {
        left.classList.add("disabled"); 
    } else {
        left.classList.remove("disabled");
    }
    
    if (translateValue === maxTranslate) {
        right.classList.add("disabled"); 
    } else {
        right.classList.remove("disabled");
    }
}


updateArrowState();

right.addEventListener('click', () => {
    if (translateValue > maxTranslate) { 
        translateValue -= slideWidth;
        if (translateValue < maxTranslate) translateValue = maxTranslate; 
        slider.style.transform = `translateX(${translateValue}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";
    }
    updateArrowState();
});

left.addEventListener('click', () => {
    if (translateValue < 0) {
        translateValue += slideWidth;
        if (translateValue > 0) translateValue = 0; 
        slider.style.transform = `translateX(${translateValue}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";
    }
    updateArrowState();
});
document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.querySelector(".slide");
    const slides = document.querySelectorAll(".sli");

   
    const slideWidth = slides[0].offsetWidth; 
    const gap = 20; 

    slideContainer.style.width = `${slides.length * slideWidth + (slides.length - 1) * gap}px`;
});


// function moveSlideForward() {
//     if (translateValue > maxTranslate) { 
//         translateValue -= slideWidth;
//     } else {
//         translateValue = 0; 
//     }
//     slider.style.transform = `translateX(${translateValue}px)`;
//     slider.style.transition = "transform 0.5s ease-in-out";
// }

// setInterval(moveSlideForward, 2000);