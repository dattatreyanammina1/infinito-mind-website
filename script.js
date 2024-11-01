document.querySelectorAll('.service').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Show the success message
    document.getElementById('form-message-success').style.display = 'block';

    // Clear form fields (optional)
    document.getElementById('contactForm').reset();
  });