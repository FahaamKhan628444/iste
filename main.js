const scriptURL = 'https://script.google.com/macros/s/AKfycbz74neBG733z2e_0CVBu35yk5_CquJREZG4dBuB96S-DvcLyA9G9S4goaQqjIW8rmJ6PQ/exec'

const form = document.forms['form data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! you have registered successfully. See you at Event Date: 10th November 2023 " ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
