document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'email': document.getElementById('email').value,
            'password': document.getElementById('password').value
        })
    }).then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              document.getElementById('login-container').style.display = 'none';
          } else {
              alert('خطأ في تسجيل الدخول');
          }
      });
});
