const players = [
    {
        name: "Roger Federer",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4977b?auto=format&fit=crop&w=800&q=80",
        achievements: [
            "20 Grand Slam Titles",
            "103 ATP Titles",
            "Olympic Silver Medal",
            "310 Weeks at World No. 1"
        ]
    },
    {
        name: "Serena Williams",
        image: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=800&q=80",
        achievements: [
            "23 Grand Slam Singles Titles",
            "14 Grand Slam Doubles Titles",
            "4 Olympic Gold Medals",
            "73 Career Titles"
        ]
    },
    {
        name: "Rafael Nadal",
        image: "https://images.unsplash.com/photo-1574067765502-320c4f014fce?auto=format&fit=crop&w=800&q=80",
        achievements: [
            "22 Grand Slam Titles",
            "14 French Open Titles (King of Clay)",
            "Olympic Gold Medal (Singles & Doubles)",
            "92 ATP Singles Titles"
        ]
    }
];

function loadPlayers() {
    const grid = document.getElementById('player-grid');
    players.forEach((player, index) => {
        grid.innerHTML += `
            <div class="col-md-4">
                <div class="card player-card">
                    <img src="${player.image}" class="card-img-top player-img" alt="${player.name}">
                    <div class="card-body text-center">
                        <h4 class="card-title fw-bold">${player.name}</h4>
                        <button class="btn btn-achievement px-4 py-2 mt-2" onclick="showAchievements(${index})">
                            View Achievements
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showAchievements(index) {
    const player = players[index];
    const modalTitle = document.getElementById('modalPlayerName');
    const modalBody = document.getElementById('modalBody');

    modalTitle.innerText = `${player.name}'s Legacy`;
    modalBody.innerHTML = `<ul class="list-group list-group-flush">
        ${player.achievements.map(a => `<li class="list-group-item">🏆 ${a}</li>`).join('')}
    </ul>`;

    const myModal = new bootstrap.Modal(document.getElementById('achievementModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', loadPlayers);