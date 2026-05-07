const subjects = [
    {
        code: "314441",
        name: "Theory of Computation",
        sem: "V",
        units: ["Finite Automata", "Regular Expressions", "Context Free Grammar", "Pushdown Automata", "Turing Machines", "Computability Theory"]
    },
    {
        code: "314442",
        name: "Operating Systems",
        sem: "V",
        units: ["Introduction to OS", "Process Management", "Threads & CPU Scheduling", "Memory Management", "Storage Management", "Case Studies (Linux)"]
    },
    {
        code: "314443",
        name: "Machine Learning",
        sem: "V",
        units: ["Introduction to ML", "Regression", "Classification", "Clustering", "Neural Networks", "Reinforcement Learning"]
    },
    {
        code: "314451",
        name: "Computer Networks & Security",
        sem: "VI",
        units: ["Network Layer", "Transport Layer", "Application Layer", "Wireless Networks", "Network Security", "Cryptography"]
    },
    {
        code: "314452",
        name: "Data Science & Big Data",
        sem: "VI",
        units: ["Introduction to DS", "Data Preprocessing", "Big Data Analytics", "Hadoop Ecosystem", "NoSQL Databases", "Visualization"]
    }
];

function init() {
    const grid = document.getElementById('subject-cards');
    subjects.forEach((sub, index) => {
        grid.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card subject-card h-100 shadow-sm">
                    <div class="card-header card-header-it">Semester ${sub.sem}</div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-maroon">${sub.name}</h5>
                        <p class="text-muted small">Course Code: ${sub.code}</p>
                        <button class="btn btn-details btn-sm px-4" onclick="showSyllabus(${index})">
                            View Detailed Syllabus
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showSyllabus(index) {
    const sub = subjects[index];
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.innerText = `${sub.name} (${sub.code}) - Units`;

    let listHtml = '<ul class="list-group list-group-flush">';
    sub.units.forEach((unit, i) => {
        listHtml += `<li class="list-group-item"><strong>Unit ${i + 1}:</strong> ${unit}</li>`;
    });
    listHtml += '</ul>';

    modalBody.innerHTML = listHtml;

    const myModal = new bootstrap.Modal(document.getElementById('syllabusModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', init);