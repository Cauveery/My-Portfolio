document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();\
            

            const target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Filter function for skills
function filterSkills(category) {
    const allSkills = document.querySelectorAll('.skill-item');
    allSkills.forEach(skill => {
        if (category === 'all' || skill.classList.contains(category)) {
            skill.style.display = 'flex';
        } else {
            skill.style.display = 'none';
        }
    });
}
