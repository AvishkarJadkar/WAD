// Array of property objects
const properties = [
    {
        id: 1,
        address: "123 Maple Street, Beverly Hills, CA",
        price: "$2,500,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        address: "88 Ocean Drive, Miami Beach, FL",
        price: "$1,850,000",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        address: "450 Skyline Terrace, Austin, TX",
        price: "$975,000",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        address: "12 Pinecrest Road, Aspen, CO",
        price: "$3,200,000",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        address: "77 Urban Loft, Brooklyn, NY",
        price: "$1,150,000",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        address: "21 Garden Avenue, Portland, OR",
        price: "$820,000",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
    }
];

// Function to render properties to the DOM
function displayProperties() {
    const container = document.getElementById('property-container');

    properties.forEach(property => {
        const cardHtml = `
            <div class="col-md-6 col-lg-4">
                <div class="card property-card h-100">
                    <img src="${property.image}" class="card-img-top" alt="Property Image">
                    <div class="card-body">
                        <div class="price-tag mb-2">${property.price}</div>
                        <p class="address-text"><i class="bi bi-geo-alt"></i> ${property.address}</p>
                        <button class="btn btn-contact-property" onclick="contactAgent('${property.address}')">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

// Function for the contact button action
function contactAgent(address) {
    alert(`Inquiry sent for property at: \n${address}\n\nAn agent will contact you within 24 hours.`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayProperties);