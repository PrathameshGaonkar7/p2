/* ============================================================
   PSquare Art Gallery — tickets.js
   Dynamic ticket counter, pricing, booking flow
   ============================================================ */

function renderTickets() {
  const container = document.getElementById('ticketTypes');
  container.innerHTML = ticketData.map((t, i) => `
    <div class="ticket-card">
      <div class="ticket-card-info">
        <div class="ticket-card-name">${t.name}</div>
        <div class="ticket-card-desc">${t.desc}</div>
      </div>
      <div class="ticket-card-price">₦${t.price.toLocaleString()}</div>
      <div class="ticket-counter">
        <button class="counter-btn" onclick="changeQty(${i}, -1)">−</button>
        <div class="counter-val" id="qty_${i}">${t.qty}</div>
        <button class="counter-btn" onclick="changeQty(${i}, +1)">+</button>
      </div>
    </div>
  `).join('');

  // Enforce minimum date = today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('visitDate').min = today;

  updateSummary();
}

function changeQty(idx, delta) {
  ticketData[idx].qty = Math.max(0, ticketData[idx].qty + delta);
  document.getElementById('qty_' + idx).textContent = ticketData[idx].qty;
  updateSummary();
}

function updateSummary() {
  const lines   = document.getElementById('summaryLines');
  const items   = ticketData.filter(t => t.qty > 0);
  let   total   = 0;

  if (items.length === 0) {
    lines.innerHTML = '<div class="summary-line" style="justify-content:center;font-style:italic;">No tickets selected</div>';
  } else {
    lines.innerHTML = items.map(t => {
      const sub = t.price * t.qty;
      total += sub;
      return `<div class="summary-line">
        <span>${t.name} × ${t.qty}</span>
        <span>₦${sub.toLocaleString()}</span>
      </div>`;
    }).join('');
  }

  document.getElementById('totalAmount').textContent = '₦' + total.toLocaleString();
  document.getElementById('bookBtn').disabled = total === 0;
}

function handleBooking() {
  const date = document.getElementById('visitDate').value;
  const time = document.getElementById('timeSlot').value;

  if (!date || !time) {
    alert('Please select a visit date and time slot before proceeding.');
    return;
  }

  const btn     = document.getElementById('bookBtn');
  const success = document.getElementById('bookingSuccess');

  btn.disabled     = true;
  btn.textContent  = 'Booking Confirmed ✓';
  success.style.display = 'block';

  // Reset after 5 seconds
  setTimeout(() => {
    ticketData.forEach(t => t.qty = 0);
    renderTickets();
    success.style.display = 'none';
    btn.textContent = 'Proceed to Checkout';
    document.getElementById('visitDate').value = '';
    document.getElementById('timeSlot').value  = '';
  }, 5000);
}

// Init
document.addEventListener('DOMContentLoaded', renderTickets);
