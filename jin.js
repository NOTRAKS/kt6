function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        alert('Please enter search term');
        return;
    }
    
    alert('Searching for: ' + searchTerm);
}

function showSection(sectionName) {
    alert('Showing section: ' + sectionName);
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            alert('Loading more content for: ' + target);
        });
    });
    
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to social media');
        });
    });
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            const section = document.querySelector(target);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    const heroNavItems = document.querySelectorAll('.hero-nav li');
    heroNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            const sectionNumber = text.split(' ')[0];
            alert('Navigating to section ' + sectionNumber);
        });
    });
});