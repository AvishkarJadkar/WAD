const seating = document.getElementById('seating');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketPrice = 12;

// Create 48 seats
for (let i = 0; i < 48; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSummary();
    });
    seating.appendChild(seat);
}

function updateSummary() {
    const selectedSeats = document.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeats;
    total.innerText = selectedSeats * ticketPrice;
}

document.getElementById('bookBtn').addEventListener('click', () => {
    alert('Booking Confirmed! Enjoy your movie.');
});