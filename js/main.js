document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fecha o menu mobile ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Navbar Background ao fazer Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.classList.remove('shadow-md');
            navbar.style.background = 'rgba(15, 23, 42, 0.85)';
        }
    });

    // --- Filtro do Portfolio ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe ativa de todos
            filterBtns.forEach(b => {
                b.classList.remove('bg-brand', 'text-white');
                b.classList.add('bg-gray-800', 'text-gray-300');
            });
            
            // Adiciona classe ativa no botão clicado
            btn.classList.remove('bg-gray-800', 'text-gray-300');
            btn.classList.add('bg-brand', 'text-white');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // tempo de transição
                }
            });
        });
    });

    // --- Simulação de Envio de Formulário ---
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const closeSuccess = document.getElementById('close-success');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Altera o botão para estado de carregamento
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;

            // Simula requisição assíncrona (ex: fetch)
            setTimeout(() => {
                successMessage.classList.remove('hidden');
                btn.innerHTML = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    if(closeSuccess) {
        closeSuccess.addEventListener('click', () => {
            successMessage.classList.add('hidden');
        });
    }
});