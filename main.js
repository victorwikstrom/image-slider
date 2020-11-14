window.addEventListener('load', () => initSlider())

/**
 * Initiate the slider and add event listeners to next/prev-buttons
 */
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
    indicators[currentSlide].style.opacity = 0.3
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
    indicators[currentSlide].style.opacity = 0.3
    slideList[prevSlide].style.opacity = 1
    indicators[prevSlide].style.opacity = 1
    currentSlide = prevSlide
  })
}

/**
 * Get all slides and returns array of slides
 * @param {String} slidesId - ID of the slide element
 */
const getSlides = (slidesId) => {
  const slides = document.getElementsByClassName(slidesId)
  return slides
}
/**
 * Creates all indicators (as div's) and returns as an array of indicators
 * @param {Array} slides - Array of all slides
 * @param {String} indicatorContainerId - Id of indicator container (parent of indicators)
 * @param {String} indicatorClassName - CSS class name of indicator
 */
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






