const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

function scrollToSection(id) {
  const element = document.getElementById(id);
  const navbar = document.getElementById('navbar');
  const offset = navbar.offsetHeight;
  const topPos = element.offsetTop - offset;

  window.scrollTo({
    top: topPos,
    behavior: 'smooth',
  });

  // Close menu on mobile after clicking
  if (window.innerWidth < 768) {
    dropdownMenu.style.display = 'none';
  }
}

// Highlight active nav item on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    if (
      scrollY >= section.offsetTop &&
      scrollY < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.nav-links button, .dropdown-menu button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === id.toLowerCase()) {
          btn.classList.add('active');
        }
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.getElementById('blogContainer');

  // Sample localStorage structure (run once to test)
  
  // localStorage.setItem("blogs", JSON.stringify([
  //   {
  //     title: "How I Built My Portfolio 💻",
  //     date: "2025-04-05",
  //     content: "In this blog, I break down how I created my personal portfolio using HTML, CSS, and JavaScript..."
  //   },
  //   {
  //     title: "My First PHP Project 🚀",
  //     date: "2025-03-27",
  //     content: "Let's talk about the motel booking system I developed with PHP and why it was a huge learning moment..."
  //   }
  // ]));
  

  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  if (blogs.length === 0) {
    blogContainer.innerHTML = "<p>No blog posts found. Stay tuned!</p>";
  } else {
    blogs.forEach(blog => {
      const card = document.createElement('div');
      card.className = 'blog-card';

      card.innerHTML = `
        <h3 class="blog-title">${blog.title}</h3>
        <p class="blog-date">${new Date(blog.date).toDateString()}</p>
        <p class="blog-preview">${blog.content.slice(0, 100)}...</p>
      `;

      blogContainer.appendChild(card);
    });
  }
});
