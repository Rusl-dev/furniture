const radioBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (btn of radioBtns) {
    btn.addEventListener('click', showHint)
};

function showHint(event) {
    event.stopPropagation();
    
    // hide all hints
    for(hint of infoHints){
        hint.classList.add('none');
    }
    // show current hint
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

document.addEventListener('click', closeHints);

function closeHints() {
    for(hint of infoHints){
        hint.classList.add('none');
    }
}

for(hint of infoHints){
    hint.addEventListener('click', (e) => e.stopPropagation());
}


//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters    
    // loop: true,

    slidesPerView: 4,
    spaceBetween: 42,
    freeMode: true,

    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1020: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        268: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider__next',
      prevEl: '#slider__prev',
    },


    

  });


//tab

const allTabBtns = document.querySelectorAll('.tab-controls__btn');
const allProducts = document.querySelectorAll('[data-tab-value]');


for(btn of allTabBtns){
    // активация кнопок tab
    btn.addEventListener('click', function() {
        for(btn of allTabBtns) {
            btn.classList.remove('tab-controls__btn--active');
        };        
        this.classList.add('tab-controls__btn--active');
        
        

        for(prod of allProducts){
            if(this.dataset.tab == 'all'){
                prod.classList.remove('none');
            } else {
                if(prod.dataset.tabValue === this.dataset.tab){
                    prod.classList.remove('none');
                } else {
                    prod.classList.add('none');
                }            
            }
        }
        swiper.update();
    })


}

//modile-nav

const openNavBtn = document.querySelector('#nav-open-btn');
const closeNavBtn = document.querySelector('#nav-close-btn');

openNavBtn.onclick = function(){
    document.querySelector('.mobile-nav__wrapper').classList.remove('none');        
}

closeNavBtn.onclick = function(){
    document.querySelector('.mobile-nav__wrapper').classList.add('none');    
}



