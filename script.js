document.querySelectorAll('.service').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission

      // Show the success message
      const successMessage = document.getElementById('form-message-success');
      if (successMessage) {
          successMessage.style.display = 'block';
      }

      // Clear form fields
      this.reset();
  });
});