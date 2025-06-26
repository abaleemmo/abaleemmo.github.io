// made for card 1, should be able to copy and paste for all of the cards and just change the numbers

card1Button = document.querySelector(".more-info-button-card1");
expandedCard1 = document.querySelector(".expanded-card1");
card1CloseButton = document.querySelector(".expanded-card-close-button")

card1Button.addEventListener("click", function(){
    expandedCard1.style.display = "block";
});

card1CloseButton.addEventListener("click", function(){
    expandedCard1.style.display = "none";
})