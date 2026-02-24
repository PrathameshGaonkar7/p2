/* ============================================================
   PSquare Art Gallery — visit.js
   Contact form submit handler
   ============================================================ */

function handleContactSubmit(btn) {
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message before sending.');
    return;
  }

  btn.textContent = 'Message Sent ✓';
  btn.classList.add('sent');
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.classList.remove('sent');
    btn.disabled = false;
    // Clear form
    document.getElementById('cName').value    = '';
    document.getElementById('cEmail').value   = '';
    document.getElementById('cSubject').value = '';
    document.getElementById('cPhone').value   = '';
    document.getElementById('cMessage').value = '';
  }, 4000);
}
