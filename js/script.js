function toggleMobileMenu() {
  const menuButton = document.getElementById("hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}