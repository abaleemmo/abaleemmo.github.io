// all of the variables 
    // all of the buttons 
        // all of the open buttons 
        let card1OpenButton = document.querySelector(".more-info-button-card1");
        let card2OpenButton = document.querySelector(".more-info-button-card2");
        let card3OpenButton = document.querySelector(".more-info-button-card3");
        let card4OpenButton = document.querySelector(".more-info-button-card4");
        let card5OpenButton = document.querySelector(".more-info-button-card5");
        let card6OpenButton = document.querySelector(".more-info-button-card6");
        let card7OpenButton = document.querySelector(".more-info-button-card7");
        let card8OpenButton = document.querySelector(".more-info-button-card8");
        let card9OpenButton = document.querySelector(".more-info-button-card9");
        let card10OpenButton = document.querySelector(".more-info-button-card10");
        let card11OpenButton = document.querySelector(".more-info-button-card11");
        let card12OpenButton = document.querySelector(".more-info-button-card12");
        let card13OpenButton = document.querySelector(".more-info-button-card13");
        let card14OpenButton = document.querySelector(".more-info-button-card14");
        let card15OpenButton = document.querySelector(".more-info-button-card15");
                 

        // all of the close buttons
        let card1CloseButton = document.querySelector(".expanded-card-close-button1");
        let card2CloseButton = document.querySelector(".expanded-card-close-button2");
        let card3CloseButton = document.querySelector(".expanded-card-close-button3");
        let card4CloseButton = document.querySelector(".expanded-card-close-button4");
        let card5CloseButton = document.querySelector(".expanded-card-close-button5");
        let card6CloseButton = document.querySelector(".expanded-card-close-button6");
        let card7CloseButton = document.querySelector(".expanded-card-close-button7");
        let card8CloseButton = document.querySelector(".expanded-card-close-button8");
        let card9CloseButton = document.querySelector(".expanded-card-close-button9");
        let card10CloseButton = document.querySelector(".expanded-card-close-button10");
        let card11CloseButton = document.querySelector(".expanded-card-close-button11");
        let card12CloseButton = document.querySelector(".expanded-card-close-button12");
        let card13CloseButton = document.querySelector(".expanded-card-close-button13");
        let card14CloseButton = document.querySelector(".expanded-card-close-button14");
        let card15CloseButton = document.querySelector(".expanded-card-close-button15");

    // all of the cards
        let card1 = document.querySelector(".expanded-card1");
        let card2 = document.querySelector(".expanded-card2");
        let card3 = document.querySelector(".expanded-card3");
        let card4 = document.querySelector(".expanded-card4");
        let card5 = document.querySelector(".expanded-card5");
        let card6 = document.querySelector(".expanded-card6");
        let card7 = document.querySelector(".expanded-card7");
        let card8 = document.querySelector(".expanded-card8");
        let card9 = document.querySelector(".expanded-card9");
        let card10 = document.querySelector(".expanded-card10");
        let card11 = document.querySelector(".expanded-card11");
        let card12 = document.querySelector(".expanded-card12");
        let card13 = document.querySelector(".expanded-card13");
        let card14 = document.querySelector(".expanded-card14");
        let card15 = document.querySelector(".expanded-card15");


// for card 1

    card1OpenButton.addEventListener("click", function(){
        card1.style.display = "flex";
    })

    card1CloseButton.addEventListener("click", function(){
        card1.style.display = "none";
    })

// for card 2

    card2OpenButton.addEventListener("click", function(){
        card2.style.display = "flex";
    })

    card2CloseButton.addEventListener("click", function(){
        card2.style.display = "none";
    })

// for card 3

    card3OpenButton.addEventListener("click", function(){
        card3.style.display = "flex";
    })

    card3CloseButton.addEventListener("click", function(){
        card3.style.display = "none";
    })

// for card 4

    card4OpenButton.addEventListener("click", function(){
        card4.style.display = "flex";
    })

    card4CloseButton.addEventListener("click", function(){
        card4.style.display = "none";
    })

// for card 5

    card5OpenButton.addEventListener("click", function(){
        card5.style.display = "flex";
    })

    card5CloseButton.addEventListener("click", function(){
        card5.style.display = "none";
    })

// for card 6

    card6OpenButton.addEventListener("click", function(){
        card6.style.display = "flex";
    })

    card6CloseButton.addEventListener("click", function(){
        card6.style.display = "none";
    })

// for card 7

    card7OpenButton.addEventListener("click", function(){
        card7.style.display = "flex";
    })

    card7CloseButton.addEventListener("click", function(){
        card7.style.display = "none";
    })

    // for card 8

    card8OpenButton.addEventListener("click", function(){
        card8.style.display = "flex";
    })

    card8CloseButton.addEventListener("click", function(){
        card8.style.display = "none";
    })

// for card 9

    card9OpenButton.addEventListener("click", function(){
        card9.style.display = "flex";
    })

    card9CloseButton.addEventListener("click", function(){
        card9.style.display = "none";
    })

// for card 10

    card10OpenButton.addEventListener("click", function(){
        card10.style.display = "flex";
    })

    card10CloseButton.addEventListener("click", function(){
        card10.style.display = "none";
    })

// for card 11

    card11OpenButton.addEventListener("click", function(){
        card11.style.display = "flex";
    })

    card11CloseButton.addEventListener("click", function(){
        card11.style.display = "none";
    })

// for card 12

    card12OpenButton.addEventListener("click", function(){
        card12.style.display = "flex";
    })

    card12CloseButton.addEventListener("click", function(){
        card12.style.display = "none";
    })

// for card 13

    card13OpenButton.addEventListener("click", function(){
        card13.style.display = "flex";
    })

    card13CloseButton.addEventListener("click", function(){
        card13.style.display = "none";
    })

// for card 14

    card14OpenButton.addEventListener("click", function(){
        card14.style.display = "flex";
    })

    card14CloseButton.addEventListener("click", function(){
        card14.style.display = "none";
    })

// for card 15

    card15OpenButton.addEventListener("click", function(){
        card15.style.display = "flex";
    })

    card15CloseButton.addEventListener("click", function(){
        card15.style.display = "none";
    })




// code for all of the carousels
    document.querySelectorAll('.image-carousel').forEach((carousel) => {
        let cards = carousel.querySelectorAll('.image-carousel-card');
        let currentCardIndex = 0;

        function showCard(index) {
            cards.forEach((card, i) => {
                card.style.display = i === index ? 'flex' : 'none';
            });
        }

        carousel.querySelector('.carousel-next-button').addEventListener('click', () => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            showCard(currentCardIndex);
        });

        showCard(currentCardIndex);
    });


