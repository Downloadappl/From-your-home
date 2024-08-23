fetch('/get-users')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('user-table-body');
        data.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td><button onclick="verifyUser(${user.id})">توثيق</button></td>
            `;
            tbody.appendChild(row);
        });
    });

function verifyUser(userId) {
    fetch(`/verify-user/${userId}`, {
        method: 'POST'
    }).then(response => response.json())
      .then(data => {
          alert(data.message);
          location.reload();
      });
}
