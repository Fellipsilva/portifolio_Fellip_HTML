document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // EFEITO DE NAVEGAÇÃO ATIVA COM SCROLL
    // ============================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.navbar a[href*='${id}']`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });

    // ============================================================
    // EFEITO DE DIGITAÇÃO (TYPING EFFECT)
    // ============================================================
    const roles = ["Estudante de ADS", "Desenvolvedor Front-End", "Futuro Dev Full-Stack"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing-effect');

    function type() {
        if (typingElement && charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 120);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (typingElement && charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 60);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }

    if (typingElement) {
        type();
    }

    // ============================================================
    // ENVIO DE MENSAGEM PARA O WHATSAPP
    // ============================================================
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || mensagem === "") {
                alert("Por favor, preencha seu nome e a mensagem antes de enviar.");
                return;
            }

            const textoFormatado = `Olá, meu nome é ${nome}! Entrei em contato através do seu portfólio. Mensagem: ${mensagem}`;
            const numeroWhatsApp = "5561992609012";
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoFormatado)}`;

            window.open(linkWhatsApp, "_blank");
        });
    }

    // ============================================================
    // TEMA DARK/LIGHT
    // ============================================================
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }

}); // FIM DO DOMContentLoaded
