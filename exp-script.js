// all of the variables 
    // all of the buttons 
        // all of the open buttons 
        let card1OpenButton = document.querySelector(".more-info-button-card1");

        // all of the close buttons
        let card1CloseButton = document.querySelector(".expanded-card-close-button");

    // all of the cards
        let card1 = document.querySelector(".expanded-card1");


// for card 1

    card1OpenButton.addEventListener("click", function(){
        card1.style.display = "flex";
    })

    card1CloseButton.addEventListener("click", function(){
        card1.style.display = "none";
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


