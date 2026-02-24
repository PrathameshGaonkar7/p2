/* ============================================================
   PSquare Art Gallery — nav.js
   Shared across all pages: cursor, sticky nav, mobile menu, modal
   ============================================================ */

// ── Custom Cursor ──────────────────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  cursor.style.transform      = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.transform  = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ── Sticky Nav ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav')
    .classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile Menu ────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── Highlight Active Nav Link ──────────────────────────────
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });
})();

// ── Art Detail Modal ───────────────────────────────────────
function openModal(art) {
  document.getElementById('modalImg').src          = art.img;
  document.getElementById('modalImg').alt          = art.title;
  document.getElementById('modalCategory').textContent = art.category.toUpperCase() + ' · ' + art.artist;
  document.getElementById('modalTitle').textContent    = art.title;
  document.getElementById('modalYear').textContent     = art.year + ' · ' + art.tags[0];
  document.getElementById('modalDesc').textContent     = art.desc;
  document.getElementById('modalTags').innerHTML =
    art.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('artModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('artModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('artModal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
