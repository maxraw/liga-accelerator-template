const navigationButton = document.querySelector('.footer-navigation__button');
const footerNavigation = document.querySelector('.footer-navigation');
const navigationList = document.querySelector('.footer-navigation__list');
const navigationListTitle = footerNavigation.querySelector('h2');
const footerContacts = document.querySelector('.footer-contacts');
const contactsList = document.querySelector('.footer-contacts__list');
const contactsListTitle = footerContacts.querySelector('h2');


const navigationListOpen = () => {
  navigationButton.addEventListener('click', () => {
    if (contactsList.classList.contains('footer-contacts__list--open')) {
      contactsList.classList.toggle('footer-contacts__list--open');
      contactsListTitle.classList.toggle('footer-contacts__before-closed');
      contactsListTitle.classList.toggle('footer-contacts__before-open');
    }

    navigationList.classList.toggle('footer-navigation__list--open');
    navigationListTitle.classList.toggle('footer-navigation__before-closed');
    navigationListTitle.classList.toggle('footer-navigation__before--open');
  });
};


export default navigationListOpen;
