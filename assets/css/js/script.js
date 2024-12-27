document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully");
});
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const response = await fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });

  const resultText = await response.text();
  document.getElementById('formResponse').innerText = resultText;
});
