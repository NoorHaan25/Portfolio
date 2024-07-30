const toTop= document.querySelector('.to-top');
window.addEventListener('scroll', function(){
  this.scrollY > 100 ? toTop.classList.add('active') : toTop.classList.remove('active');
});
toTop.addEventListener('click', function(){
  window.scrollTo({
    top:0
  })
})
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const form = document.querySelector('#form');
console.log(nameInput  , emailInput , messageInput , submitButton);
const nameErrorMessage = document.querySelector('#name-error');
const emailErrorMessage = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
console.log(nameErrorMessage , emailErrorMessage , messageError);
let isNameValid = false;
let isEmailValid = false;
let isMessageValid = false;
/*    validName    */
function validName(){
  let textReg = /\w{3,}/gi
  const text = nameInput.value;
  const validText = textReg.test(text);
  isNameValid= validText; 
  if(!isNameValid){
    nameInput.classList.add('invalid');
  nameErrorMessage.style.cssText = 'display: block ';
  }else{
    nameInput.classList.remove('invalid');
    nameErrorMessage.style.cssText = 'display: none ';
  }
}
/*    validEmail    */
function validEmail() {
  let emailReg = /\w+(\d{2})?@\w+.\w+/gi;
  const email = emailInput.value;
  const validEmail = emailReg.test(email);
  isEmailValid = validEmail;
  if(!isEmailValid){
    emailInput.classList.add('invalid');
    emailErrorMessage.style.cssText = 'display: block ';
  }else{
    emailInput.classList.remove('invalid');
    emailErrorMessage.style.cssText = 'display: none ';
  }
}
/*    validMessage    */
function validMessage(){
  let textReg = /\w{3,}/gi
  const text = messageInput.value;
  const validText = textReg.test(text);
  isMessageValid= validText; 
  if(!isMessageValid){
  messageInput.classList.add('invalid');
  messageError.style.cssText = 'display: block ';
  }else{
    messageInput.classList.remove('invalid');
    messageError.style.cssText = 'display: none ';
  }
}
form.addEventListener('submit', function(event) {
  validName();
  validEmail();
  validMessage();
  if (!isNameValid || !isEmailValid || !isMessageValid) {
    event.preventDefault();
  }
});
