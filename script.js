let dropdowns = document.querySelectorAll('.services_card');
let dropForm = document.querySelector('#services_card_item');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(){
        this.classList.toggle('active')
    })
    })

