document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl = document.getElementById('formMessage');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name === '') {
    msgEl.textContent = 'Ju lutem shkruani emrin.';
    msgEl.style.color = 'red';
    return;
  }

  if (!emailRegex.test(email)) {
    msgEl.textContent = 'Email-i është i pasaktë.';
    msgEl.style.color = 'red';
    return;
  }

  if (message.length < 10) {
    msgEl.textContent = 'Mesazhi duhet të jetë i paktën 10 karaktere i gjatë.';
    msgEl.style.color = 'red';
    return;
  }

  msgEl.textContent = 'Mesazhi u dërgua me sukses!';
  msgEl.style.color = 'green';
  document.getElementById('contactForm').reset();
});