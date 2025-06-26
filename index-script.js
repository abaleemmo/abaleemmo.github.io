let contactFormButton = document.querySelector(".contact");
let contactForm = document.querySelector(".contact-form");
let closeContactFormButton = document.querySelector(".close-contact-form");

contactFormButton.addEventListener("click", function(){
    contactForm.style.display = "flex";
});

closeContactFormButton.addEventListener("click", function(){
    contactForm.style.display = "none";
});
