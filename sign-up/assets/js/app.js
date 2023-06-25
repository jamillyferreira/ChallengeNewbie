const form = document.querySelector('#form');
const card1 = document.querySelector('.container');
const card2 = document.querySelector('.card-2');
const inputEmail = document.querySelector('#email')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = document.querySelector('.error');
      if(inputEmail.value.length === '' || !isEmailValid(inputEmail.value)){
        inputEmail.style.border = '1px solid #FF527B'
        error.style.display = 'block'
    } else {
        card1.classList.add('hide')
        card2.classList.remove('hide')
    }
    
})

//função que valida email
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;;
    }
    return false;
}


