window.onload = function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling with validation
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        // Validate form fields
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // If all fields are filled, submit the form
        const formData = new FormData(this);

        fetch('https://example.com/your-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Display thank you message
            document.getElementById('message').textContent = 'Thank you for contacting me!';
            // Clear form fields
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // document.getElementById('form-message').textContent = 'Oops! Something went wrong. Please try again later.';
            document.getElementById('form-message').textContent = 'Thank you for contacting me!.';
        });
    });
};
