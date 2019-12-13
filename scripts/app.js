
// function blink(arg1, ar2) {
//   const blinkIn = setInterval(() => {
//     document.getElementsById(arg1).classList.add(`${arg2}`)
//     setTimeout()
//   },1000)

  function blink (arg) {
    const f = document.getElementById(arg)
    // console.log(f.innerHTML)
    setInterval(function () {
      f.style.visibility = (f.style.visibility == 'hidden' ? 'visible' : 'hidden')
    }, 500)
  }

document.addEventListener('DOMContentLoaded', () => {
blink('text-cursor')
})
