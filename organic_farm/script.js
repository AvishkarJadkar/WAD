const plans = {
    weekly: {
        title: "Standard Weekly Box",
        price: "$25",
        features: ["5kg Mixed Vegetables", "1kg Seasonal Fruits", "Doorstep Delivery"],
        note: "Perfect for couples."
    },
    family: {
        title: "Large Family Bundle",
        price: "$45",
        features: ["10kg Mixed Vegetables", "3kg Seasonal Fruits", "1 Dozen Farm Eggs", "Free Delivery"],
        note: "Best value for families of 4+."
    },
    bulk: {
        title: "Bulk Community Order",
        price: "$120",
        features: ["30kg Harvest Mix", "Assorted Farm Preserves", "Priority Early Harvest", "Free Delivery"],
        note: "Ideal for community sharing."
    }
};

function updateOffer(type) {
    const data = plans[type];
    const container = document.getElementById('priceDisplay');

    // Simple fade animation via JS by re-injecting content
    container.innerHTML = `
        <div class="col-md-8 animate__animated animate__fadeIn">
            <div class="card p-5 border-0 shadow-lg rounded-4">
                <h3 class="fw-bold">${data.title}</h3>
                <div class="price-tag my-3">${data.price}<span class="fs-6 text-muted"> /order</span></div>
                <p class="text-success fw-bold">${data.note}</p>
                <ul class="list-unstyled mb-4">
                    ${data.features.map(f => `<li class="mb-2">🌿 ${f}</li>`).join('')}
                </ul>
                <button class="btn btn-farm btn-lg px-5" onclick="alert('Added to cart!')">Subscribe Now</button>
            </div>
        </div>
    `;
}