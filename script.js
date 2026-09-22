const cats = [
  {
    nama: "Milo",
    jenis: "Persia",
    umur: "2 Tahun",
    gambar: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  },

  {
    nama: "Luna",
    jenis: "Anggora",
    umur: "1 Tahun",
    gambar: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
  },

  {
    nama: "Oreo",
    jenis: "Domestic Cat",
    umur: "3 Tahun",
    gambar: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d",
  },
];

const list = document.getElementById("course-list");

cats.forEach((cat) => {
  list.innerHTML += `


<div class="card">


<img src="${cat.gambar}">


<h3>${cat.nama}</h3>


<p>
${cat.jenis}
<br>
${cat.umur}
</p>


<button class="btn">
Adopsi
</button>


</div>


`;
});
