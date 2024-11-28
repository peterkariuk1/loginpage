const passwordInputElement = document.querySelector('.password-input');
const toggleImage = document.querySelector('.toggle-image');
const loginButtonElement = document.querySelector('.login-button');
const loginButtonText = document.querySelector('.login-button p');
const buttonLoaderElement = document.querySelector('.button-loader-container');


let isFirstImage = true;

toggleImage.addEventListener('click', () => {
    if (isFirstImage) {
        toggleImage.src = './images/hidepassword.png';
        passwordInputElement.type = 'text';

    } else {
        toggleImage.src = './images/showpassword.png';
        passwordInputElement.type = 'password';
    }
    isFirstImage = !isFirstImage;
});

loginButtonElement.addEventListener('click', () => {

    buttonLoaderElement.classList.add('loading');
    loginButtonText.classList.add('loading');

    setTimeout(() => {
        buttonLoaderElement.classList.remove('loading');
        loginButtonElement.classList.add('success');
        loginButtonElement.innerHTML = 'Successful';
    }, 3000);



});