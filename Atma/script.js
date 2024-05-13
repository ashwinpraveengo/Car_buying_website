var users = [
    { username: 'user', password: 'user_password' },
  ];
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user = users.find(function(user) {
      return user.username === username && user.password === password;
    });
    if (user) {
      document.getElementById('message').innerHTML = 'User login successful!';
    } else {
      document.getElementById('message').innerHTML = 'Invalid username or password for user.';
    }
  });
  document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var adminUsername = document.getElementById('adminUsername').value;
    var adminPassword = document.getElementById('adminPassword').value;
    if (adminUsername === 'admin' && adminPassword === 'admin_password') {
      document.getElementById('adminMessage').innerHTML = 'Admin login successful!';
    } else {
      document.getElementById('adminMessage').innerHTML = 'Invalid username or password for admin.';
    }
  });
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var existingUser = users.find(function(user) {
      return user.username === newUsername;
    });
    if (existingUser) {
      document.getElementById('registerMessage').innerHTML = 'Username already exists. Please choose another one.';
    } else {
      users.push({ username: newUsername, password: newPassword });
      document.getElementById('registerMessage').innerHTML = 'User registered successfully!';
    }
  });
  
