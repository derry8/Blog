const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.getElementById('blogContainer');
  

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
