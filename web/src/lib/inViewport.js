// check if Ref is in viewport
const isInViewport = (element) => {
  if (element.classList.contains('shown') === true) {
    return false
  }

  const {top, bottom} = element.getBoundingClientRect()

  return (
    top <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

export default isInViewport
