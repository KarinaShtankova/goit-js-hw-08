import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  mail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.mail.addEventListener('input', onMailInput);
// refs.textarea.addEventListener('input', onTextareaInput);

const userData = {
  email: '',
  message: '',
};

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    userData.email = evt.target.value;
  }

  if (evt.target.name === 'message') {
    userData.message = evt.target.value;
  }

  //   console.log('email:', userData.email);
  //   console.log('message:', userData.message);

  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem('feedback-form-state', userDataJSON);
}

const feedbackFormJSON = localStorage.getItem('feedback-form-state');
const feedbackForm = JSON.parse(feedbackFormJSON);

window.addEventListener('load', event => {
  //   console.log('window event:', event);
  //   console.log(feedbackFormJSON);

  if (feedbackForm) {
    refs.mail.value = feedbackForm.email;
    refs.textarea.value = feedbackForm.message;
    userData.email = feedbackForm.email;
    userData.message = feedbackForm.message;
  }
});

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(userData);
  //   refs.textarea.textContent = '';
  //   refs.mail.value = '';

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
