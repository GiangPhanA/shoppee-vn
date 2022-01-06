

// $(document).ready(function(){
//     console.log('xin chào Giang');
// })

console.log('xin chào Giang');

console.log('xin chào');
//var register = document.getElementById("js-register");modal-login
//const modal = document.getElementById('myModal');
const modalRegisterForm = document.querySelector('.js-modal-register');
const modalRegister = document.querySelector('.js-register');
closeRegister = document.querySelector('.js-modal-close');
modalRegister.addEventListener('click',showModalRegister );
closeRegister.addEventListener('click',hideModalRegister );


const modalLoginForm = document.querySelector('.js-modal-login');
const modalLogin = document.querySelector('.js-login');
closeLogin = document.querySelector('.js-modal-login-close');
modalLogin.addEventListener('click',showModalLogin );
closeLogin.addEventListener('click',hideModalLogin );

// register
function showModalRegister(){
    console.log('da click');
    modalRegisterForm.classList.add('open');
    
};

function hideModalRegister(){
    console.log('da click đóng modal');
    modalRegisterForm.classList.remove('open');
}

// login
function showModalLogin(){
    console.log('da click modal login');
    modalLoginForm.classList.add('open');
}

function hideModalLogin(){
    modalLoginForm.classList.remove('open');
}
