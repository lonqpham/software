function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

function showRequestForm() {
  document.getElementById('request-popup').style.display = 'block';
}

function hideRequestForm() {
  document.getElementById('request-popup').style.display = 'none';
}
