
// for registering users function  starts
        function register() {
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                document.getElementById('message').textContent = 'Please fill in both fields for registration.';
                return;
            }

            fetch('https://pythonflaskapi-gvv5.onrender.com/register', {
                method: 'POST',
                body: new URLSearchParams({
                    'username': username,
                    'password': password
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message.includes('successful')) {
                    document.getElementById('message').textContent = 'Registration successful!';
                } else {
                    document.getElementById('message').textContent = data.message;
                }
            })
            .catch(error => {
                document.getElementById('message').textContent = 'An error occurred during registration.';
            });
        }


// for registering users function  ends 


// for logging in  users function starts  
         function login() {
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                document.getElementById('message').textContent = 'Please fill in both fields for login.';
                return;
            }

            fetch('https://pythonflaskapi-gvv5.onrender.com/login', {
                method: 'POST',
                body: new URLSearchParams({
                    'username': username,
                    'password': password
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message.includes('successful')) {
                    document.getElementById('message').textContent = 'Login successful!';
                } else {
                    document.getElementById('message').textContent = data.message;
                }
            })
            .catch(error => {
                document.getElementById('message').textContent = 'An error occurred during login.';
            });
        }
   

// for logging in  users function ends 