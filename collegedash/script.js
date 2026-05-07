// Initial Notice Data
let notices = [
    { id: "EDU-402", subject: "Submission of Lab Journals - IT Dept", cat: "Academic", date: "May 04, 2026" },
    { id: "EDU-399", subject: "Annual Tech-Fest 2026 Registration Open", cat: "Sports/Cultural", date: "May 02, 2026" },
    { id: "EDU-395", subject: "End Semester Examination Form - Final Call", cat: "Examination", date: "Apr 28, 2026" }
];

const stats = [
    { title: "Total Students", value: "4,250", icon: "bi-people", color: "primary" },
    { title: "Active Courses", value: "128", icon: "bi-journal-text", color: "success" },
    { title: "Campus Attendance", value: "92.4%", icon: "bi-bar-chart", color: "info" }
];

function renderStats() {
    const grid = document.getElementById('stat-grid');
    grid.innerHTML = stats.map(s => `
        <div class="col-md-4">
            <div class="card stat-card shadow-sm">
                <div class="card-body p-4 d-flex align-items-center">
                    <div class="icon-circle bg-${s.color} bg-opacity-10 text-${s.color} me-3">
                        <i class="bi ${s.icon} fs-4"></i>
                    </div>
                    <div>
                        <h6 class="text-muted mb-1 small uppercase">${s.title}</h6>
                        <h3 class="fw-bold m-0">${s.value}</h3>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTable() {
    const tbody = document.getElementById('notice-table-body');
    tbody.innerHTML = notices.map((n, index) => `
        <tr class="animate-fade-up">
            <td><span class="badge bg-light text-dark border fw-normal">${n.id}</span></td>
            <td class="fw-semibold text-dark">${n.subject}</td>
            <td><span class="badge bg-info-subtle text-info px-3">${n.cat}</span></td>
            <td class="text-muted small">${n.date}</td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteNotice(${index})">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Handling Add Notice
document.getElementById('noticeForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newNotice = {
        id: `EDU-${Math.floor(400 + Math.random() * 100)}`,
        subject: document.getElementById('nSubject').value,
        cat: document.getElementById('nCategory').value,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    notices.unshift(newNotice);
    renderTable();

    // Reset and Close Modal
    bootstrap.Modal.getInstance(document.getElementById('addNoticeModal')).hide();
    e.target.reset();
});

function deleteNotice(index) {
    if (confirm("Remove this announcement from the public portal?")) {
        notices.splice(index, 1);
        renderTable();
    }
}

// Initializing
document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderTable();
});