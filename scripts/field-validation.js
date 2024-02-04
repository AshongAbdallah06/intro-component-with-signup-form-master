// Input
let fNameInput = document.querySelector('.fname-input');
let lNameInput = document.querySelector('.lname-input');
let emailInput = document.querySelector('.email-input');
let pWorddInput = document.querySelector('.pword-input');

// Error Messages
const fNameError = document.querySelector('.fname-error-message');
const lNameError = document.querySelector('.lname-error-message');
const emailError = document.querySelector('.email-error-message');
const pWordError = document.querySelector('.pword-error-message');

// Error Icons
const fNameIcon = document.querySelector('.fname-error-icon');
const lNameIcon = document.querySelector('.lname-error-icon');
const emailIcon = document.querySelector('.email-error-icon');
const pWordIcon = document.querySelector('.pword-error-icon');


function validateFields(names, regex, label, errorMessage, errorIcon) {
    if (names.value === '') {
        names.style.borderColor = 'red';
        errorMessage.innerHTML = `${label.innerHTML} cannot be empty`;
        errorMessage.classList.add('show-error-message');
        errorIcon.classList.add('show-error-icon');    
    } else if (names.value.match(regex)) {
        names.style.borderColor = 'rgb(225, 225, 225)';
        errorMessage.classList.remove('show-error-message');
        errorIcon.classList.remove('show-error-icon');
    } else if (!names.value.match(regex)) {
        names.style.borderColor = 'red';
        errorMessage.innerHTML = `Enter a valid ${label.innerHTML}`;
        errorMessage.classList.add('show-error-message');
        errorIcon.classList.add('show-error-icon');
    }

}
 

export function handleValidations() {
    validateFields(fNameInput, /^[a-z]+$/i, document.querySelector('.fname-label'), fNameError, fNameIcon);
    validateFields(lNameInput, /^[a-z]+$/i, document.querySelector('.lname-label'), lNameError, lNameIcon);
    validateFields(emailInput, /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i, document.querySelector('.email-label'), emailError, emailIcon);
    validateFields(pWorddInput, /^[^ ][0-9a-z\.?]{8,}$/i, document.querySelector('.pword-label'), pWordError, pWordIcon);
}