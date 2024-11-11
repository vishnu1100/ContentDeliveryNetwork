
        function registerUser() {
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;

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

        function loginUser() {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

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
   