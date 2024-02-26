const swiperContainer = document.querySelector('.swiper_container');
const swiperControlsContainer = document.querySelector('.swiper_controls');
const swiperControls = ['previous', 'next'];
const swiperItem = document.querySelectorAll('.swiper_item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [items];
    }

    updateSwiper(){
        this.carouselArray.forEach(el => {
            el.classList.remove('swiper-item-1');
            el.classList.remove('swiper-item-2');
            el.classList.remove('swiper-item-3');
            el.classList.remove('swiper-item-4');
            el.classList.remove('swiper-item-5');
        });
        this.carouselArray.slice(0,5).forEach((el, i) =>{
            el.classList.add(`swiper-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if (direction.className == 'swiper_controls_previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateSwiper();
    }
    setControls(){
        this.carouselControls.forEach(control => {
            swiperControlsContainer.appendChild(document.createElement('button')).className = `swiper_controls_${control}`;
            document.querySelector(`.swiper_controls_${control}`).innertext = control;
        });
    }
    useControls(){
        const triggers = [...swiperControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}
const exampleCarousel = new Carousel(swiperContainer, swiperControlsContainer, swiperControls);
exampleCarousel.setControls();
exampleCarousel.useControls();