const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.right-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const container = document.querySelectorAll('.responsive-iframe')
const slidesLength = 3

let activeSlideIndex = 0


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
   
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        console.log(activeSlideIndex)
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
            
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    if (activeSlideIndex ==0) {
        activeSlideIndex = 1;
    }
    factor = activeSlideIndex * sliderHeight
    container[activeSlideIndex].style.transform = `translateY(-${factor}px)`
    

 
}
