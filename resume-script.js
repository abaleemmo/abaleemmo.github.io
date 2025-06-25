let openReferencesButton = document.querySelector(".request-references-button");
let referencesForm = document.querySelector(".references-form");
let closeReferencesButton = document.querySelector(".close-references-form-button")

openReferencesButton.addEventListener("click", function(){
    referencesForm.style.display = "flex";
});

closeReferencesButton.addEventListener("click", function(){
    referencesForm.style.display = "none";
});