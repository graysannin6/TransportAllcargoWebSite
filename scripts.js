// Smooth scrolling effect for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchorLink of anchorLinks) {
      anchorLink.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetElement = document.getElementById(targetId.slice(1));
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    }
  });
  
  // Responsive navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
  