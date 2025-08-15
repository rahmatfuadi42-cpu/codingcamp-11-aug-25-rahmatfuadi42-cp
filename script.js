// Welcome Speech
const userName = prompt("What is your name?");
const welcomeEl = document.getElementById('welcome');
if(userName && userName.trim() !== "") {
  welcomeEl.textContent = `Welcome, ${userName}!`;
} else {
  welcomeEl.textContent = "Welcome to our website!";
}

// Message Us Form
document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <strong>Pesan terkirim!</strong><br>
    Nama: ${name} <br>
    Email: ${email} <br>
    Pesan: ${message}
  `;
  resultDiv.classList.remove('hidden');

  // Reset form
  this.reset();
});
