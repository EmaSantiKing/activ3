document.addEventListener("DOMContentLoaded", () => {
  const header = `
    <header>
      <div class="top-bar">
        <div class="logo-title">
          <a href="index.html" class="site-title">GamePlace</a>
        </div>
        <input type="text" placeholder="Buscar..." id="busqueda">
        <button class="nav-toggle" aria-label="Menú">
          ☰
        </button>
      </div>
      <nav class="nav-menu">
        <ul>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Consolas</a></li>
          <li><a href="#">Periféricos</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footer = `
    <footer>
      <p>Valentin Reyes 7MO 1ra Programacion Grupo A</p>
      <p>
        <i class='bx bxl-whatsapp'></i>
        <a href="https://wa.me/5491131458317" target="_blank">+54 9 11 3145-8317</a>
      </p>
    </footer>
  `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;

  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alterna la visibilidad del menú
  });

  const busqueda = document.getElementById('busqueda');
  busqueda.addEventListener('focus', () => {
    window.location.href = "pagina1.html";
  });
});
