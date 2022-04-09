const buttons = document.querySelectorAll('.btn-danger');
var modal = document.querySelector('#myModal');
var modalCancel = document.querySelector('#cancel_confirm');

var sidebar = document.getElementsByClassName('sidebar');
const close_sidebar = document.getElementsByClassName('close_sidebar');

close_sidebar[0].addEventListener('click', () => {
    var width = getComputedStyle(sidebar[0]).getPropertyValue('width');
    
    width = parseFloat(width);
    var vw = $(window).width();


    vw = parseInt((width*100)/vw);
    var nav_item = document.querySelectorAll('.nav-item')

    if(vw == 10){
        for(let nav of nav_item)
            nav.style.display = 'none'
        sidebar[0].style.width = '2vw'
    }
    else{
        for(let nav of nav_item)
            nav.style.display = 'list-item'
        sidebar[0].style.width = '10vw'
    }
        
})

for(let button of buttons){
    button.addEventListener('click', showModal);
}

modalCancel.addEventListener('click', showModal);

function showModal(event){
    modal.classList.toggle('hide')
}

//buttons.addEventListener('click', showModal)
