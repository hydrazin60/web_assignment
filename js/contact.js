document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showFormStatus('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showFormStatus('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (in a real app, this would be an AJAX call)
        setTimeout(() => {
            contactForm.reset();
            showFormStatus('Your message has been sent successfully!', 'success');
        }, 1000);
    });

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Show form status message
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        formStatus.classList.add(type);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
});