import { handleValidations } from "./field-validation.js";

const claimButton = document.querySelector('.claim-button');

claimButton.addEventListener('click', () => {    
    handleValidations();
});

document.body.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        handleValidations();
    }
})