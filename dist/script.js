const burgerBtn = document.querySelector('.toggle__menu');

burgerBtn.addEventListener('click',(e)=>{
    const btn = e.currentTarget;
    const header = document.querySelector('.header__nav');

    if(header.style.display === 'none'){
        header.style.display = 'block';
    }else{
        header.style.display = 'none';
    }
})