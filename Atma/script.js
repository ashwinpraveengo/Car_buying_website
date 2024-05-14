var users = [
  { username: 'user', password: 'user_password' }
];

function isLogin(username, password) {
  var user = users.find(function(user) {
    return user.username === username && user.password === password;
  });
  if (user) {
    window.location.href = "file:///C:/Users/atmak/OneDrive/Desktop/UID%20PROJECT/Car_buying_website/HomePage/HomePage.html";
    return true; 
  } else {
    return false; 
  }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (isLogin(username, password)) {
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
    window.location.href = "file:///C:/Users/atmak/OneDrive/Desktop/UID PROJECT/Car_buying_website/AdminPage/AdminPage.html";
  } else {
    document.getElementById('adminMessage').innerHTML = 'Invalid username or password for admin.';
  }
});
