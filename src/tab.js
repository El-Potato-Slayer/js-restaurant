import Hamburger from './navbar';

const ham = new Hamburger(false);
ham.setState();

function displayContentOnClick(navLinks, pages) {
  navLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', () => {
      pages.forEach(page => {
        page.classList.add('hidden');
      });

      navLinks.forEach(t => {
        t.classList.remove('active-link');
      });

      navLink.classList.add('active-link');

      pages[index].classList.remove('hidden');

      ham.falsifyState();
    });
  });
}

function displayContentOnLoad(pages) {
  document.addEventListener('DOMContentLoaded', () => {
    pages.forEach(page => {
      page.classList.add('hidden');
    });
    pages[0].classList.remove('hidden');
  });
}

export default function updateContent() {
  const navLinks = document.querySelectorAll('nav div p');
  const pages = document.querySelectorAll('.nav-content');

  displayContentOnLoad(pages);
  displayContentOnClick(navLinks, pages);
}
