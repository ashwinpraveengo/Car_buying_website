document.addEventListener("DOMContentLoaded", () => {
    openTab(null, 'UserLogin');
    localStorage.setItem('defaultUser', JSON.stringify({ username: 'user', password: 'user_password' }));
    localStorage.setItem('defaultAdmin', JSON.stringify({ username: 'admin', password: 'admin_password' }));
});
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    if (evt) {
        evt.currentTarget.style.backgroundColor = "#ccc";
    }
}
document.getElementById('userLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('userUsername').value;
    const password = document.getElementById('userPassword').value;
    const storedUser = JSON.parse(localStorage.getItem('defaultUser'));
    if (storedUser && username === storedUser.username && password === storedUser.password) {
        alert('User login successful');
        window.location.href = "../HomePage/HomePage.html";
    } else {
        alert('Invalid username or password');
    }
});
document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const storedAdmin = JSON.parse(localStorage.getItem('defaultAdmin'));
    if (storedAdmin && username === storedAdmin.username && password === storedAdmin.password) {
        alert('Admin login successful');
        window.location.href = "../AdminPage/AdminPage.html";
    } else {
        alert('Invalid username or password');
    }
});
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const newUser = { username, email, password };
    localStorage.setItem('defaultUser', JSON.stringify(newUser));
    alert('Registration successful. You can now log in with your credentials.');
});
