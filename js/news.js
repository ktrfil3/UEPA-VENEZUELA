document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("newsContainer");

  try {
    const response = await fetch("/news.json");
    const noticias = await response.json();

    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.classList.add("news-card");

      card.innerHTML = `
        <img src="${noticia.imagen}" alt="${noticia.titulo}">
        <div class="news-card-content">
          <h3>${noticia.titulo}</h3>
          <p class="fecha">${new Date(noticia.fecha).toLocaleDateString()}</p>
          <p>${noticia.contenido}</p>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Error al cargar las noticias.</p>";
    console.error("Error al cargar noticias:", error);
  }
});
