document.addEventListener('DOMContentLoaded', function(){

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
    minorBtn.addEventListener('click', function(){
        count--
        document.getElementById('count').innerText = count;
        updateMinorBtnState()
        updateMajorBtnState()
    })

    majorBtn.addEventListener('click', function(){
        count++
        document.getElementById('count').innerText = count;
        updateMinorBtnState()
        updateMajorBtnState()
    })

    updateMinorBtnState()
    updateMajorBtnState()

})