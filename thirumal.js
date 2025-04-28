document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const phoneNumber = '9345205513'; // The number to receive the message
    const smsText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Check if the user is on a mobile device
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // If the user is on mobile, open the SMS app
        const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(smsText)}`;
        window.location.href = smsLink;
    } else {
        // If on desktop, open email client
        const emailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const emailLink = `mailto:${phoneNumber}@example.com?subject=New Message&body=${encodeURIComponent(emailText)}`;
        
        // Open the email client
        window.location.href = emailLink;
    }
});
// thirumal.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
// thirumal.js

// Contact form submit handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // simple success alert
    alert('Thank you for contacting us! We will respond shortly.');
    
    // form reset after submit
    this.reset();
  });
    




