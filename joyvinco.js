function bar() {
    let show = document.getElementById('home')
    show.classList.toggle('show')
}

const images = [
    "images/Fizz-soap.jpeg",
    "images/washing-machine.jpeg",
    "images/facebook_fizz.jpeg",
    "images/images_fizz.jpeg"
  ];
  
  let index = 0;
  const img = document.getElementById("slider");
  
  setInterval(() => {
    // Start fade out
    img.classList.add("fade-out");
  
    // Wait for fade to finish before changing image
    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];
  
      // Fade in
      img.classList.remove("fade-out");
    }, 1000); // match the CSS transition time
  }, 5000); // change every 5 seconds
  

  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[type="search"]');
    const searchForm = searchInput.closest('form');
  
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
  
      const query = searchInput.value.toLowerCase();
  
      // Select all possible text elements inside <main>
      const elementsToSearch = document.querySelectorAll("main h1, main h2, main h3, main p, main div, main span");
  
      elementsToSearch.forEach(el => {
        const text = el.textContent.toLowerCase();
        const parent = el.closest(".green, .viva, .free, .soap, .oracare, .sect5, .sect7, .sect3, .sect4, .sect2");
  
        if (text.includes(query)) {
          if (parent) parent.style.display = ""; // Show parent container
          else el.style.display = "";
        } else {
          if (parent) parent.style.display = "none"; // Hide parent container
          else el.style.display = "none";
        }
      });
    });
  });
  

  let footer = document.getElementById('footer');
  let year = new Date().getFullYear();
  
  footer.innerHTML = `<p>&copy; ${year} All rights reserved Jovinco</p>`;

  

  
  