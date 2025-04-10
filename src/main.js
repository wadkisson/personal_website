        
        
// Handle page navigation
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');
  
  // Function to switch pages
  function switchPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
      page.classList.remove('active');
    });
    
    // Show the selected page
    const selectedPage = document.getElementById(`${pageId}-page`);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }
    
    // Update active button
    navButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-page') === pageId) {
        btn.classList.add('active');
      }
    });
  }
  
  // Add click event listeners to navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = button.getAttribute('data-page');
      switchPage(pageId);
    });
  });
});


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}); 