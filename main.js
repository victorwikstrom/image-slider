window.addEventListener('load', () => initSlider())

const initSlider = () => {
  const slideList = getSlides('slide') // Add classname of slide
  let currentSlide = 0
  slideList[currentSlide].style.opacity = 1
  
  nextButton = document.getElementById('next-btn')
  prevButton = document.getElementById('prev-btn')

  nextButton.addEventListener('click', showNextSlide = () => {
    let nextSlide = currentSlide + 1 
    if (currentSlide === slideList.length - 1) {
      nextSlide = 0
    }
    slideList[currentSlide].style.opacity = 0
    slideList[nextSlide].style.opacity = 1
    currentSlide = nextSlide
  })

  prevButton.addEventListener('click', showPrevSlide = () => {
    let prevSlide = currentSlide - 1
    if (currentSlide === 0) {
      prevSlide = slideList.length - 1
    }
    slideList[currentSlide].style.opacity = 0
    slideList[prevSlide].style.opacity = 1
    currentSlide = prevSlide
  })
}

const getSlides = (slidesId) => {
  const slides = document.getElementsByClassName(slidesId)
  return slides
}






