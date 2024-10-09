document.addEventListener('DOMContentLoaded', function () {


    var listaProductos = [];

    listaProductos.push({ id: 1, nombre: "francesco virgolini la maquina mas veloz de tote italie", precio: 18750, stock: 4, imagen: "" })
    listaProductos.push({ id: 2, nombre: "producto 2", precio: 15300, stock: 10, imagen: "" })
    listaProductos.push({ id: 3, nombre: "producto 3", precio: 25000, stock: 2, imagen: "" })

    function templateHtml(p) {
        return `<article class="article p-1 m-4 border border-4 bg-light overflow-hidden">
                    <div class="row">
                        <div class="mx-3 col-1">
                            <img src="`+ p.imagen +`" width="50px" height="50px" alt="">
                        </div>
                        <div class="p-2 ms-4 col-8">
                            <div class="">
                                <a class="text-name text-decoration-none text-dark" href="#">`+ p.nombre +`</a>
                            </div>
                            <button class="link">eliminar</button>
                        </div>
                    </div>
                    <div class="container-price p-2 d-flex">
                        <div class="ms-5 col-4">
                            <div class="count-container d-flex p-1">
                                <button aria-label="minor" id="minor-btn" class="minor-btn" disabled="true">
                                    <svg class="minor disable" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"
                                        fill="rgba(0, 0, 0, 1)">
                                        <path d="M1.99902 8.6007H13.999V7.4007H1.99902V8.6007Z"></path>
                                    </svg>
                                </button>
                                <input class="count" type="number" min="1" value="1" step="1" aria-label="count" >
                                <button aria-label="major" id="major-btn" class="major-btn">
                                    <svg class="major" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"
                                        fill="rgba(0, 0, 0, 1)">
                                        <path
                                            d="M7.39902 7.40067V2.00067H8.59902V7.40067H13.999V8.60067H8.59902V14.0007H7.39902V8.60067H1.99902V7.40067H7.39902Z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <p class="amount-text fw-light"><span class="amount">`+ p.stock +`</span> disponibles</p>
                        </div>
                        <div class="text-end  w-100 ">
                            <div class="unit-price fw-light">
                                $<span class="unite">`+ p.precio +`</span>
                            </div>
                            <div class="">
                                $<span class="price">`+ p.precio +`</span>
                            </div>
                        </div>
                        
                    </div>
                </article> `
    }

    const counterContainer = document.getElementById('counter-container')

    for (let i = 0; i < listaProductos.length; i++) {
        const producto = listaProductos[i];
        counterContainer.innerHTML += templateHtml(producto);
    }


    // let counterContainer = document.querySelectorAll('.counter-container');
    document.querySelectorAll('.container-price').forEach(container => {
        let minor = container.querySelector('.minor');
        let major = container.querySelector('.major');
        let minorBtn = container.querySelector('.minor-btn');
        let majorBtn = container.querySelector('.major-btn');
        var price  = parseFloat(container.querySelector('.price').innerText)
        var amount = parseFloat(container.querySelector('.amount').innerText);

        let count = container.querySelector('.count');

        function updateCount(){
            var currentCount = parseFloat(count.value)

            if (currentCount <= 1) {
                minorBtn.disabled = true;
                minor.classList.add('disable')
            } else {
                minorBtn.disabled = false;
                minor.classList.remove('disable')
            }

            if (currentCount >= amount) {
                majorBtn.disabled = true;
                major.classList.add('disable')
            } else {
                majorBtn.disabled = false;
                major.classList.remove('disable')
            }
        }


        // counter = 0;

        minorBtn.addEventListener('click', function () {
            if (parseFloat(count.value) > 1) {
                count.value = parseFloat(count.value) - 1;
                updateCount();
            }
        })


        majorBtn.addEventListener('click', function () {
            if (parseFloat(count.value) < amount) {
                count.value = parseFloat(count.value) + 1;
                updateCount();
            }
        })

        updateCount();

    })



    var mediaQuery = window.matchMedia('(max-width: 768px)');

    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function large() {
        window.addEventListener('scroll', debounce(function () {
            var summary = document.getElementById('summary');
            var articles = document.querySelectorAll('.article');

            var firstArticle = articles[0]
            var lastArticle = articles[articles.length - 1];

            var firstArticleTop = firstArticle.getBoundingClientRect().top + window.scrollY;
            var lastArticleBottom = lastArticle.getBoundingClientRect().bottom + window.scrollY;

            var stopPosition = lastArticleBottom - summary.offsetHeight;

            if (window.scrollY >= stopPosition) {
                summary.style.position = 'absolute';
                summary.style.top = stopPosition + 'px';
            } else if (window.scrollY >= firstArticleTop) {
                summary.style.position = 'fixed';
                summary.style.top = '30px';
            } else {
                summary.style.position = 'absolute';
                summary.style.top = firstArticleTop + 'px';
            }
        }));
    }

    function small() {
        function updateSummaryPosition() {
            var summary = document.getElementById('summary');
            const recommend = document.getElementById('recommended').getBoundingClientRect();
            const space = document.getElementById('space');

            var recommendPosition = recommend.top + window.scrollY;
            var summaryHeight = summary.offsetHeight;

            var stopPosition = recommendPosition - 200;

            var windowTop = window.scrollY + window.innerHeight;


            if (windowTop >= stopPosition + summaryHeight) {
                space.style.height = '200px'
                summary.style.position = 'absolute';
                summary.style.top = stopPosition + 'px';
                summary.style.bottom = 'auto';
            } else {
                summary.style.position = 'fixed';
                summary.style.bottom = '0';
                summary.style.top = '';
            }
        }

        window.addEventListener('scroll', debounce(updateSummaryPosition))

        window.addEventListener('resize', debounce(updateSummaryPosition))

        updateSummaryPosition()

    }


    function change(item) {
        if (item.matches) {
            small();
        } else {
            large();
        }
    }

    change(mediaQuery);

    mediaQuery.addEventListener('change', change);


})