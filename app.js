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
const cntAboveLine =  document.querySelector('.cnt-above-line');
const cntAboveText =  document.querySelector('.cnt-above-txt');
const cntUnderText =  document.querySelector('.cnt-under-txt');
const cntUnderLine = document.querySelector('.cnt-under-line');
const bounce = document.querySelectorAll('.bounce');
const heroLineEnd = document.querySelector('.line-end');
//CERTIFICATION SECTION
const certificationBg = document.querySelector('.certification');
const ctLineWrapper = document.querySelector('.ct-line-wrapper');
const ctTitle = document.querySelector('#ct-title');
const ctLine = document.querySelector('.ct-line');
const ctText = document.querySelector('.ct-txt');
const education = document.querySelector('#education')
const certificate = document.querySelector('#certificate')
const ctCertificate = document.querySelector('.ct-certificate');
const ctInfoWrapper = document.querySelectorAll('.ct-info-wrapper'); //controlla
const studyOne = document.querySelector('.study01')
const studyTwo = document.querySelector('.study02')
const studyThree = document.querySelector('.study03')

console.log("larghezza", window.innerWidth)
console.log("altezza", window.innerHeight)
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
//CONTACT BUTTON

document.addEventListener("mouseover", (e) =>{
if(e.target == contactTextWrapper || e.target == paperPlaneWrapper){
    contactWrapper.style.backgroundPosition= "left";
    contactText.textContent ="SimoneCattaneo05@gmail.com"
    contactText.style.letterSpacing="0px";
    contactText.style.fontSize="var(--main-fs-button-small)"
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
    contactText.style.fontSize="var(--main-fs-button-big)"
    contactText.style.fontWeight="800";
    contactText.style.color="var(--main-second)";
    contactText.style.letterSpacing="2px";
    contact.style.border ="1px solid var(--main-white)";
    paperPlaneWrapper.style.borderRight ="1px solid var(--main-white)"; 
    paperPlane.style.rotate ="0deg";
    contactWrapper.style.filter="none";
    cntAboveLine.style.animation = "cnt-above-out 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)";
    cntAboveLine.style.animationFillMode = "forwards";
    cntAboveText.style.animation = "cnt-above-txtOut 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)"
    cntAboveText.style.animationFillMode = "forwards";
    }
})

    //COPY CONTACT
    paperPlaneWrapper.addEventListener('click', (e)=>{
    navigator.clipboard.writeText("SimoneCattaneo05@gmail.com");
    e.preventDefault;

    cntUnderText.classList.remove("cnt-under-active");
    void cntUnderText.offsetWidth;
    cntUnderText.classList.add("cnt-under-active");

    cntUnderLine.classList.remove("cnt-under-lineIn");
    void cntUnderText.offsetWidth;
    cntUnderLine.classList.add("cnt-under-lineIn");

    let text = contactText.textContent.split('') 
   
    const bounceTxt = [...text].map((obj, index)=>{
    return `<span class="bounce">` + obj + `</span>`
    });
    contactText.innerHTML = bounceTxt.join('');

   const temp = document.querySelectorAll('.bounce');
    for(let i=0; i < temp.length; i++){
        console.log(i)
        temp[i].style.animationDelay = `${i - (i - i/38)}s`;
    }
   });

   //ABOUT ME SMALL MENU
    document.addEventListener('click', (e)=>{
    ctCertificate.style.left ="-2000px";
    if(e.target == certificate){
        // ctText.style.transition = "all 0s linear"
        ctLineWrapper.classList.remove("line-animation");
        void cntUnderText.offsetWidth;
        ctLineWrapper.classList.add("line-animation");
        ctText.style.opacity = "0";
        ctText.style.pointerEvent= "none";
        ctText.style.width= '1';
        ctText.style.overflow = "hidden";
        ctText.style.transition = "width 0.2s linear 1.2s"
        ctCertificate.style.opacity ='1';
        ctCertificate.style.width ='100%';
        ctCertificate.style.transition = "all 0.2s linear 1.2s"
        ctCertificate.style.transition = "left 0.01s linear 1s"
        ctCertificate.style.left = "0";
        certificate.classList.add('ct-menu-active');
        education.classList.remove('ct-menu-active');
    }
    if(e.target == education){
        ctLineWrapper.classList.remove("line-animation");
        void cntUnderText.offsetWidth;
        ctLineWrapper.classList.add("line-animation");
        ctText.style.opacity ="1"
        ctText.style.pointerEvent = "auto";
        ctText.style.transition = "all 0.2s linear 1.2s"
        ctText.style.width = "100%"
        ctCertificate.style.width = "0";
        ctCertificate.style.opacity = '0';
        ctCertificate.style.transition = "opacity 0.2s linear"
        education.classList.add('ct-menu-active');
        certificate.classList.remove('ct-menu-active');
    }
   })
  

   //SCROLL EVENTS
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
    if(scroll>190){
        ctLine.style.animation ="line-certification 3s cubic-bezier(0.645, 0.045, 0.355, 1)"
        ctLine.style.animationFillMode = "forwards";
        ctTitle.style.animation ="fade 1s cubic-bezier(0.645, 0.045, 0.355, 1)";
    }
    if(scroll > 330 && scroll< 1800) {
        
        squareIndicator.forEach(square =>{
            square.style.border = '1px solid var(--main-second)';
            square.classList.remove("square-active")
            });
    s2.classList.add("square-active");    
    }
    if(scroll >450){
        studyOne.style.animation = "fade 1s cubic-bezier(0.645, 0.045, 0.355, 1)"
        studyOne.style.animationFillMode = "forwards";
    }
    if(scroll >550){
        studyTwo.style.animation = "fade 1s cubic-bezier(0.645, 0.045, 0.355, 1)0.2s"
        studyTwo.style.animationFillMode = "forwards";
    }
    if(scroll >650){
        studyThree.style.animation = "fade 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s"
        studyThree.style.animationFillMode = "forwards";
    }
    }
    




  // All values are measured in pixels
window.addEventListener('scroll', () => {
 
    // Distance from the top scrolled
    const scrollOffset = window.pageYOffset;
    // Length of the user's browser
    const browserViewHeight = window.innerHeight;
    // Height of the entire DOM
    const documentHeight = document.body.clientHeight
    const totalAmountScrolled = scrollOffset + browserViewHeight
    // Bottom of page reached. 
    console.log("")
    console.log("Distance from the top scrolled:",scrollOffset)
    console.log("Length of the user's browser:",browserViewHeight)
    console.log("Height of the entire DOM:",documentHeight)
    console.log("Bottom of page reached:",totalAmountScrolled)
   })