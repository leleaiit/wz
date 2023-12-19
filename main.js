function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 存储用户名和密码
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('注册成功，请返回登录！');
    window.location.href = 'login.html';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 获取存储的用户名和密码
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('登录成功！');
        window.location.href = 'welcome.html';
    } else {
        alert('用户名或密码错误！');
    }
}