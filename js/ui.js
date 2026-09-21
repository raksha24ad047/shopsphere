import { products } from "./products.js";


/* ========================================
   HOME PAGE
   ======================================== */

export function renderHome() {

    return `
        <section class="hero-section">

            <div class="hero-content">

                <span class="hero-badge">
                    ✨ Welcome to the future of shopping
                </span>

                <h1>
                    Your everyday shopping,
                    <span>reimagined.</span>
                </h1>

                <p>
                    Discover carefully selected products across
                    electronics, fashion and home essentials —
                    all in one simple shopping experience.
                </p>

                <div class="hero-buttons">

                    <a
                        href="#products"
                        class="btn hero-primary"
                        data-route>
                        Explore Products →
                    </a>

                    <a
                        href="#about"
                        class="btn hero-secondary"
                        data-route>
                        Learn More
                    </a>

                </div>

                <div class="hero-stats">

                    <div>
                        <strong>8+</strong>
                        <span>Products</span>
                    </div>

                    <div>
                        <strong>3</strong>
                        <span>Categories</span>
                    </div>

                    <div>
                        <strong>24/7</strong>
                        <span>Shopping</span>
                    </div>

                </div>

            </div>


            <div class="hero-visual">

                <div class="floating-card card-one">
                    🎧
                    <span>Electronics</span>
                </div>

                <div class="floating-card card-two">
                    👟
                    <span>Fashion</span>
                </div>

                <div class="floating-card card-three">
                    ☕
                    <span>Home</span>
                </div>

                <div class="hero-circle">
                    🛍️
                </div>

            </div>

        </section>


        <section class="categories-section">

            <div class="section-heading">

                <span>EXPLORE</span>

                <h2>Shop by Category</h2>

                <p>
                    Find exactly what you're looking for.
                </p>

            </div>


            <div class="category-cards">

                <a
                    href="#products"
                    class="category-card"
                    data-route>

                    <div class="category-icon">
                        🎧
                    </div>

                    <h3>Electronics</h3>

                    <p>
                        Smart devices & accessories
                    </p>

                    <span>Explore →</span>

                </a>


                <a
                    href="#products"
                    class="category-card"
                    data-route>

                    <div class="category-icon">
                        👟
                    </div>

                    <h3>Fashion</h3>

                    <p>
                        Style for every occasion
                    </p>

                    <span>Explore →</span>

                </a>


                <a
                    href="#products"
                    class="category-card"
                    data-route>

                    <div class="category-icon">
                        🏠
                    </div>

                    <h3>Home</h3>

                    <p>
                        Make your space better
                    </p>

                    <span>Explore →</span>

                </a>

            </div>

        </section>


        <section class="why-section">

            <div class="section-heading">

                <span>WHY SHOPSPHERE?</span>

                <h2>Shopping made simple.</h2>

            </div>


            <div class="features">

                <div class="feature">
                    <div>⚡</div>
                    <h3>Fast Experience</h3>
                    <p>
                        Lightweight and responsive design
                        for a smooth browsing experience.
                    </p>
                </div>

                <div class="feature">
                    <div>🔍</div>
                    <h3>Easy Discovery</h3>
                    <p>
                        Search and filter products quickly
                        to find what you need.
                    </p>
                </div>

                <div class="feature">
                    <div>📱</div>
                    <h3>Responsive Design</h3>
                    <p>
                        Enjoy ShopSphere on desktop,
                        tablet and mobile devices.
                    </p>
                </div>

            </div>

        </section>
    `;
}

 
 


/* ========================================
   PRODUCTS PAGE
   ======================================== */

export function renderProducts() {

    return `
        <section class="container">

            <div class="page-title">

                <h1>Our Products</h1>

                <p>
                    Browse our collection and find something you love.
                </p>

            </div>


            <div class="controls">

                <input
                    type="search"
                    id="search-input"
                    class="search-box"
                    placeholder="Search products..."
                    aria-label="Search products"
                >


                <select
                    id="category-filter"
                    class="filter-select"
                    aria-label="Filter products by category"
                >

                    <option value="all">
                        All Categories
                    </option>

                    <option value="Electronics">
                        Electronics
                    </option>

                    <option value="Fashion">
                        Fashion
                    </option>

                    <option value="Home">
                        Home
                    </option>

                </select>

            </div>


            <div
                id="product-grid"
                class="product-grid">
            </div>

        </section>
    `;
}


/* ========================================
   DISPLAY PRODUCT CARDS
   ======================================== */

export function displayProductCards(
    productList = products
) {

    const productGrid =
        document.getElementById("product-grid");


    if (!productGrid) {
        return;
    }


    if (productList.length === 0) {

        productGrid.innerHTML = `
            <p class="empty-message">
                No products found.
            </p>
        `;

        return;
    }


    productGrid.innerHTML = productList.map(product => {

        return `
            <article class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    width="400"
                    height="300"
                >

                <div class="product-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <p class="product-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <a
                        href="#product/${product.id}"
                        class="btn"
                        data-route>
                        View Details
                    </a>

                </div>

            </article>
        `;

    }).join("");
}


/* ========================================
   SEARCH & FILTER
   ======================================== */

export function setupProductFilters() {

    const searchInput =
        document.getElementById("search-input");

    const categoryFilter =
        document.getElementById("category-filter");


    if (!searchInput || !categoryFilter) {
        return;
    }


    function filterProducts() {

        const searchTerm =
            searchInput.value.toLowerCase().trim();

        const selectedCategory =
            categoryFilter.value;


        const filteredProducts =
            products.filter(product => {

                const matchesSearch =
                    product.name
                        .toLowerCase()
                        .includes(searchTerm);


                const matchesCategory =
                    selectedCategory === "all" ||
                    product.category === selectedCategory;


                return matchesSearch && matchesCategory;

            });


        displayProductCards(filteredProducts);
    }


    searchInput.addEventListener(
        "input",
        filterProducts
    );


    categoryFilter.addEventListener(
        "change",
        filterProducts
    );
}


/* ========================================
   PRODUCT DETAIL PAGE
   ======================================== */

export function renderProductDetail(id) {

    const product =
        products.find(
            item => item.id === Number(id)
        );


    if (!product) {

        return `
            <section class="container">

                <div class="error-message">

                    <h1>Product Not Found</h1>

                    <p>
                        Sorry, the product you are looking for
                        does not exist.
                    </p>

                    <br>

                    <a
                        href="#products"
                        class="btn"
                        data-route>
                        Back to Products
                    </a>

                </div>

            </section>
        `;
    }


    return `
        <section class="container">

            <div class="product-detail">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    width="600"
                    height="500"
                >


                <div class="product-detail-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h1>
                        ${product.name}
                    </h1>

                    <p class="product-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <p>
                        ${product.description}
                    </p>

                    <button class="btn">
                        Add to Cart
                    </button>

                    <br><br>

                    <a
                        href="#products"
                        data-route>
                        ← Back to Products
                    </a>

                </div>

            </div>

        </section>
    `;
}


/* ========================================
   ABOUT PAGE
   ======================================== */

export function renderAbout() {

    return `
        <section class="container">

            <div class="about-section">

                <h1>About ShopSphere</h1>

                <p>
                    ShopSphere is a modern e-commerce product
                    catalog created as a full-stack web development
                    capstone project.
                </p>

                <p>
                    The application demonstrates modular JavaScript,
                    client-side routing, responsive design,
                    product filtering and optimized web assets.
                </p>

                <p>
                    Our goal is to provide a simple and enjoyable
                    shopping experience across different devices.
                </p>

            </div>

        </section>
    `;
}
