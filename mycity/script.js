const data = [
    {
        title: "Shaniwar Wada",
        img: "https://images.unsplash.com/photo-1596700683072-0692290f63b4?auto=format&fit=crop&w=1200&q=80",
        desc: "The historical seat of the Peshwas, this 18th-century fortification remains the symbolic heart of the city."
    },
    {
        title: "Aga Khan Palace",
        img: "https://images.unsplash.com/photo-1626014303757-646c03994326?auto=format&fit=crop&w=1200&q=80",
        desc: "A monument of national importance, characterized by its Italianate arches and sprawling lush greenery."
    },
    {
        title: "Sinhagad Fort",
        img: "https://images.unsplash.com/photo-1623157546654-e0b686367784?auto=format&fit=crop&w=1200&q=80",
        desc: "The 'Lion's Fort' stands guard over the city from the Sahyadri mountains, offering a glimpse into Maratha military prowess."
    }
];

function updateView(index) {
    const item = data[index];

    // Update active button state
    const buttons = document.querySelectorAll('.list-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');

    // Update Content with simple fade effect
    const img = document.getElementById('mainImg');
    const title = document.getElementById('mainTitle');
    const desc = document.getElementById('mainDesc');

    img.style.opacity = 0;
    setTimeout(() => {
        img.src = item.img;
        title.innerText = item.title;
        desc.innerText = item.desc;
        img.style.opacity = 1;
    }, 300);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});