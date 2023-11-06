const scriptURL = 'https://script.google.com/macros/s/AKfycbw5T8_nZLI3JIvEAGcIQHl6p1Hsh5SqxIFYrabwp4H1zf5JQKR_ro1_HD02WlWcz8ayYg/exec'

const form = document.forms['form data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! you have registered successfully. See you at Event Date: 10th November 2023 " ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
