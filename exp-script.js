// image carousel for exp 1

let currentCardNumber = 0;
let card1ChangeButton1 = document.querySelector(".image-carousel-button1.1");
let card1ChangeButton2 = document.querySelector(".image-carousel-button1.2");
let card1ChangeButton3 = document.querySelector(".image-carousel-button1.3");
let car1d1 = document.querySelector(".image-carousel-card1-1");
let car1d2 = document.querySelector(".image-carousel-card1-2");
let car1d3 = document.querySelector(".image-carousel-card1-3");

function cardCheck(){
    if (currentCardNumber === 0) {
        car1d1.style.display = "flex";
        car1d2.style.display = "none";
        car1d3.style.display = "none";
    }
    if (currentCardNumber === 1) {
        car1d1.style.display = "none";
        car1d2.style.display = "flex";
        car1d3.style.display = "none";
    }
    if (currentCardNumber === 2) {
        car1d1.style.display = "none";
        car1d2.style.display = "none";
        car1d3.style.display = "flex";
    }
}


card1ChangeButton1.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

card1ChangeButton2.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

card1ChangeButton3.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

cardCheck();

// so to do another experience, replace the card names with car#d... and replace the button names with card#ChangeButton... 
// where # = exp number and ... is just internal card number 

// image carousel for exp 1

