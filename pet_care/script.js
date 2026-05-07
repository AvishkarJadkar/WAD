// Service Data Object
const services = [
    {
        title: "Pet Grooming",
        icon: "bi-scissors",
        desc: "Full spa treatment including baths, haircuts, and nail trimming."
    },
    {
        title: "Veterinary Care",
        icon: "bi-heart-pulse-fill",
        desc: "Regular check-ups and vaccinations by certified professionals."
    },
    {
        title: "Pet Daycare",
        icon: "bi-house-heart-fill",
        desc: "A safe, fun environment for your pets while you're at work."
    },
    {
        title: "Training",
        icon: "bi-award-fill",
        desc: "Behavioral training for dogs of all ages and breeds."
    }
];

// Load Services into the Grid
function loadServices() {
    const container = document.getElementById('services-container');
    services.forEach(service => {
        container.innerHTML += `
            <div class="col-md-3">
                <div class="card service-card h-100">
                    <i class="bi ${service.icon} service-icon"></i>
                    <h4 class="fw-bold">${service.title}</h4>
                    <p class="text-muted small">${service.desc}</p>
                </div>
            </div>
        `;
    });
}

// Function to toggle between Home and Contact Page
function toggleContact() {
    const mainSections = ['services', 'header', 'navbar-brand'].map(id => document.querySelector(id == 'header' ? 'header' : id == 'services' ? '#services' : '.navbar-brand'));
    const contactPage = document.getElementById('contact-page');
    const hero = document.querySelector('header');
    const servicesSec = document.getElementById('services');

    if (contactPage.classList.contains('d-none')) {
        contactPage.classList.remove('d-none');
        hero.classList.add('d-none');
        servicesSec.classList.add('d-none');
        window.scrollTo(0, 0);
    } else {
        contactPage.classList.add('d-none');
        hero.classList.remove('d-none');
        servicesSec.classList.remove('d-none');
    }
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting Paws & Whiskers! We will call you soon.');
    toggleContact();
});

// Initialize
document.addEventListener('DOMContentLoaded', loadServices);