const menuText = document.querySelector(".menu-txt");
const menuSquare =  document.querySelector(".menu");
const squareIndicator = document.querySelectorAll('.square');
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const contactWrapper= document.querySelector('.contact-wrapper');
const contact = document.querySelector('.contact')
const paperPlaneWrapper = document.querySelector('.paper-plane');
const paperPlane = document.querySelector("#plane");
const contactTextWrapper = document.querySelector(".contact-txt")
const contactText = document.querySelector(".change-txt")
const ctTitle = document.querySelector('.ct-title')
const cntAboveLine =  document.querySelector('.cnt-above-line');
const cntAboveText =  document.querySelector('.cnt-above-txt');
const cntUnderText =  document.querySelector('.cnt-under-txt');
const cntUnderLine = document.querySelector('.cnt-under-line');

console.log("larghezza", window.innerWidth)
console.log("altezza", window.innerHeight)
console.log(contactText)
//MENU
menuSquare.addEventListener("mouseover",(e)=>{
    menuText.style.opacity =1;
    menuText.style.transition ="all 1s ease-in-out";
});

menuSquare.addEventListener("mouseout",(e)=>{
    menuText.style.transition ="";
    menuText.style.opacity =0;
    menuText.style.transition ="all 0.3s ease-in-out";
});
//CONTACT
document.addEventListener("mouseover", (e) =>{
if(e.target == contactTextWrapper || e.target == paperPlaneWrapper){
    contactWrapper.style.backgroundPosition= "left";
    contactText.textContent ="SimoneCattaneo05@gmail.com"
    contactText.style.letterSpacing="0px";
    contactText.style.fontSize="1.9rem"
    contactText.style.fontWeight="300";
    contactText.style.color="var(--main-white)";
    contact.style.border ="none";
    paperPlaneWrapper.style.borderRight ="1px solid transparent";
    paperPlane.style.rotate ="45deg";
    paperPlane.style.pointerEvent ="auto";
    contactWrapper.style.filter="drop-shadow(-4px 4px 0px rgba(4, 43, 102, 0.473))";
    
    }
    if(e.target == paperPlaneWrapper){
        cntAboveLine.style.animation = "cnt-above 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)"
        cntAboveLine.style.animationFillMode = "forwards";
        cntAboveText.style.animation = "cnt-above-txt 1s cubic-bezier(0.645, 0.045, 0.355, 1)"
        cntAboveText.style.animationFillMode = "forwards";
    }
})
document.addEventListener("mouseout", (e) =>{
    if(e.target == contactTextWrapper || e.target == paperPlaneWrapper){
    contactWrapper.style.backgroundPosition= "right";
    contactText.textContent ="Get in touch"
    contactText.style.fontSize="2.8rem"
    contactText.style.fontWeight="800";
    contactText.style.color="var(--main-second)";
    contactText.style.letterSpacing="2px";
    contact.style.border ="1px solid var(--main-white)";
    paperPlaneWrapper.style.borderRight ="1px solid var(--main-white)"; 
    paperPlane.style.rotate ="0deg";
    contactWrapper.style.filter="none";
    cntAboveLine.style.animation = "none"
    cntAboveLine.style.animation = "cnt-above-out 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)"
    cntAboveLine.style.animationFillMode = "forwards";
    cntAboveText.style.animation = "none"
    }
})

//NAV INDICATOR
s1.classList.add("square-active")
window.onscroll = function (event) {
    let scroll = window.pageYOffset;
    //console.log(scroll)
    if (scroll < 350) {
        squareIndicator.forEach(square =>{
            square.style.border = '1px solid var(--main-white)';
            square.classList.remove("square-active");
        });
        s1.classList.add("square-active")
    }
    if(scroll >110){
        ctTitle.style.animation ="fade 1s cubic-bezier(0.645, 0.045, 0.355, 1)";
    }
    if (scroll > 350 && scroll< 1800) {
            squareIndicator.forEach(square =>{
                square.style.border = '1px solid var(--main-second)';
                square.classList.remove("square-active")
            });
            s2.classList.add("square-active");    
    }
    }
    
    //COPY CONTACT
    paperPlaneWrapper.addEventListener('click', (e)=>{
    navigator.clipboard.writeText("SimoneCattaneo05@gmail.com").then(() => {
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
    },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
    });
    e.preventDefault;

    cntUnderText.classList.remove("cnt-under-active");
    void cntUnderText.offsetWidth;
    cntUnderText.classList.add("cnt-under-active");

    cntUnderLine.classList.remove("cnt-under-lineIn");
    void cntUnderText.offsetWidth;
    cntUnderLine.classList.add("cnt-under-lineIn");

   

   });