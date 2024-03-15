document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    
    // Check if username and password are correct (dummy validation)
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.innerText = 'Invalid username or password';
    }
});
