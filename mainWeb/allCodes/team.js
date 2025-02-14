const left = document.querySelector('.our_team .team_main .left');
const right = document.querySelector('.our_team .team_main .right');
const slider = document.querySelector('.our_team .team_main .frame .slide');

let translateValue = 0;
const slideWidth = 18 * 16; // 18rem কে px-এ কনভার্ট (1rem = 16px)
const maxTranslate = -((slider.children.length - 1) * slideWidth); // সর্বাধিক বামে যাওয়া মান

function updateArrowVisibility() {
    // প্রথম ছবিতে থাকলে Left Arrow লুকাবে
    left.style.display = translateValue === 0 ? "none" : "block";
    
    // শেষ ছবিতে থাকলে Right Arrow লুকাবে
    right.style.display = translateValue === maxTranslate ? "none" : "block";
}

// প্রথমবার লোড হলে চেক করবে
updateArrowVisibility();

right.addEventListener('click', () => {
    if (translateValue > maxTranslate) { 
        translateValue -= slideWidth;
        slider.style.transform = `translateX(${translateValue}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";
    }
    updateArrowVisibility(); // আপডেট করবে Arrow Visibility
});

left.addEventListener('click', () => {
    if (translateValue < 0) {
        translateValue += slideWidth;
        slider.style.transform = `translateX(${translateValue}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";
    }
    updateArrowVisibility(); // আপডেট করবে Arrow Visibility
});
