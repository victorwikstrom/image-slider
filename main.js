
const images = document.querySelectorAll('.img')
const container = document.getElementById('container')
const nextButton = document.getElementById('next-button')
const previousButton = document.getElementById('previous-button')

nextButton.addEventListener('click', showNextImage)
previousButton.addEventListener('click', showPreviousImage)

function showPreviousImage() {
  for (let i = 0; i < images.length; i++)
  if (images[i].classList.contains('show')) {
    images[i].classList.remove('show')

    if (i === 0) {
      lastIndex = images.length - 1
      images[0].classList.remove('show')
      images[lastIndex].classList.add('show')
    } 
    else {
      nextIndex = i - 1
      images[nextIndex].classList.add('show')
    }

    break
  }
}

function showNextImage() {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('show')) {
      images[i].classList.remove('show')

      nextIndex = (i + 1) % images.length
      images[nextIndex].classList.add('show')

      break
    }

  }
}