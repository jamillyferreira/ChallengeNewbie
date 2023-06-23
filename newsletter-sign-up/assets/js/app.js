const form = document.querySelector('#form');
const inputEmail = document.querySelector('#email')

//Validação do form email
form.addEventListener('submit', (event) => {
    event.preventDefault()
// Verifica se o email está preenchido e se é valido
    if(inputEmail.value === '' || !isEmailValid(inputEmail.value)){
        alert('email required')
    }else {
      
    }

 form.submit(); //Envie o form
}) 


//função que valida email
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
        return false;
}