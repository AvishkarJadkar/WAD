let kpis = [
    { title: "Total Revenue", value: "$425,000", change: "+12.5%", icon: "bi-currency-dollar", color: "primary" },
    { title: "New Clients", value: "1,240", change: "+8.2%", icon: "bi-person-plus", color: "success" },
    { title: "Pending Tasks", value: "45", change: "-2", icon: "bi-list-task", color: "warning" },
    { title: "Retention", value: "94.2%", change: "+1.4%", icon: "bi-pie-chart", color: "info" }
];

let operations = [
    { id: "#OP-9842", client: "TechCorp Industries", date: "Oct 24, 2026", status: "Completed", value: "$12,400" },
    { id: "#OP-9843", client: "BlueWater Media", date: "Oct 25, 2026", status: "Pending", value: "$8,200" }
];

function renderDashboard() {
    const kpiGrid = document.getElementById('kpi-container');
    const tableBody = document.getElementById('table-body');

    // Render KPIs
    kpiGrid.innerHTML = kpis.map(item => `
        <div class="col-md-6 col-xl-3">
            <div class="card kpi-card shadow-sm">
                <div class="card-body d-flex align-items-center">
                    <div class="icon-box bg-${item.color} bg-opacity-10 text-${item.color} me-3"><i class="bi ${item.icon} fs-4"></i></div>
                    <div>
                        <p class="text-muted mb-1 small">${item.title}</p>
                        <h4 class="mb-0 fw-bold">${item.value}</h4>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Render Table
    tableBody.innerHTML = operations.map((op, index) => `
        <tr>
            <td class="fw-medium">${op.id}</td>
            <td>${op.client}</td>
            <td class="text-muted small">${op.date}</td>
            <td><span class="badge bg-${op.status === 'Completed' ? 'success' : op.status === 'Pending' ? 'warning' : 'primary'}-subtle text-${op.status === 'Completed' ? 'success' : op.status === 'Pending' ? 'warning' : 'primary'} px-3">${op.status}</span></td>
            <td class="fw-bold">${op.value}</td>
            <td class="text-end"><button class="btn btn-sm btn-outline-danger border-0" onclick="deleteEntry(${index})"><i class="bi bi-trash"></i></button></td>
        </tr>
    `).join('');
}

document.getElementById('addEntryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    operations.push({
        id: `#OP-${Math.floor(1000 + Math.random() * 9000)}`,
        client: document.getElementById('clientName').value,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: document.getElementById('opStatus').value,
        value: `$${Number(document.getElementById('opValue').value).toLocaleString()}`
    });
    renderDashboard();
    bootstrap.Modal.getInstance(document.getElementById('addEntryModal')).hide();
    this.reset();
});

function deleteEntry(index) {
    if (confirm("Delete this operation?")) {
        operations.splice(index, 1);
        renderDashboard();
    }
}

document.addEventListener('DOMContentLoaded', renderDashboard);