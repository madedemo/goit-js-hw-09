document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const localStorageKey = 'feedback-form-state';

  let formData = {};
  try {
    formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  feedbackForm.elements.email.value = formData.email || '';
  feedbackForm.elements.message.value = formData.message || '';

  feedbackForm.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    if (!email || !message) {
      alert('Please complete both email and message fields!');
      return;
    }

    console.log({ email, message });

    feedbackForm.reset();
    localStorage.removeItem(localStorageKey);
  });
});
