document.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('regForm');
    const tableBody = document.getElementById('userTableBody');

    // --- LOGIC FOR REGISTRATION PAGE ---
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect data
            const userData = {
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                dob: document.getElementById('dob').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                mobile: document.getElementById('mobile').value,
                email: document.getElementById('email').value
            };

            // Get existing data from LocalStorage or create new array
            const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            // Push new data
            users.push(userData);

            // Save back to LocalStorage
            localStorage.setItem('registeredUsers', JSON.stringify(users));

            // Redirect to display page
            window.location.href = 'display.html';
        });
    }

    // --- LOGIC FOR DISPLAY PAGE ---
    if (tableBody) {
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        if (users.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No users registered yet.</td></tr>';
        } else {
            users.forEach(user => {
                const row = `<tr>
                    <td>${user.fname} ${user.lname}</td>
                    <td>${user.dob}</td>
                    <td>${user.gender}</td>
                    <td>${user.mobile}</td>
                    <td>${user.email}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }
    }
});