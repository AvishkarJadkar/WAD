// Initial Static Data
let products = [
    { name: "Wireless Headphones", cat: "Electronics", price: "$199.00", stock: 45 },
    { name: "Smart Watch S5", cat: "Electronics", price: "$349.00", stock: 8 },
    { name: "Leather Backpack", cat: "Fashion", price: "$89.00", stock: 0 }
];

const kpiData = [
    { title: "Total Revenue", value: "$128,430", icon: "bi-currency-dollar", color: "primary" },
    { title: "Active Orders", value: "452", icon: "bi-bag-check", color: "success" },
    { title: "Avg. Order Value", value: "$280", icon: "bi-cart-check", color: "info" }
];

// 1. Render KPI Cards
function renderKPIs() {
    const kpiGrid = document.getElementById('kpi-grid');
    kpiGrid.innerHTML = kpiData.map(kpi => `
        <div class="col-md-4">
            <div class="card kpi-card shadow-sm">
                <div class="card-body p-4 d-flex align-items-center">
                    <div class="icon-box bg-${kpi.color} bg-opacity-10 text-${kpi.color} me-3">
                        <i class="bi ${kpi.icon} fs-4"></i>
                    </div>
                    <div>
                        <h6 class="text-muted mb-1 small">${kpi.title}</h6>
                        <h3 class="fw-bold m-0">${kpi.value}</h3>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Render Product Table
function renderTable() {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = "";

    products.forEach((p, index) => {
        const statusClass = p.stock === 0 ? 'danger' : (p.stock < 10 ? 'warning' : 'success');
        const statusText = p.stock === 0 ? 'Out of Stock' : (p.stock < 10 ? 'Low Stock' : 'In Stock');

        tableBody.innerHTML += `
            <tr class="animate-row">
                <td class="fw-bold">${p.name}</td>
                <td><span class="badge bg-light text-dark border">${p.cat}</span></td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td><span class="badge bg-${statusClass}">${statusText}</span></td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteProduct(${index})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

// 3. Add Product Form Handler
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {
        name: document.getElementById('pName').value,
        cat: document.getElementById('pCat').value,
        price: `$${parseFloat(document.getElementById('pPrice').value).toFixed(2)}`,
        stock: parseInt(document.getElementById('pStock').value)
    };

    products.unshift(newProduct); // Add to the top of the array
    renderTable();

    // Reset and Close Modal
    bootstrap.Modal.getInstance(document.getElementById('addProductModal')).hide();
    e.target.reset();
});

// 4. Delete Product
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        products.splice(index, 1);
        renderTable();
    }
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderKPIs();
    renderTable();
});