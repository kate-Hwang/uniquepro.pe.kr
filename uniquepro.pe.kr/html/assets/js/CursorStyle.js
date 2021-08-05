// Variables
const $cursor = $('.cursor')


// Functions
const onMouseMove = (e) => {
  const x = e.pageX
  const y = e.pageY
  
  TweenMax.to($cursor, 0.5, {
    x: x,
    y: y,
    ease: Cubic.easeOut,
    force3D: true,
  }, 0.2)
}
//Events

document.addEventListener('mousemove', onMouseMove)