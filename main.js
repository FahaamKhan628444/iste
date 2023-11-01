const form1 = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
//   const scriptURL = 'https://script.google.com/macros/s/AKfycby6hx_q9pAwLCEJrQ9uzfT5YjI35A_66q3_86-WX768RuvbjsbrNC22laNy9tRHhntwRA/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })
const scriptURL = 'https://script.google.com/macros/s/AKfycbz74neBG733z2e_0CVBu35yk5_CquJREZG4dBuB96S-DvcLyA9G9S4goaQqjIW8rmJ6PQ/exec'

const form = document.forms['form data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! you have registered successfully. See you at Event Date: 10th November 2023 " ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})