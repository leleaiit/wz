function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 非空校验
    if (!username || !password) {
        alert('用户名或密码不能为空！');
        return;
    }

    // 检查用户名和密码的长度是否符合规定
    if (username.length < 3 || password.length < 6) {
        alert('用户名的长度不能少于3个字符，密码的长度不能少于6个字符！');
        return;
    }

    // 检查密码是否含有数字，大写字母，小写字母
    var hasNumber = /\d/;
    var hasUpperCase = /[A-Z]/;
    var hasLowerCase = /[a-z]/;
    
    if (!(hasNumber.test(password) && hasUpperCase.test(password) 
    && hasLowerCase.test(password) )) {
        alert('密码必须包含数字，大写字母，小写字母！');
        return;
    }

    // 存储用户名和密码
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('注册成功，请返回登录！');
    return window.location.href = 'login.html';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 添加输入校验
    if (!username || !password) {
        alert('用户名或密码不能为空！');
        return;
    }

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
