export function Hamburger(state){
  this.state = state
}

Hamburger.prototype.falsifyState = () => {
  Hamburger.state = false
}

Hamburger.prototype.setState = () => {
  const hamburgerWrapper = document.getElementById('hamburger-wrapper')
  const hamburger = document.getElementById('hamburger')
  const links = document.querySelector('.nav-links')
  hamburgerWrapper.addEventListener('click', () => {
    if (Hamburger.state) {
      hamburger.classList.remove('open')
      links.style.top = '-6.5rem'
    } else {
      hamburger.classList.add('open')
      links.style.top = '4.5rem'
    }
    Hamburger.state = !Hamburger.state
  })
}