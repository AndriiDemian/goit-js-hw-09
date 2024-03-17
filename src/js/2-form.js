const form = document.querySelector('.feedback-form');
const mail = document.querySelector('.inpEmail');
const message = document.querySelector('.txtInput');
const textarea = form.elements.message;
const localStorageKey = 'goit-example-message';

// textarea.value = localStorage.getItem(localStorageKey) ?? "";
let storageData = localStorage.getItem(localStorageKey);
// console.log(JSON.parse(storageData));
let storDataObj = storageData ? JSON.parse(storageData) : {};
if (storDataObj.message) {
  message.value = storDataObj.message;
}

if (storDataObj.email) {
  mail.value = storDataObj.email;
}

form.addEventListener('input', evt => {
  if (evt.target.className === 'txtInput') {
    storDataObj.message = evt.target.value.trim();
  } else if (evt.target.className === 'inpEmail') {
    storDataObj.email = evt.target.value.trim();
  }

  localStorage.setItem(localStorageKey, JSON.stringify(storDataObj));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (storDataObj.hasOwnProperty('message')) {
    console.log(storDataObj);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert("fill all form fields")
  }
});
