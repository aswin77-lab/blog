document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Current Date dynamically
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // 2. Set Copyright Year
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Reading Progress Bar
    const progressBar = document.querySelector('.reading-progress');
    
    window.addEventListener('scroll', () => {
        if (!progressBar) return;
        
        // Calculate how far down the page the user has scrolled
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Calculate percentage
        const progress = (scrollTop / documentHeight) * 100;
        
        // Update width of progress bar
        progressBar.style.width = progress + '%';
    });

    // 4. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
