window.addEventListener('load', () => initSlider())

const initSlider = () => {
  const slideList = getSlides('slide') // Add classname for slide
  const indicators = getIndicators(slideList, 'indicator-container', 'indicator')
  
  let currentSlide = 0
  slideList[currentSlide].style.opacity = 1
  indicators[currentSlide].style.opacity = 1
  
  nextButton = document.getElementById('next-btn')
  prevButton = document.getElementById('prev-btn')


  nextButton.addEventListener('click', showNextSlide = () => {
    let nextSlide = currentSlide + 1 
    if (currentSlide === slideList.length - 1) {
      nextSlide = 0
    }
    slideList[currentSlide].style.opacity = 0
    indicators[currentSlide].style.opacity = 0.5
    slideList[nextSlide].style.opacity = 1
    indicators[nextSlide].style.opacity = 1
    currentSlide = nextSlide
  })
  
  prevButton.addEventListener('click', showPrevSlide = () => {
    let prevSlide = currentSlide - 1
    if (currentSlide === 0) {
      prevSlide = slideList.length - 1
    }
    slideList[currentSlide].style.opacity = 0
    indicators[currentSlide].style.opacity = 0.5
    slideList[prevSlide].style.opacity = 1
    indicators[prevSlide].style.opacity = 1
    currentSlide = prevSlide
  })
}

const getSlides = (slidesId) => {
  const slides = document.getElementsByClassName(slidesId)
  return slides
}
const getIndicators = (slides, indicatorContainerId, indicatorClassName) => {
  container = document.getElementById(indicatorContainerId)
  const indicators = []
  
  for (let slide of slides) {
    const indicator = document.createElement('div')
    indicator.classList.add(indicatorClassName)
    container.appendChild(indicator)
    indicators.push(indicator)
  }
  return indicators
}






