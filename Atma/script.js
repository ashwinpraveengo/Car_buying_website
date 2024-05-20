var users = [
  { username: 'user', password: 'user_password' }
];
function isLogin(username, password) {
  var user = users.find(function(user) {
    return user.username === username && user.password === password;
  });
  if (user) {
    let url = "../Homepage/Homepage.html"
    window.open(url)
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
    let url = "../AdminPage/AdminPage.html"
    window.open(url)
  } else {
    document.getElementById('adminMessage').innerHTML = 'Invalid username or password for admin.';
  }
});
