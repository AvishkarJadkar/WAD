const stats = [
    { label: "Active Flights", value: "24", icon: "bi-airplane", color: "primary" },
    { label: "Total Bookings", value: "1,450", icon: "bi-ticket-perforated", color: "success" },
    { label: "Delayed", value: "3", icon: "bi-clock-history", color: "danger" },
    { label: "Gate Alerts", value: "12", icon: "bi-exclamation-triangle", color: "warning" }
];

const flights = [
    { flight: "AI-102", passenger: "John Doe", pnr: "AXK921", status: "On-Time", seat: "12A" },
    { flight: "EK-503", passenger: "Sarah Connor", pnr: "PLM822", status: "Boarding", seat: "04C" },
    { flight: "QR-221", passenger: "Bruce Wayne", pnr: "ZQX101", status: "Delayed", seat: "01F" },
    { flight: "UA-990", passenger: "Ellen Ripley", pnr: "BVC773", status: "On-Time", seat: "22B" },
    { flight: "LH-441", passenger: "Tony Stark", pnr: "MKO990", status: "On-Time", seat: "02A" }
];

function loadDashboard() {
    // Load Stats
    const statGrid = document.getElementById('stat-cards');
    statGrid.innerHTML = stats.map(s => `
        <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body d-flex align-items-center">
                    <div class="stat-icon bg-${s.color} bg-opacity-10 text-${s.color} me-3">
                        <i class="bi ${s.icon} fs-4"></i>
                    </div>
                    <div>
                        <small class="text-muted d-block">${s.label}</small>
                        <h4 class="fw-bold mb-0">${s.value}</h4>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Load Flight Table
    const tableBody = document.getElementById('flight-table');
    tableBody.innerHTML = flights.map(f => {
        let statusClass = f.status === 'On-Time' ? 'success' : f.status === 'Boarding' ? 'warning' : 'danger';
        return `
            <tr>
                <td><span class="fw-bold">${f.flight}</span></td>
                <td>${f.passenger}</td>
                <td><span class="pnr-code">${f.pnr}</span></td>
                <td><span class="badge badge-soft-${statusClass}">${f.status}</span></td>
                <td>${f.seat}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-light border"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-light border text-danger"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', loadDashboard);