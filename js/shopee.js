

// $(document).ready(function(){
//     console.log('xin chào Giang');
// })

console.log('xin chào Giang');
// modal input
const modalInput = document.querySelector('.js-modal-input');
closeModalInput = document.querySelector('.js-modal-header-close');
closeModalInputOverlay = document.querySelector('.js-modal-overlay-input');
closeModalInput.addEventListener('click',hidenModalInput );
closeModalInputOverlay.addEventListener('click',hidenModalInput );

//var register = document.getElementById("js-register");modal-login
//const modal = document.getElementById('myModal');

// const modalRegisterForm = document.querySelector('.js-modal-register');
// const modalRegister = document.querySelector('.js-register');
// const callModalLogin = document.querySelector('.js-call-modal-login');
// closeRegister = document.querySelector('.js-modal-close');
// modalRegister.addEventListener('click',showModalRegister );
// closeRegister.addEventListener('click',hideModalRegister );
// callModalLogin.addEventListener('click',callShowModalLogin );


// const modalLoginForm = document.querySelector('.js-modal-login');
// const modalLogin = document.querySelector('.js-login');
// const callModalRegister = document.querySelector('.js-call-modal-register');
// closeLogin = document.querySelector('.js-modal-login-close');
// modalLogin.addEventListener('click',showModalLogin );
// closeLogin.addEventListener('click',hideModalLogin );
// callModalRegister.addEventListener('click',callShowModaRegister );

// close Modal Input
function hidenModalInput(){
    console.log('da click closeModalInput');
    modalInput.classList.add('close');
}

// register
// function showModalRegister(){
//     console.log('da click');
//     modalRegisterForm.classList.add('open');
    
// };

// function hideModalRegister(){
//     console.log('da click đóng modal');
//     modalRegisterForm.classList.remove('open');
// }

// login
// function showModalLogin(){
//     console.log('da click modal login');
//     modalLoginForm.classList.add('open');
// }

// function hideModalLogin(){
//     modalLoginForm.classList.remove('open');
// }

// call Modal Register
// function callShowModalLogin(){
//     modalRegisterForm.classList.remove('open');
//     modalLoginForm.classList.add('open');

// }

// call Modal Login
// function callShowModaRegister(){
//     // console.log('da click show register')
//     modalLoginForm.classList.remove('open');
//     modalRegisterForm.classList.add('open');
// }

