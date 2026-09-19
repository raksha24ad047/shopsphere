import {
    renderHome,
    renderProducts,
    renderProductDetail,
    renderAbout,
    displayProductCards,
    setupProductFilters
} from "./ui.js";


/* ========================================
   ROUTER
   ======================================== */

export function router() {

    const app =
        document.getElementById("app");

    const hash =
        window.location.hash || "#home";


    /* ========================================
       HOME
       ======================================== */

    if (hash === "#home" || hash === "#") {

        app.innerHTML =
            renderHome();

        return;
    }


    /* ========================================
       PRODUCTS
       ======================================== */

    if (hash === "#products") {

        app.innerHTML =
            renderProducts();

        displayProductCards();

        setupProductFilters();

        return;
    }


    /* ========================================
       PRODUCT DETAILS
       ======================================== */

    if (hash.startsWith("#product/")) {

        const productId =
            hash.split("/")[1];

        app.innerHTML =
            renderProductDetail(productId);

        return;
    }


    /* ========================================
       ABOUT
       ======================================== */

    if (hash === "#about") {

        app.innerHTML =
            renderAbout();

        return;
    }


    /* ========================================
       PAGE NOT FOUND
       ======================================== */

    app.innerHTML = `

        <section class="container">

            <div class="error-message">

                <h1>404 - Page Not Found</h1>

                <p>
                    Sorry, the page you are looking for
                    does not exist.
                </p>

                <br>

                <a
                    href="#home"
                    class="btn"
                    data-route>
                    Go Home
                </a>

            </div>

        </section>

    `;
}


/* ========================================
   NAVIGATION
   ======================================== */

export function setupNavigation() {

    document.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest("[data-route]");


            if (!link) {
                return;
            }


            const href =
                link.getAttribute("href");


            if (!href || !href.startsWith("#")) {
                return;
            }


            event.preventDefault();

            window.location.hash =
                href.substring(1);
        }
    );
}


/* ========================================
   LISTEN FOR ROUTE CHANGES
   ======================================== */

export function startRouter() {

    window.addEventListener(
        "hashchange",
        router
    );


    setupNavigation();

    router();
}
