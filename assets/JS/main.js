document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('button[data-bs-target="#login-modal"]');
    const registerButton = document.querySelector('.btn-primary[style*="background-color: var(--primary-color)"]');

    // Forzar type="email" y type="password"
    setInterval(() => {
        if (emailInput.type !== 'email') emailInput.type = 'email';
        if (passwordInput.type !== 'password') passwordInput.type = 'password';
    }, 100);

    if (loginForm) {
        // Dentro del evento submit del login-form (main.js)
        // Dentro del evento submit del login-form (main.js)
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Credenciales de admin (ejemplo)
            const adminEmail = 'admin@gmail.com';
            const adminPassword = '1234';

            // Verificar si es admin
            const isAdmin = (
                emailInput.value === adminEmail &&
                passwordInput.value === adminPassword
            );

            // Simular datos de usuario normal (en un sistema real, esto vendría de una base de datos)
            const normalUser = {
                name: emailInput.value.split('@')[0],
                isAdmin: false // <- Marcar como usuario normal
            };

            // Crear el dropdown del usuario según su tipo
            createUserDropdown(isAdmin ? { ...normalUser, isAdmin: true } : normalUser);

            // Cerrar el modal de login
            const modal = bootstrap.Modal.getInstance(document.getElementById('login-modal'));
            modal.hide();
        });

        // Función para crear el dropdown del usuario
        function createUserDropdown(user) {
            // Ocultar botones de login/register
            loginButton.style.display = 'none';
            registerButton.style.display = 'none';

            // Crear el menú de usuario
            const userDropdown = document.createElement('div');
            userDropdown.className = 'd-flex align-items-center user-logged dropdown';
            userDropdown.innerHTML = `
        <i class="bi bi-person-circle fs-4 me-2"></i>
        <span class="dropdown-toggle" data-bs-toggle="dropdown">${user.name}</span>
        <ul class="dropdown-menu dropdown-menu-end">
            ${user.isAdmin ?
                    `<li><a class="dropdown-item" href="inicioAdmin.html"><i class="bi bi-speedometer2 me-2"></i>Panel Admin</a></li>`
                    :
                    `<li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Mi Perfil</a></li>`
                }
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" href="#" id="logout-btn"><i class="bi bi-box-arrow-right me-2"></i>Cerrar Sesión</a></li>
        </ul>
    `;

            // Insertar en el navbar
            const navbarCollapse = document.querySelector('.navbar-collapse');
            navbarCollapse.appendChild(userDropdown);

            // Configurar evento de logout
            userDropdown.querySelector('#logout-btn').addEventListener('click', function (e) {
                e.preventDefault();
                userDropdown.remove();
                loginButton.style.display = 'block';
                registerButton.style.display = 'block';
            });
        }
    }

    // Lógica del formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            // Validaciones
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden");
                return;
            }

            if (!document.getElementById('register-terms').checked) {
                alert("Debes aceptar los términos y condiciones");
                return;
            }

            // Simulamos registro exitoso (en un caso real, aquí iría una petición al servidor)
            alert(`¡Registro exitoso, ${name}! Ahora puedes iniciar sesión.`);

            // Cerramos el modal y limpiamos el formulario
            const modal = bootstrap.Modal.getInstance(document.getElementById('register-modal'));
            modal.hide();
            registerForm.reset();

            // Opcional: Redirigir o mostrar mensaje de éxito
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(element => {
        observer.observe(element);
    });
});


