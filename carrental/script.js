const pricingPlans = {
    standard: {
        title: "Standard Daily Rate",
        price: "₹1,999",
        unit: "/per day",
        details: ["Unlimited Kilometers", "24/7 Roadside Assistance", "Basic Insurance Included"],
        bonus: "Save 5% on 3+ day bookings"
    },
    weekend: {
        title: "Weekend Getaway Deal",
        price: "₹4,499",
        unit: "/Fri-Sun",
        details: ["Free Extra Driver", "Full Tank Policy", "Doorstep Delivery"],
        bonus: "Includes cleaning fee waiver"
    },
    monthly: {
        title: "Monthly Subscription",
        price: "₹34,999",
        unit: "/per month",
        details: ["Maintenance included", "Swap cars twice a month", "No long-term contract"],
        bonus: "Free Airport Pickup/Drop"
    }
};

function displayOffer(type) {
    const data = pricingPlans[type];
    const container = document.getElementById('offerDisplay');

    container.innerHTML = `
        <div class="col-md-8">
            <div class="card p-5 border-0 shadow-lg animate__animated animate__fadeInUp">
                <h3 class="fw-bold mb-3">${data.title}</h3>
                <div class="price-big mb-2">${data.price}<span class="fs-5 text-muted"> ${data.unit}</span></div>
                <div class="badge bg-primary mb-4 p-2">${data.bonus}</div>
                <ul class="list-unstyled mb-4">
                    ${data.details.map(item => `<li class="mb-2">✅ ${item}</li>`).join('')}
                </ul>
                <button class="btn btn-dark btn-lg w-100" onclick="alert('Redirecting to Payment Gateway...')">Confirm Booking</button>
            </div>
        </div>
    `;
}