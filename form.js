const button = document.getElementById('movingButton');


let isOnRight = false;

button.addEventListener('mouseover', () => {
    if (isOnRight) {
        const distance = Math.floor(Math.random() * 25) + 25;
        button.style.transform = `translateY(-${distance}px)`;
    } else {
        const distance = Math.floor(Math.random() * 25) + 25;
        button.style.transform = `translateY(${distance}px)`;
    }
    isOnRight = !isOnRight;
});

document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('formButton');
    const formContainer = document.getElementById('formContainer');

    openFormButton.addEventListener('click', function () {
        formContainer.classList.toggle('hidden');
    });
});

document.getElementById('signupForm').addEventListener('submit', (event)=>{
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');

    let isValid=true;

    emailError.textContent='';

    const emailTester= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailTester.test(email))
        {
            emailError.textContent = 'Introduceti un email valid';
            isValid=false
        }
    if(isValid)
        {
            alert('Formularul a fost completat cu succes');
        }
})
