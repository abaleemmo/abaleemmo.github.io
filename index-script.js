// navbar 

let navBarToggleButton = document.querySelector("#nav-bar-circle");
let navBarExpanded = document.querySelector(".nav-bar-row");
let navbarHidden = true;

let pagesToggleButton = document.querySelector(".pages-nav-open");
let pagesHidden = true;
let pagesExpanded = document.querySelector(".pages-nav-expanded");
let contactToggleButton = document.querySelector(".contact-nav-open");
let contactHidden = true;
let contactExpanded = document.querySelector(".contact-nav-expanded");
let audioToggleButton = document.querySelector(".audio-nav-button");
let audioHidden = true;
let audioExpanded = document.querySelector(".audio-nav-expanded");

let lightDarkButton = document.querySelector(".light-dark-switch");

// getting the nav bar circle to show the nav bar row 
function navBarToggle(){
    if (navbarHidden === true){
        navBarExpanded.style.display = "none";
        lightDarkButton.style.display = "none";
    } else if (navbarHidden === false){
        navBarExpanded.style.display = "flex";
        lightDarkButton.style.display = "flex";
    }
};


navBarToggleButton.addEventListener("click", function(){
    navbarHidden = !navbarHidden
    navBarToggle();
})

// getting the buttons in nav bar row to show their respective sections in upper
function pagesToggle(){
    if (pagesHidden === true){
        pagesExpanded.style.display = "none";
    } else if (pagesHidden === false){
        pagesExpanded.style.display = "flex";
    }
}

function contactToggle(){
    if (contactHidden === true){
        contactExpanded.style.display = "none";
    } else if (contactHidden === false){
        contactExpanded.style.display = "flex";
    }
}

function audioToggle(){
    if (audioHidden === true){
        audioExpanded.style.display = "none";
    } else if (audioHidden === false){
        audioExpanded.style.display = "flex";
    }
}


pagesToggleButton.addEventListener("click", function(){
    pagesHidden = !pagesHidden;
    contactHidden = true;
    audioHidden = true;
    pagesToggle();
    contactToggle();
    audioToggle;
})

pagesToggleButton.addEventListener("mouseover", function(){
    pagesHidden = !pagesHidden;
    contactHidden = true;
    audioHidden = true;
    pagesToggle();
    contactToggle();
    audioToggle;
})

contactToggleButton.addEventListener("click", function(){
    pagesHidden = true;
    contactHidden = !contactHidden;
    audioHidden = true;
    pagesToggle();
    contactToggle();
    audioToggle;
})

contactToggleButton.addEventListener("mouseover", function(){
    pagesHidden = true;
    contactHidden = !contactHidden;
    audioHidden = true;
    pagesToggle();
    contactToggle();
    audioToggle;
})

audioToggleButton.addEventListener("click", function(){
    pagesHidden = true;
    contactHidden = true;
    audioHidden = !audioHidden;
    pagesToggle();
    contactToggle();
    audioToggle;
})

audioToggleButton.addEventListener("mouseover", function(){
    pagesHidden = true;
    contactHidden = true;
    audioHidden = !audioHidden;
    pagesToggle();
    contactToggle();
    audioToggle;
})

// navbar