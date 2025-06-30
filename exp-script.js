// image carousel for exp 1

let currentCardNumber = 0;
let cardChangeButton1 = document.querySelector(".image-carousel-button1");
let cardChangeButton2 = document.querySelector(".image-carousel-button2");
let cardChangeButton3 = document.querySelector(".image-carousel-button3");
let card1 = document.querySelector(".image-carousel-card1");
let card2 = document.querySelector(".image-carousel-card2");
let card3 = document.querySelector(".image-carousel-card3");

function cardCheck(){
    if (currentCardNumber === 0) {
        card1.style.display = "flex";
        card2.style.display = "none";
        card3.style.display = "none";
    }
    if (currentCardNumber === 1) {
        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";
    }
    if (currentCardNumber === 2) {
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";
    }
}


cardChangeButton1.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

cardChangeButton2.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

cardChangeButton3.addEventListener("click", function(){
    currentCardNumber = currentCardNumber +1;
    if (currentCardNumber >2){   
        // so if you want more cards, just change this condition to desired number of cards -1
        currentCardNumber = 0;
    }
    cardCheck();
});

cardCheck();

// image carousel for exp 1
