const footerContacts = document.querySelector('.footer-contacts');
const contactsList = document.querySelector('.footer-contacts__list');
const contactsListTitle = footerContacts.querySelector('h2');
const contactsButton = document.querySelector('.footer-contacts__button');
const footerNavigation = document.querySelector('.footer-navigation');
const navigationList = document.querySelector('.footer-navigation__list-wrapper');
const navigationListTitle = footerNavigation.querySelector('h2');


const contactsListOpen = () => {
  contactsButton.addEventListener('click', () => {
    if (navigationList) {
      if (navigationList.classList.contains('footer-navigation__list--open')) {
        navigationList.classList.toggle('footer-navigation__list--open');
        navigationListTitle.classList.toggle('footer-navigation__before-closed');
        navigationListTitle.classList.toggle('footer-navigation__before--open');
      }
    }

    contactsList.classList.toggle('footer-contacts__list--open');
    contactsListTitle.classList.toggle('footer-contacts__before-closed');
    contactsListTitle.classList.toggle('footer-contacts__before-open');
  });
};


export default contactsListOpen;

