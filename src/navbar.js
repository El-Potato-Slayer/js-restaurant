export default function Hamburger(state) {
  this.state = state;
}

Hamburger.prototype.falsifyState = () => {
  Hamburger.state = false;
  document.getElementById('hamburger').classList.remove('open');
  document.querySelector('.nav-links').style.top = '-6.5rem';
};

Hamburger.prototype.setState = () => {
  const hamburgerWrapper = document.getElementById('hamburger-wrapper');
  const hamburger = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  hamburgerWrapper.addEventListener('click', () => {
    if (Hamburger.state) {
      hamburger.classList.remove('open');
      links.style.top = '-6.5rem';
    } else {
      hamburger.classList.add('open');
      links.style.top = '4.5rem';
    }
    Hamburger.state = !Hamburger.state;
  });
};