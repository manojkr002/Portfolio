// Scroll-Spy Active Nav Link Updates
        const sections = document.querySelectorAll('.main-content > div[id]');
        const navLinks = document.querySelectorAll('nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Modal Display Functions
        function openModal(title, desc, imgSrc, tags) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerText = desc;
            document.getElementById('modalImg').src = imgSrc;
            
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.innerText = tag;
                tagsContainer.appendChild(tagSpan);
            });

            document.getElementById('projectModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('projectModal').style.display = 'none';
        }

        // Close Modal when clicking outside container
        window.onclick = function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeModal();
            }
        };

// Close the project preview with the Escape key.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
