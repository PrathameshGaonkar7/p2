/* ============================================================
   PSquare Art Gallery — gallery.js
   Dynamic gallery rendering, search, filter, modal trigger
   ============================================================ */

let activeFilter = 'all';

function renderGallery(search = '', filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  const term = search.toLowerCase();

  const items = artworks.filter(a => {
    const matchFilter = filter === 'all' || a.category === filter;
    const matchSearch = !term
      || a.title.toLowerCase().includes(term)
      || a.artist.toLowerCase().includes(term)
      || a.tags.some(t => t.toLowerCase().includes(term));
    return matchFilter && matchSearch;
  });

  document.getElementById('noResults').style.display = items.length ? 'none' : 'block';

  grid.innerHTML = items.map(a => `
    <div class="gallery-item${a.wide ? ' wide' : ''}" onclick="openModal(${a.id})">
      <img src="${a.img}" alt="${a.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-title">${a.title}</div>
        <div class="gallery-item-meta">${a.artist} · ${a.year}</div>
      </div>
      <div class="gallery-item-view">↗</div>
    </div>
  `).join('');
}

function filterGallery() {
  renderGallery(document.getElementById('gallerySearch').value, activeFilter);
}

function setFilter(btn, filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterGallery();
}

// Override openModal to use artworks array from data.js
function openModal(id) {
  const art = artworks.find(a => a.id === id);
  if (!art) return;

  document.getElementById('modalImg').src              = art.img;
  document.getElementById('modalImg').alt              = art.title;
  document.getElementById('modalCategory').textContent = art.category.toUpperCase() + ' · ' + art.artist;
  document.getElementById('modalTitle').textContent    = art.title;
  document.getElementById('modalYear').textContent     = art.year + ' · ' + art.tags[0];
  document.getElementById('modalDesc').textContent     = art.desc;
  document.getElementById('modalTags').innerHTML       =
    art.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('artModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Init on load
document.addEventListener('DOMContentLoaded', () => renderGallery());
