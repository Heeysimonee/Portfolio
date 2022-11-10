const menuText = document.querySelector(".menu-txt");
const menuSquare =  document.querySelector(".menu");
const squareIndicator = document.querySelectorAll('.square');
const s1 = document.querySelector(".s1")
const s2 = document.querySelector(".s2")
const s3 = document.querySelector(".s3")
const s4 = document.querySelector(".s4")
const s5 = document.querySelector(".s5")




menuSquare.addEventListener("mouseover",(e)=>{
    console.log(e)
    menuText.style.opacity =1;
    menuText.style.transition ="all 1s ease-in-out";
});

menuSquare.addEventListener("mouseout",(e)=>{
    console.log(e)
    menuText.style.transition ="";
    menuText.style.opacity =0;
    menuText.style.transition ="all 0.3s ease-in-out";
});

s1.classList.add("square-active")
console.log(squareIndicator)
window.onscroll = function (event) {
    let scroll = window.pageYOffset;
    console.log(scroll)
    if (scroll < 350) {
        squareIndicator.forEach(square =>{
            square.style.border = '1px solid var(--main-white)';
            square.classList.remove("square-active");
        });
        s1.classList.add("square-active")
        }
        if (scroll > 350 && scroll< 1800) {
            squareIndicator.forEach(square =>{
                square.style.border = '1px solid var(--main-second)';
                square.classList.remove("square-active")
            });
            s2.classList.add("square-active")
            }
    }
    