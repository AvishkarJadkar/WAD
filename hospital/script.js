let count = 0;

const registrationForm = document.getElementById('registrationForm');
const patientCountDisplay = document.getElementById('patientCount');
const tableBody = document.getElementById('patientTableBody');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. Get input values
    const name = document.getElementById('patientName').value;
    const phone = document.getElementById('patientPhone').value;
    const dept = document.getElementById('department').value;

    // 2. Increment count
    count++;
    patientCountDisplay.textContent = count;

    // 3. Create a new table row
    const newRow = document.createElement('tr');
    newRow.classList.add('new-row-animation'); // Add visual feedback

    newRow.innerHTML = `
        <td><span class="badge bg-light text-dark">#${100 + count}</span></td>
        <td class="fw-bold">${name}</td>
        <td>${phone}</td>
        <td><span class="badge bg-info-subtle text-info-emphasis">${dept}</span></td>
    `;

    // 4. Add row to table (at the top)
    tableBody.prepend(newRow);

    // 5. Reset form
    registrationForm.reset();
});