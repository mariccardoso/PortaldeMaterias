// Animação ao trocar de página 
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navlist a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.href;

      document.body.classList.add("fade-out-active");

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Tempo da animação em milissegundos
    });
  });
});
