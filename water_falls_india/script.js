const waterfalls = [
    {
        name: "Jog Falls",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1626014303757-646c03994326?auto=format&fit=crop&w=800&q=80",
        reach: "Fly to Hubli Airport or take a train to Sagara Station. It is well connected by road from Bengaluru (400km)."
    },
    {
        name: "Dudhsagar Falls",
        location: "Goa",
        image: "https://images.unsplash.com/photo-1590483731872-689e49c71708?auto=format&fit=crop&w=800&q=80",
        reach: "Take a train to Kulem or Castle Rock station. The falls are best reached via a Jeep safari through the Bhagwan Mahavir Sanctuary."
    },
    {
        name: "Athirappilly Falls",
        location: "Kerala",
        image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&q=80",
        reach: "Nearest airport is Kochi (55km). Chalakudy is the nearest railway station. You can hire a taxi directly from Kochi."
    },
    {
        name: "Nohkalikai Falls",
        location: "Meghalaya",
        image: "https://images.unsplash.com/photo-1596395350414-0f1c65f9024f?auto=format&fit=crop&w=800&q=80",
        reach: "Reach Guwahati by air/train, then travel to Shillong. From Shillong, it's a beautiful 2-hour drive to Cherrapunji."
    }
];

function init() {
    const container = document.getElementById('falls-container');

    waterfalls.forEach((fall, index) => {
        container.innerHTML += `
            <div class="col-md-6 col-lg-3">
                <div class="card fall-card h-100">
                    <img src="${fall.image}" class="card-img-top fall-img" alt="${fall.name}">
                    <div class="card-body text-center">
                        <h4 class="fw-bold">${fall.name}</h4>
                        <p class="text-muted"><i class="bi bi-geo-alt"></i> ${fall.location}</p>
                        <button class="btn btn-reach px-4" onclick="showReach(${index})">How to Reach</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showReach(index) {
    const fall = waterfalls[index];
    document.getElementById('modalTitle').innerText = `Travel to ${fall.name}`;
    document.getElementById('modalBody').innerHTML = `<p class="lh-lg">${fall.reach}</p>`;

    const myModal = new bootstrap.Modal(document.getElementById('reachModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', init);