const pricingData = {
    starter: {
        title: "Starter Package (3kW)",
        price: "₹1,80,000",
        features: ["Ideal for small families", "Saves ~₹3,000/month", "Standard Net Metering", "5 Years Warranty"],
        offer: "Flat 10% Discount on Government Subsidy"
    },
    standard: {
        title: "Standard Package (5kW)",
        price: "₹2,90,000",
        features: ["Ideal for 3BHK houses", "Saves ~₹6,000/month", "High-efficiency Mono-PERC panels", "10 Years Warranty"],
        offer: "Free AMC (Maintenance) for 1 Year"
    },
    premium: {
        title: "Premium Package (10kW)",
        price: "₹5,50,000",
        features: ["Ideal for large villas/offices", "Saves ~₹12,000/month", "Hybrid Inverter with Battery Hub", "25 Years Panel Life"],
        offer: "Instant ₹20,000 Cashback on Down Payment"
    }
};

function showPricing(tier) {
    const data = pricingData[tier];
    const display = document.getElementById('pricingDisplay');

    display.innerHTML = `
        <div class="col-md-8">
            <div class="card offer-card shadow-lg p-5 animate-fade">
                <h3 class="fw-bold">${data.title}</h3>
                <div class="price-tag mb-3">${data.price}</div>
                <div class="badge bg-warning text-dark p-2 mb-4">SPECIAL OFFER: ${data.offer}</div>
                <ul class="list-unstyled text-start mx-auto" style="max-width: 300px;">
                    ${data.features.map(f => `<li>✅ ${f}</li>`).join('')}
                </ul>
                <button class="btn btn-dark mt-4 px-5" onclick="alert('Thank you! Our expert will call you shortly.')">Book Inspection</button>
            </div>
        </div>
    `;
}