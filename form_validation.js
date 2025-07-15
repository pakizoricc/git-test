document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let hasError = false;

  // First Name
  const firstName = document.getElementById('fname');
  const firstNameError = document.getElementById('fname-error');
  if (!firstName.value) {
    firstNameError.style.display = 'block';
    hasError = true;
  } else {
    firstNameError.style.display = 'none';
  }

  // Last Name
  const lastName = document.getElementById('lname');
  const lastNameError = document.getElementById('lname-error');
  if (!lastName.value) {
    lastNameError.style.display = 'block';
    hasError = true;
  } else {
    lastNameError.style.display = 'none';
  }

  // Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.style.display = 'block';
    hasError = true;
  } else {
    emailError.style.display = 'none';
  }

  // Query Type
  const queryCheckboxes = document.querySelectorAll('input[name="query_type"]:checked');
  const queryError = document.getElementById('query-error');
  if (queryCheckboxes.length === 0) {
    queryError.style.display = 'block';
    hasError = true;
  } else {
    queryError.style.display = 'none';
  }

  // Message
  const message = document.getElementById('message');
  const messageError = document.getElementById('message-error');
  if (!message.value) {
    messageError.style.display = 'block';
    hasError = true;
  } else {
    messageError.style.display = 'none';
  }

  // Consent
  const consent = document.getElementById('consent');
  const consentError = document.getElementById('consent-error');
  if (!consent.checked) {
    consentError.style.display = 'block';
    hasError = true;
  } else {
    consentError.style.display = 'none';
  }

  /*if (!hasError) {
    alert("Form submitted successfully!");
  }*/

  // for fields that are empty -> red border of input
  const empty_inputs = document.querySelectorAll('input');
  for (const empty_input of empty_inputs) {
    if (!empty_input.value) {
      empty_input.classList.add('input-error');
    }
  }

  // when the message is empty
  const empty_message = document.querySelector('textarea');
  if (!empty_message.value) {
      empty_message.classList.add('input-error');
  }
  
  const popup = document.querySelector('.container');

  if (!hasError) {
    popup.classList.add('show-popup');

    document.getElementById('contactForm').reset();
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => input.classList.remove('input-error'));

    setTimeout(() => {
      popup.classList.remove('show-popup');
    }, 3500);
    } else {
      popup.classList.remove('show-popup');
  }

});
