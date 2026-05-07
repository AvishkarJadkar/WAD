const services = [
    {
        title: "ACLS Ambulance",
        icon: "bi-truck-flatbed",
        description: "Advanced Cardiac Life Support units equipped with ventilators and defibrillators."
    },
    {
        title: "Air Ambulance",
        icon: "bi-helicopter",
        description: "Rapid inter-city transfer for critical patients requiring immediate surgery."
    },
    {
        title: "24/7 Trauma Care",
        icon: "bi-hospital",
        description: "Level 1 trauma centers prepared for specialized surgical intervention."
    },
    {
        title: "Blood Bank Link",
        icon: "bi-droplet-fill",
        description: "Instant access to a centralized city-wide blood and plasma database."
    }
];

function loadServices() {
    const container = document.getElementById('services-container');
    services.forEach(item => {
        container.innerHTML += `
            <div class="col-md-6 col-lg-3">
                <div class="card service-card p-4 text-center">
                    <i class="bi ${item.icon} service-icon"></i>
                    <h5 class="fw-bold">${item.title}</h5>
                    <p class="small text-muted mb-0">${item.description}</p>
                </div>
            </div>
        `;
    });
}

function showContact() {
    document.getElementById('main-hero').classList.add('d-none');
    document.getElementById('services').classList.add('d-none');
    document.getElementById('contact-section').classList.remove('d-none');
    window.scrollTo(0, 0);
}

function hideContact() {
    document.getElementById('main-hero').classList.remove('d-none');
    document.getElementById('services').classList.remove('d-none');
    document.getElementById('contact-section').classList.add('d-none');
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Request Sent! An ambulance has been dispatched to your current GPS location.');
    hideContact();
});

document.addEventListener('DOMContentLoaded', loadServices);