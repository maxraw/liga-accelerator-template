const navigationButton = document.querySelector('.footer-navigation__button');
const footerNavigation = document.querySelector('.footer-navigation');
const navigationList = document.querySelector('.footer-navigation__list');
const navigationListTitle = footerNavigation.querySelector('h2');


const navigationListOpen = () => {
  navigationButton.addEventListener('click', () => {
    navigationList.classList.toggle('footer-navigation__list--open');
    navigationListTitle.classList.toggle('footer-navigation__before-closed');
    navigationListTitle.classList.toggle('footer-navigation__before--open');
  });
};


export default navigationListOpen;
