// Arka plandaki yıldızları oluşturma
function createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
  
      starsContainer.appendChild(star);
    }
  
    document.body.appendChild(starsContainer);
  }
  
  // Belirli bir süre sonra yıldızları oluştur
  setTimeout(createStars, 1000);
  