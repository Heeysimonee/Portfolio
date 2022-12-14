//HEADER
const menu = document.querySelector(".menu");
const menuWrap = document.querySelector(".menu-wrap");
const burger = document.querySelector(".menu-burger");
//lateral section indicator
const squareIndicator = document.querySelectorAll(".square");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
//LANDING
//button
const contactWrapper = document.querySelector(".contact-wrapper");
const contact = document.querySelector(".contact");
const paperPlaneWrapper = document.querySelector(".paper-plane");
const paperPlane = document.querySelector("#plane");
const contactTextWrapper = document.querySelector(".contact-txt");
const contactText = document.querySelector(".change-txt");
const cntAboveLine = document.querySelector(".cnt-above-line");
const cntAboveText = document.querySelector(".cnt-above-txt");
const cntUnderText = document.querySelector(".cnt-under-txt");
const cntUnderLine = document.querySelector(".cnt-under-line");
//CERTIFICATION SECTION
const abTitle = document.querySelector("#ct-title");
const abParagraph = document.querySelector(".ab-paragraph");
const abInfo = document.querySelector(".ab-info");
//SKILL SECTION
const skHeadingContainer = document.querySelector(".sk-heading-container");
const skSubContainer = document.querySelector(".sk-sub-container");
const skinfo = document.querySelector(".sk-info");
//CONTACT SECTION
const cntTitle = document.querySelector("#cnt-title");
const cntForm = document.querySelector(".cnt-form-wrapper");
//MENU
let menuOpen = false;
menuWrap.addEventListener("click", (e) => {
  if (!menuOpen) {
    menu.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
    menu.classList.add("menu-active");
    menuWrap.classList.add("open");
    menuOpen = true;
  } else {
    menuWrap.classList.remove("open");
    menu.classList.remove("menu-active");
    menuOpen = false;
  }
});

//CONTACT BUTTON

document.addEventListener("mouseover", (e) => {
  if (e.target == contactTextWrapper || e.target == paperPlaneWrapper) {
    contactWrapper.style.backgroundPosition = "left";
    contactText.textContent = "SimoneCattaneo05@gmail.com";
    contactText.style.letterSpacing = "0px";
    contactText.style.fontSize = "var(--main-fs-button-small)";
    contactText.style.fontWeight = "300";
    contactText.style.color = "var(--main-white)";
    contact.style.border = "none";
    paperPlaneWrapper.style.borderRight = "1px solid transparent";
    paperPlane.style.rotate = "45deg";
    paperPlane.style.pointerEvent = "auto";
    contactWrapper.style.filter =
      "drop-shadow(-4px 4px 0px rgba(4, 43, 102, 0.473))";
  }
  if (e.target == paperPlaneWrapper) {
    cntAboveLine.style.animation =
      "cnt-above 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)";
    cntAboveLine.style.animationFillMode = "forwards";
    cntAboveText.style.animation =
      "cnt-above-txt 1s cubic-bezier(0.645, 0.045, 0.355, 1)";
    cntAboveText.style.animationFillMode = "forwards";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target == contactTextWrapper || e.target == paperPlaneWrapper) {
    contactWrapper.style.backgroundPosition = "right";
    contactText.textContent = "Get in touch";
    contactText.style.fontSize = "var(--main-fs-button-big)";
    contactText.style.fontWeight = "700";
    contactText.style.color = "var(--main-second)";
    contactText.style.letterSpacing = "2px";
    contact.style.border = "1px solid var(--main-white)";
    paperPlaneWrapper.style.borderRight = "1px solid var(--main-white)";
    paperPlane.style.rotate = "0deg";
    contactWrapper.style.filter = "none";
    cntAboveLine.style.animation =
      "cnt-above-out 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)";
    cntAboveLine.style.animationFillMode = "forwards";
    cntAboveText.style.animation =
      "cnt-above-txtOut 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)";
    cntAboveText.style.animationFillMode = "forwards";
  }
});

//COPY CONTACT
paperPlaneWrapper.addEventListener("click", (e) => {
  navigator.clipboard.writeText("SimoneCattaneo05@gmail.com");
  e.preventDefault;

  cntUnderText.classList.remove("cnt-under-active");
  void cntUnderText.offsetWidth;
  cntUnderText.classList.add("cnt-under-active");

  cntUnderLine.classList.remove("cnt-under-lineIn");
  void cntUnderText.offsetWidth;
  cntUnderLine.classList.add("cnt-under-lineIn");

  let text = contactText.textContent.split("");

  const bounceTxt = [...text].map((obj, index) => {
    return `<span class="bounce">` + obj + `</span>`;
  });
  contactText.innerHTML = bounceTxt.join("");

  const temp = document.querySelectorAll(".bounce");
  for (let i = 0; i < temp.length; i++) {
    console.log(i);
    temp[i].style.animationDelay = `${i - (i - i / 38)}s`;
  }
});

//SCROLL EVENTS
const screenWidth = document.documentElement.clientWidth || window.innerWidth;

s1.classList.add("square-active");
window.onscroll = (event) => {
  const scroll = window.pageYOffset;
  //about title fade
  if (scroll > 190) {
    abTitle.classList.add("p-fade");
  }
  //ection indicator for Landing Page
  if (scroll < 350) {
    squareIndicator.forEach((square) => {
      square.style.border = "1px solid var(--main-white)";
      square.classList.remove("square-active");
      square.style.background = "transparent";
    });
    s1.classList.add("square-active");
    s1.style.background = "var(--main-white)";
  }
  //section indicator for About Me
  if (scroll > 330) {
    squareIndicator.forEach((square) => {
      square.style.border = "1px solid var(--main-second)";
      square.classList.remove("square-active");
      square.style.background = "transparent";
    });
    s2.classList.add("square-active");
    s2.style.background = "var(--main-second)";
  }
  //about fade sections
  if (scroll > 600) {
    abParagraph.classList.add("p-fade");
    abInfo.classList.add("p-fade");
  }
  //skill  heading fade
  if (scroll > 1200) {
    skHeadingContainer.classList.add("p-fade");
  }
  //section indicator for Skills
  if (scroll > 1370) {
    squareIndicator.forEach((square) => {
      square.style.border = "1px solid var(--main-white)";
      square.classList.remove("square-active");
      square.style.background = "transparent";
    });
    s3.classList.add("square-active");
    s3.style.background = "var(--main-white)";
  }
  // skill fade sections
  if (scroll > 1550) {
    skinfo.classList.add("p-fade");
    skSubContainer.classList.add("p-fade");
  }
  //About me fade title
  if (scroll > 2250) {
    cntTitle.classList.add("p-fade");
  }
  //About me section fade
  if (scroll > 2550) {
    cntForm.classList.add("p-fade");
  }
  //section indicator for Contat Me
  if (scroll > 2370) {
    squareIndicator.forEach((square) => {
      square.style.border = "1px solid var(--main-blue)";
      square.classList.remove("square-active");
      square.style.background = "transparent";
    });
    s4.classList.add("square-active");
    s4.style.background = "var(--main-blue)";
  }
};

// console.log("larghezza", window.innerWidth);
// console.log("altezza", window.innerHeight);
// // All values are measured in pixels
// window.addEventListener("scroll", () => {
//   // Distance from the top scrolled
//   const scrollOffset = window.pageYOffset;
//   // Length of the user's browser
//   const browserViewHeight = window.innerHeight;
//   // Height of the entire DOM
//   const documentHeight = document.body.clientHeight;
//   const totalAmountScrolled = scrollOffset + browserViewHeight;
//   // Bottom of page reached.
//   console.log("");
//   console.log("Distance from the top scrolled:", scrollOffset);
//   console.log("Length of the user's browser:", browserViewHeight);
//   console.log("Height of the entire DOM:", documentHeight);
//   console.log("Bottom of page reached:", totalAmountScrolled);
// });
