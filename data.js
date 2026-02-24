/* ============================================================
   PSquare Art Gallery — data.js
   Centralised data: artworks + ticket types
   ============================================================ */

const artworks = [
  {
    id: 1,
    title: "Daughters of the Red Earth",
    artist: "Ngozi Adeyemi",
    year: "2021",
    category: "portrait",
    tags: ["Oil on Canvas", "Feminist", "Contemporary"],
    desc: "A monumental triptych exploring womanhood, ancestry, and land rights through the lens of three generations of Yoruba women. The rich ochre tones echo the laterite soils of southwestern Nigeria, evoking both rootedness and resilience.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    wide: false
  },
  {
    id: 2,
    title: "Geometry of Memory",
    artist: "Kofi Mensah",
    year: "2019",
    category: "abstract",
    tags: ["Acrylic", "Geometric", "Memory"],
    desc: "Mensah's signature interlocking forms draw from traditional Kente weaving patterns, deconstructing them into an abstract meditation on how culture is transmitted — always changing, always recognizable.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    wide: true
  },
  {
    id: 3,
    title: "Market at Dawn",
    artist: "Emeka Okafor",
    year: "2020",
    category: "landscape",
    tags: ["Oil", "Realism", "Urban"],
    desc: "Dawn at Balogun Market, Lagos — before the crowds arrive. Okafor captures the liminal hour when traders set their stalls by lantern light, the city holding its breath before the plunge into noise and commerce.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    wide: false
  },
  {
    id: 4,
    title: "Masquerade, Reimagined",
    artist: "Aisha Bello",
    year: "2022",
    category: "cultural",
    tags: ["Mixed Media", "Tradition", "Installation"],
    desc: "A provocation and a celebration — Bello deconstructs the iconography of Egungun masquerade, asking who inherits tradition, who is excluded from it, and what happens when sacred forms enter contemporary space.",
    img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    wide: false
  },
  {
    id: 5,
    title: "Lagos Skyline, 2050",
    artist: "Tunde Fashola Jr.",
    year: "2023",
    category: "abstract",
    tags: ["Digital Print", "Afrofuturism", "Architecture"],
    desc: "Part architectural fantasy, part political statement — this large-format digital work imagines Lagos in 2050 as a city that chose ecological wisdom over unchecked expansion. A blueprint for another possibility.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    wide: false
  },
  {
    id: 6,
    title: "The Weight of Crowns",
    artist: "Yetunde Adisa",
    year: "2018",
    category: "portrait",
    tags: ["Charcoal", "Royalty", "Heritage"],
    desc: "Rendered in intensely worked charcoal, this portrait series interrogates the mythology of Yoruba kingship — the human beneath the crown, the burden concealed by ceremony, the loneliness of symbolic power.",
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    wide: false
  },
  {
    id: 7,
    title: "Harmattan Season",
    artist: "Chukwuemeka Eze",
    year: "2021",
    category: "landscape",
    tags: ["Watercolour", "Nature", "Season"],
    desc: "The harmattan wind arrives from the Sahara each November, coating everything in fine dust, softening edges, and transforming the Nigerian landscape into something both alien and deeply familiar. Eze renders it in whispers of watercolour.",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    wide: false
  },
  {
    id: 8,
    title: "Aso Ebi, Deconstructed",
    artist: "Folake Taiwo",
    year: "2023",
    category: "cultural",
    tags: ["Textile", "Fashion", "Community"],
    desc: "Taking the communal fabric of Aso Ebi — the matching outfits worn by families at celebrations — Taiwo explores how fashion functions as social bonding ritual, class signal, and collective identity in Nigerian life.",
    img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    wide: false
  },
  {
    id: 9,
    title: "River Crossing",
    artist: "Obinna Nwachukwu",
    year: "2017",
    category: "landscape",
    tags: ["Oil", "River", "Migration"],
    desc: "Painted at the Niger Delta, this work meditates on crossings — physical and metaphorical. The river as passage between worlds, between generations, between what was and what must be.",
    img: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
    wide: false
  }
];

const ticketData = [
  { id: 'adult',   name: 'Adult',                desc: 'Ages 18–64',                          price: 5000,  qty: 0 },
  { id: 'student', name: 'Student / Young Adult', desc: 'Ages 12–17 with valid student ID',    price: 2500,  qty: 0 },
  { id: 'child',   name: 'Child',                desc: 'Ages 4–11 (children under 4 are free)',price: 1500,  qty: 0 },
  { id: 'senior',  name: 'Senior',               desc: 'Ages 65+ with valid ID',               price: 2000,  qty: 0 },
  { id: 'family',  name: 'Family Pass',           desc: '2 adults + up to 3 children',          price: 12000, qty: 0 }
];
