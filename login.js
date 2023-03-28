const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  localStorage.setItem('username', username);
  window.location.href = 'game.html';
});