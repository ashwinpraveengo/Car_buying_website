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
      window.location.href = "file:///C:/Users/atmak/OneDrive/Desktop/UID PROJECT/Car_buying_website/Atma/loginpage.html";
    }
});
