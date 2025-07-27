document.addEventListener('DOMContentLoaded', function () {
    // ========== DATOS ==========
    const allProducts = [
        {
            id: 'PRD001',
            name: 'Teclado 60% RGB',
            category: 'gaming',
            price: 250000,
            stock: 25,
            status: 'active',
            description: 'Teclado mecanico de 60% con luces RGB incorporadas',
            image: 'assets/imagenes/Teclado.jpg'
        },
        {
            id: 'PRD002',
            name: 'Mouse Bengoo',
            category: 'gaming',
            price: 80000,
            stock: 42,
            status: 'active',
            description: 'Mouse ergonomico con rgb, capacidad de 500.000 clicks',
            image: 'assets/imagenes/Mouse.jpg'
        },
        {
            id: 'PRD003',
            name: 'Audifonos Wireless',
            category: 'audio',
            price: 50000,
            stock: 18,
            status: 'active',
            description: 'Audifonos con cancelación de ruido',
            image: 'assets/imagenes/Audifonos.jpg'
        },
        {
            id: 'PRD004',
            name: 'Laptop Asus Vivobook',
            category: 'laptops',
            price: 2250000,
            stock: 8,
            status: 'active',
            description: 'Procesador Intel i5, Capacidad SSD 512GB, Pantalla 1920px x 1080px',
            image: 'assets/imagenes/Laptop-Asus-Laptops.png'
        },
        {
            id: 'PRD005',
            name: 'Notebook 15,6 HP',
            category: 'laptops',
            price: 810000,
            stock: 12,
            status: 'active',
            description: 'G9 Intel Celeron, 8GB Ram, 256GB SSD',
            image: 'assets/imagenes/laptop-hp-laptops.png'
        },
        {
            id: 'PRD006',
            name: 'Lenovo V14 G3',
            category: 'laptops',
            price: 2500000,
            stock: 5,
            status: 'active',
            description: 'Core i7, 16 Ram, SSD 512GB',
            image: 'assets/imagenes/Lenovo-laptops.png'
        },
        {
            id: 'PRD007',
            name: 'Xiaomi Redmi Note 14',
            category: 'smartphones',
            price: 648000,
            stock: 15,
            status: 'active',
            description: '6.67, 128GB, 6GB Ram, Cámara 108mpx',
            image: 'assets/imagenes/Xiaomi-redmi-smartphones.png'
        },
        {
            id: 'PRD008',
            name: 'Motorola G55',
            category: 'smartphones',
            price: 800000,
            stock: 20,
            status: 'active',
            description: '256GB, 8GB Ram',
            image: 'assets/imagenes/motorola-g55-smartpones.png'
        },
        {
            id: 'PRD009',
            name: 'Samsung Galaxy S24',
            category: 'smartphones',
            price: 2179000,
            stock: 7,
            status: 'active',
            description: 'Dual SIM, 128GB, 8GBRam',
            image: 'assets/imagenes/SAMSUNG-GALAXY-S25-smartphone.png'
        },
        {
            id: 'PRD010',
            name: 'Audífonos Sleve Evo',
            category: 'audio',
            price: 124000,
            stock: 22,
            status: 'active',
            description: '2da Gen',
            image: 'assets/imagenes/Audifonos-audio.png'
        },
        {
            id: 'PRD011',
            name: 'Parlante JBL Flip 6',
            category: 'audio',
            price: 440000,
            stock: 14,
            status: 'active',
            description: 'Aprueba de agua, 30W, Bluetooth',
            image: 'assets/imagenes/Jbl-Flip-6-audio.png'
        },
        {
            id: 'PRD012',
            name: 'Micrófono K8',
            category: 'audio',
            price: 22000,
            stock: 30,
            status: 'active',
            description: 'Micrófono Inalámbrico para celular tipo C, color negro',
            image: 'assets/imagenes/Microfono-k8-audio.png'
        },
        {
            id: 'PRD013',
            name: 'Mouse Pad RGB Aoas',
            category: 'gaming',
            price: 35000,
            stock: 50,
            status: 'active',
            description: 'Mouse Pad Gamer RGB XI Aoas S4000 waterproof 80cm x 30cm',
            image: 'assets/imagenes/Mousepad-Rgb-gaming.png'
        },
        {
            id: 'PRD014',
            name: 'Logitech G520 Hero',
            category: 'gaming',
            price: 211000,
            stock: 18,
            status: 'active',
            description: 'Mouse gamer RGB, programable, 25600dpi',
            image: 'assets/imagenes/logitech-G520-Gaming.png'
        },
        {
            id: 'PRD015',
            name: 'Control Xbox edicion Deadpool',
            category: 'gaming',
            price: 500000,
            stock: 6,
            status: 'active',
            description: 'Control Xbox inalámbrico edicion especial de deadpool para Xbox One | S | X',
            image: 'assets/imagenes/Mando-deadpool-gaming.png'
        }
    ];

    const allOrders = [
        {
            id: 'ORD001',
            customer: 'Juan Pérez',
            date: '2025-04-20',
            status: 'delivered',
            total: 1250000,
            products: [
                { name: 'Teclado 60% RGB', quantity: 1, price: 250000 },
                { name: 'Mouse Bengoo', quantity: 1, price: 80000 },
                { name: 'Audifonos Wireless', quantity: 2, price: 50000 }
            ]
        },
        {
            id: 'ORD002',
            customer: 'María Gómez',
            date: '2025-04-22',
            status: 'shipped',
            total: 810000,
            products: [
                { name: 'Notebook 15,6 HP', quantity: 1, price: 810000 }
            ]
        },
        {
            id: 'ORD003',
            customer: 'Carlos Rodríguez',
            date: '2025-04-23',
            status: 'pending',
            total: 440000,
            products: [
                { name: 'Parlante JBL Flip 6', quantity: 1, price: 440000 }
            ]
        }
    ];

    const allClients = [
        {
            id: 'CLI001',
            name: 'Juan Pérez',
            email: 'juan@example.com',
            address: 'Calle 123 #45-67, Bogotá',
            purchases: 5,
            joinDate: '2024-01-15',
            status: 'active'
        },
        {
            id: 'CLI002',
            name: 'María Gómez',
            email: 'maria@example.com',
            address: 'Av. Principal #22-33, Medellín',
            purchases: 3,
            joinDate: '2024-03-10',
            status: 'active'
        },
        {
            id: 'CLI003',
            name: 'Carlos Rodríguez',
            email: 'carlos@example.com',
            address: 'Carrera 8 #12-34, Cali',
            purchases: 2,
            joinDate: '2024-05-20',
            status: 'active'
        }
    ];

    // ========== CONFIGURACIÓN ==========
    const productsPerPage = 5;
    let currentPage = 1;
    let filteredProducts = [...allProducts];

    // ========== FUNCIONES PRINCIPALES ==========
    function init() {
        setupNavigation();
        showProductsSection(); // Mostrar productos por defecto
        setupLogoutButton();
        setupConfigModal();
    }

    // ========== NAVEGACIÓN ==========
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.sidebar a.list-group-item');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remover active de todos los links
                document.querySelectorAll('.sidebar a.list-group-item').forEach(navLink => {
                    navLink.classList.remove('active');
                });

                // Agregar active al clickeado
                this.classList.add('active');

                const mainContent = document.getElementById('mainContent');

                // Animación de salida
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 300ms ease';

                setTimeout(() => {
                    if (this.innerHTML.includes('Productos')) {
                        showProductsSection();
                    } else if (this.innerHTML.includes('Pedidos')) {
                        showOrdersSection();
                    } else if (this.innerHTML.includes('Clientes')) {
                        showClientsSection();
                    } else if (this.innerHTML.includes('Estadísticas')) {
                        showStatsSection(); // Nueva sección
                    } else {
                        showProductsSection(); // Por defecto
                    }

                    // Animación de entrada
                    mainContent.style.opacity = '1';
                }, 300);


                const configLink = document.querySelector('.dropdown-item[href="#"]');
                if (configLink) {
                    configLink.addEventListener('click', function (e) {
                        e.preventDefault();
                        new bootstrap.Modal(document.getElementById('profileConfigModal')).show();
                    });
                }
            });
        });
    }

    function showProductsSection() {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 class="h3 fw-bold text-success">
                    <i class="bi bi-box-seam me-2"></i>Gestión de Productos
                </h2>
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    <i class="bi bi-plus-circle me-1"></i> Nuevo Producto
                </button>
            </div>

            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="table-success">
                                <tr>
                                    <th class="ps-4">ID</th>
                                    <th>Producto</th>
                                    <th>Categoría</th>
                                    <th class="text-center">Stock</th>
                                    <th>Precio</th>
                                    <th>Estado</th>
                                    <th class="text-end pe-4">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="productsTable"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <nav aria-label="Product pagination">
                <ul class="pagination justify-content-center" id="paginationContainer"></ul>
            </nav>
        `;

        // Reiniciar configuración
        currentPage = 1;
        filteredProducts = [...allProducts];

        // Renderizar contenido
        renderProducts();
        renderPagination();
        setupProductActions();
        setupAddProductModal();
    }



    function showOrdersSection() {

        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2 class="h3 fw-bold section-title-pedidos">
                <i class="bi bi-cart me-2"></i>Gestión de Pedidos
            </h2>
        </div>

            <div class="row">
                ${allOrders.map(order => `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-header d-flex justify-content-between align-items-center 
                                ${order.status === 'delivered' ? 'bg-success' :
                order.status === 'shipped' ? 'bg-warning' : 'bg-secondary'} text-white">
                                <h5 class="mb-0">Pedido #${order.id}</h5>
                                <span class="badge bg-white text-dark">
                                    ${order.status === 'delivered' ? 'Entregado' :
                order.status === 'shipped' ? 'En camino' : 'Pendiente'}
                                </span>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <h6 class="text-muted">Cliente</h6>
                                    <p>${order.customer}</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="text-muted">Fecha</h6>
                                    <p>${order.date}</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="text-muted">Productos</h6>
                                    <ul class="list-group list-group-flush">
                                        ${order.products.map(product => `
                                            <li class="list-group-item d-flex justify-content-between px-0">
                                                <span>${product.name} x${product.quantity}</span>
                                                <span>$${product.price.toLocaleString('es-CO')}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Total</h5>
                                    <h5 class="mb-0">$${order.total.toLocaleString('es-CO')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function showClientsSection() {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2 class="h3 fw-bold section-title-clientes">
                <i class="bi bi-people me-2"></i>Gestión de Clientes
            </h2>
        </div>
    
            <div class="row">
                ${allClients.map(client => `
                    <div class="col-md-4 mb-4">
                         <div class="card h-100 border-0 shadow-sm card-client">
                            <div class="card-header">
                                <div class="d-flex align-items-center">
                                    <div class="me-3">
                                        <i class="bi bi-person-circle fs-1"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">${client.name}</h5>
                                        <small class="d-block">${client.email}</small>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <h6 class="text-muted">Dirección</h6>
                                    <p>${client.address}</p>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="text-muted">Compras</h6>
                                        <p class="fs-4 fw-bold">${client.purchases}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6 class="text-muted">Registro</h6>
                                        <p>${client.joinDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex justify-content-between">
                                    <span class="badge ${client.status === 'active' ? 'bg-success' : 'bg-secondary'}">
                                        ${client.status === 'active' ? 'Activo' : 'Inactivo'}
                                    </span>
                                    <button class="btn btn-sm btn-outline-primary">
                                        <i class="bi bi-envelope"></i> Contactar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function showStatsSection() {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 class="h3 fw-bold text-success">
                    <i class="bi bi-graph-up me-2"></i>Estadísticas de Ventas
                </h2>
            </div>
    
            <!-- Tarjetas de resumen -->
            <div class="row mb-4">
                <div class="col-md-3 mb-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-cart-check fs-1 text-success mb-2"></i>
                            <h3 class="mb-1">15</h3>
                            <p class="text-muted mb-0">Ventas totales</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-currency-dollar fs-1 text-success mb-2"></i>
                            <h3 class="mb-1">$5,240,000</h3>
                            <p class="text-muted mb-0">Ingresos totales</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-box-seam fs-1 text-success mb-2"></i>
                            <h3 class="mb-1">32</h3>
                            <p class="text-muted mb-0">Productos vendidos</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-people fs-1 text-success mb-2"></i>
                            <h3 class="mb-1">8</h3>
                            <p class="text-muted mb-0">Clientes nuevos</p>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Gráfico de ventas mensuales -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-header bg-success text-white">
                    <h5 class="mb-0"><i class="bi bi-bar-chart me-2"></i>Ventas mensuales - 2025</h5>
                </div>
                <div class="card-body">
                    <div class="sales-chart">
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 20%;" data-tooltip="$420,000"></div>
                            <span>Ene</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 35%;" data-tooltip="$735,000"></div>
                            <span>Feb</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 50%;" data-tooltip="$1,050,000"></div>
                            <span>Mar</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 65%;" data-tooltip="$1,365,000"></div>
                            <span>Abr</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>May</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Jun</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Jul</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Ago</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Sep</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Oct</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Nov</span>
                        </div>
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: 0%;" data-tooltip="$0"></div>
                            <span>Dic</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Últimas ventas -->
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-success text-white">
                    <h5 class="mb-0"><i class="bi bi-list-check me-2"></i>Últimas 10 ventas</h5>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="table-success">
                                <tr>
                                    <th class="ps-4">ID</th>
                                    <th>Cliente</th>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th class="text-end pe-4">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">ORD003</td>
                                    <td>Carlos Rodríguez</td>
                                    <td>2025-04-23</td>
                                    <td>$440,000</td>
                                    <td><span class="badge bg-warning">En camino</span></td>
                                    <td class="text-end pe-4">
                                        <button class="btn btn-sm btn-outline-success">
                                            <i class="bi bi-eye"></i> Ver
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-4">ORD002</td>
                                    <td>María Gómez</td>
                                    <td>2025-04-22</td>
                                    <td>$810,000</td>
                                    <td><span class="badge bg-warning">En camino</span></td>
                                    <td class="text-end pe-4">
                                        <button class="btn btn-sm btn-outline-success">
                                            <i class="bi bi-eye"></i> Ver
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-4">ORD001</td>
                                    <td>Juan Pérez</td>
                                    <td>2025-04-20</td>
                                    <td>$1,250,000</td>
                                    <td><span class="badge bg-success">Entregado</span></td>
                                    <td class="text-end pe-4">
                                        <button class="btn btn-sm btn-outline-success">
                                            <i class="bi bi-eye"></i> Ver
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        // Configurar eventos para los botones de ver
        document.querySelectorAll('.btn-outline-success').forEach(btn => {
            btn.addEventListener('click', () => {
                // Aquí podrías implementar la lógica para ver el detalle de la venta
                showCustomAlert('Funcionalidad de ver los detalles no implementada'); // LLAMA A LA NUEVA FUNCIÓN
            });
        });


        // función para mostrar la alerta personalizada
        function showCustomAlert(message) {
            document.getElementById('customAlertMessage').textContent = message;
            new bootstrap.Modal(document.getElementById('customAlertModal')).show();
        }
    }

    // ========== FUNCIONES DE PRODUCTOS ==========
    function renderProducts() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        const productsTable = document.getElementById('productsTable');

        productsTable.innerHTML = productsToShow.length === 0 ? `
            <tr>
                <td colspan="7" class="text-center py-4 text-muted">
                    <i class="bi bi-box-seam fs-1"></i>
                    <p class="mt-2">No se encontraron productos</p>
                </td>
            </tr>
        ` : productsToShow.map(product => `
            <tr>
                <td class="ps-4">${product.id}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${product.image}" alt="${product.name}" class="rounded me-3 product-img-sm">
                        <div>${product.name}</div>
                    </div>
                </td>
                <td><span class="badge ${getCategoryClass(product.category)}">${getCategoryName(product.category)}</span></td>
                <td class="text-center"><span class="badge bg-success rounded-pill">${product.stock}</span></td>
                <td>$${product.price.toLocaleString('es-CO')}</td>
                <td><span class="badge ${getStatusClass(product.status)}">${getStatusName(product.status)}</span></td>
                <td class="text-end pe-4">
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-success view-btn" data-id="${product.id}">
                            <i class="bi bi-eye"></i>
                        </button>
                        <button class="btn btn-outline-primary edit-btn" data-id="${product.id}">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-outline-danger delete-btn" data-id="${product.id}">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');

        // Vuelve a asignar los eventos a los nuevos botones
        setupProductActions();
    }

    function renderPagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const paginationContainer = document.getElementById('paginationContainer');

        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" id="prevPage">&laquo;</a>
            </li>
        `;

        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" data-page="1">1</a>
                </li>
                ${startPage > 2 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
            `;
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        if (endPage < totalPages) {
            paginationHTML += `
                ${endPage < totalPages - 1 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
                <li class="page-item">
                    <a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a>
                </li>
            `;
        }

        paginationHTML += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" id="nextPage">&raquo;</a>
            </li>
        `;

        paginationContainer.innerHTML = paginationHTML;
        setupPaginationEvents();
    }

    function setupProductActions() {
        // Botones Ver/Editar/Eliminar
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => openViewModal(
                allProducts.find(p => p.id === btn.getAttribute('data-id'))
            ));
        });

        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => openEditModal(
                allProducts.find(p => p.id === btn.getAttribute('data-id'))
            ));
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => openDeleteModal(btn.getAttribute('data-id')));
        });
    }

    function setupPaginationEvents() {
        document.getElementById('paginationContainer').addEventListener('click', function (e) {
            if (e.target.hasAttribute('data-page')) {
                e.preventDefault();
                currentPage = parseInt(e.target.getAttribute('data-page'));
                renderProducts();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (e.target.id === 'prevPage' && currentPage > 1) {
                e.preventDefault();
                currentPage--;
                renderProducts();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (e.target.id === 'nextPage' && currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
                e.preventDefault();
                currentPage++;
                renderProducts();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // ========== MODALES ==========
    function setupAddProductModal() {
        const addProductForm = document.getElementById('addProductForm');

        if (addProductForm) {
            addProductForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const newProduct = {
                    id: 'PRD' + (allProducts.length + 1).toString().padStart(3, '0'),
                    name: document.getElementById('addProductName').value,
                    category: document.getElementById('addProductCategory').value,
                    price: parseFloat(document.getElementById('addProductPrice').value),
                    stock: parseInt(document.getElementById('addProductStock').value),
                    status: document.getElementById('addProductStatus').value,
                    description: document.getElementById('addProductDescription').value,
                    image: 'https://via.placeholder.com/150'
                };

                if (!newProduct.name || !newProduct.description) {
                    alert('Por favor complete todos los campos requeridos');
                    return;
                }

                const imageInput = document.getElementById('addProductImage');
                if (imageInput.files.length > 0) {
                    newProduct.image = URL.createObjectURL(imageInput.files[0]);
                }

                allProducts.unshift(newProduct);
                filteredProducts = [...allProducts];
                addProductForm.reset();

                bootstrap.Modal.getInstance(document.getElementById('addProductModal')).hide();

                showProductsSection(); // Usar esta función para refrescar correctamente
                alert('Producto agregado correctamente');
            });
        }
    }

    function openViewModal(product) {
        document.getElementById('viewProductImage').src = product.image;
        document.getElementById('viewProductName').textContent = product.name;
        document.getElementById('viewProductId').textContent = product.id;
        document.getElementById('viewProductCategory').textContent = getCategoryName(product.category);
        document.getElementById('viewProductPrice').textContent = `$${product.price.toLocaleString('es-CO')}`;
        document.getElementById('viewProductStock').textContent = `${product.stock} unidades`;
        document.getElementById('viewProductStatus').textContent = getStatusName(product.status);
        document.getElementById('viewProductDescription').textContent = product.description;

        new bootstrap.Modal(document.getElementById('viewProductModal')).show();
    }

    function openEditModal(product) {
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductStock').value = product.stock;
        document.getElementById('editProductStatus').value = product.status;
        document.getElementById('editProductDescription').value = product.description;

        document.getElementById('editProductForm').onsubmit = function (e) {
            e.preventDefault();

            const updatedProduct = {
                ...product,
                name: document.getElementById('editProductName').value,
                category: document.getElementById('editProductCategory').value,
                price: parseFloat(document.getElementById('editProductPrice').value),
                stock: parseInt(document.getElementById('editProductStock').value),
                status: document.getElementById('editProductStatus').value,
                description: document.getElementById('editProductDescription').value
            };

            const index = allProducts.findIndex(p => p.id === product.id);
            if (index !== -1) allProducts[index] = updatedProduct;

            bootstrap.Modal.getInstance(document.getElementById('editProductModal')).hide();
            showProductsSection(); // Usar esta función para refrescar correctamente
            alert('Producto actualizado correctamente');
        };

        new bootstrap.Modal(document.getElementById('editProductModal')).show();
    }

    function openDeleteModal(productId) {
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;

        document.getElementById('productToDeleteName').textContent = product.name;

        document.getElementById('confirmDelete').onclick = function () {
            const index = allProducts.findIndex(p => p.id === productId);
            if (index !== -1) {
                allProducts.splice(index, 1);
                filteredProducts = allProducts.filter(p => p.id !== productId);
            }

            bootstrap.Modal.getInstance(document.getElementById('deleteProductModal')).hide();
            showProductsSection(); // Usar esta función para refrescar correctamente
            alert('Producto eliminado correctamente');
        };

        new bootstrap.Modal(document.getElementById('deleteProductModal')).show();
    }

    // ========== FUNCIONES HELPER ==========
    function getCategoryClass(category) {
        const classes = {
            'laptops': 'bg-primary',
            'smartphones': 'bg-info',
            'audio': 'bg-warning',
            'gaming': 'bg-danger',
            'components': 'bg-secondary'
        };
        return classes[category] || 'bg-dark';
    }

    function getCategoryName(category) {
        const names = {
            'laptops': 'Laptops',
            'smartphones': 'Smartphones',
            'audio': 'Audio',
            'gaming': 'Gaming',
            'components': 'Componentes'
        };
        return names[category] || category;
    }

    function getStatusClass(status) {
        const classes = {
            'active': 'bg-success',
            'inactive': 'bg-secondary',
            'out-of-stock': 'bg-danger'
        };
        return classes[status] || 'bg-dark';
    }

    function getStatusName(status) {
        const names = {
            'active': 'Activo',
            'inactive': 'Inactivo',
            'out-of-stock': 'Agotado'
        };
        return names[status] || status;
    }



    // ========== CERRAR SESIÓN ==========
    function setupLogoutButton() {
        const logoutBtn = document.getElementById('logout-btn');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();

                if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                    // Simulación de cierre de sesión
                    localStorage.removeItem('adminToken'); // Si usas almacenamiento local
                    window.location.href = 'index.html';
                }
            });
        }
    }

    // ========== CONFIGURACIÓN DEL MODAL ==========
    function setupConfigModal() {
        const configLink = document.querySelector('.dropdown-item[data-bs-toggle="offcanvas"]');

        if (configLink) {
            // No necesitamos instanciar el offcanvas aquí

            // Obtener elementos del DOM
            const profilePicture = document.getElementById('profilePicture');
            const changeProfilePictureInput = document.getElementById('changeProfilePicture');
            const generalSettingsForm = document.getElementById('generalSettingsForm');
            const securitySettingsForm = document.getElementById('securitySettingsForm');
            const notificationSettingsForm = document.getElementById('notificationSettingsForm');

            // Evento para cambiar la foto de perfil
            changeProfilePictureInput.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profilePicture.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            // Evento para el formulario de configuración general
            if (generalSettingsForm) {
                generalSettingsForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const name = document.getElementById('name').value;
                    const companyName = document.getElementById('companyName').value;
                    const email = document.getElementById('email').value;
                    console.log('Guardar configuración general:', name, companyName, email);
                    // Aquí iría la lógica para guardar en el servidor
                    // Cerrar el offcanvas (opcional)
                    const offcanvasElement = document.getElementById('profileConfigOffcanvas');
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                    bsOffcanvas.hide();
                });
            }

            // Evento para el formulario de seguridad
            if (securitySettingsForm) {
                securitySettingsForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const currentPassword = document.getElementById('currentPassword').value;
                    const newPassword = document.getElementById('newPassword').value;
                    const confirmPassword = document.getElementById('confirmPassword').value;
                    console.log('Cambiar contraseña:', currentPassword, newPassword, confirmPassword);
                    // Aquí iría la lógica para cambiar la contraseña en el servidor
                    // Cerrar el offcanvas (opcional)
                    const offcanvasElement = document.getElementById('profileConfigOffcanvas');
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                    bsOffcanvas.hide();
                });
            }

            // Evento para el formulario de notificaciones
            if (notificationSettingsForm) {
                notificationSettingsForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const emailNotifications = document.getElementById('emailNotifications').checked;
                    const pushNotifications = document.getElementById('pushNotifications').checked;
                    console.log('Preferencias de notificación:', emailNotifications, pushNotifications);
                    // Aquí iría la lógica para guardar las preferencias en el servidor
                    // Cerrar el offcanvas (opcional)
                    const offcanvasElement = document.getElementById('profileConfigOffcanvas');
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                    bsOffcanvas.hide();
                });
            }
        }
    }




    // ========== INICIALIZACIÓN ==========
    init();
});