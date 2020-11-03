window.onload = main
//window.addEventListener('load', main())

function main() {
  startSliderAnimation()
}

function startSliderAnimation() {
  setInterval(changeActiveImage, 3000)
}

function changeActiveImage() {
  const images = document.querySelectorAll('.img')
  console.log(images)

  for (let i = 0; i < images.length; i++) {
    console.log(i)
    if (images[i].classList.contains('show')) {
      images[i].classList.remove('show')

      nextIndex = (i + 1) % images.length
      images[nextIndex].classList.add('show')
      break
    }

  }
}