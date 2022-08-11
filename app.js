// import functions and grab DOM elements


const pollFormEl = document.getElementById('form-input');


// let state




pollFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('form submitted');
})