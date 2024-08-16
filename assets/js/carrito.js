document.addEventListener('DOMContentLoaded', function () {

    let minorBtn = document.getElementById('minor-btn');
    let majorBtn = document.getElementById('major-btn');
    let minor = document.querySelector('.minor');
    let major = document.querySelector('.major');
    var amount = parseFloat(document.querySelector('.amount').innerText);

    function updateMinorBtnState() {
        if (count <= 1) {
            minorBtn.disabled = true;
            minor.classList.add('disable')
        } else {
            minorBtn.disabled = false;
            minor.classList.remove('disable')
        }
    }

    function updateMajorBtnState() {
        if (count >= amount) {
            majorBtn.disabled = true;
            major.classList.add('disable')
        } else {
            majorBtn.disabled = false;
            major.classList.remove('disable')
        }
    }


    var count = parseFloat(document.getElementById('count').innerText)
    // counter = 0;
    minorBtn.addEventListener('click', function () {
        count--
        document.getElementById('count').innerText = count;
        updateMinorBtnState()
        updateMajorBtnState()
    })

    majorBtn.addEventListener('click', function () {
        count++
        document.getElementById('count').innerText = count;
        updateMinorBtnState()
        updateMajorBtnState()
    })


    var mediaQuery = window.matchMedia('(max-width: 768px)');

    function large() {
        window.addEventListener('scroll', function () {
            var summary = document.getElementById('summary');
            var articles = document.querySelectorAll('.article');

            var firstArticle = articles[0]
            var lastArticle = articles[articles.length - 1];

            var firstArticleTop = firstArticle.getBoundingClientRect().top + window.scrollY;
            var lastArticleBottom = lastArticle.getBoundingClientRect().bottom + window.scrollY;

            var stopPosition = lastArticleBottom - summary.offsetHeight;
            var offsetTop = 30;

            if (window.scrollY >= stopPosition) {
                summary.style.position = 'absolute';
                summary.style.top = stopPosition + 'px';
            } else if (window.scrollY >= firstArticleTop) {
                summary.style.position = 'fixed';
                summary.style.top = offsetTop + 'px';
            } else {
                summary.style.position = 'absolute';
                summary.style.top = firstArticleTop + 'px';
            }
        });
    }

    function middle() {
        window.addEventListener('scroll', function () {
            var summary = document.getElementById('summary');
            var articles = document.querySelectorAll('.article');

            var lastArticle = articles[articles.length - 1];
            var lastArticleRect = lastArticle.getBoundingClientRect()

            var lastArticleBottom = lastArticleRect.bottom + window.scrollY;
            var summaryHeight = summary.offsetHeight;

            var stopPosition = lastArticleBottom + 50;

            var windowBottom = window.scrollY + window.innerHeight;
            

            if (windowBottom >= stopPosition + summaryHeight) {
                summary.style.position = 'absolute';
                summary.style.top = stopPosition + 'px';
                summary.style.bottom = 'auto';
            } else {
                summary.style.position = 'fixed';
                summary.style.bottom = '0';
                summary.style.top = '';
            }
        });
    }

    function handleScreenChange(e) {
        if (e.matches) {
            middle();
        } else {
            large();
        }
    }

    handleScreenChange(mediaQuery);

    mediaQuery.addEventListener('change', handleScreenChange);

    updateMinorBtnState()
    updateMajorBtnState()

})