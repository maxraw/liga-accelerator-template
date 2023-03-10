const footerContacts = document.querySelector('.footer__contacts');
const contactsList = document.querySelector('.footer__contacts-list');
const contactsListTitle = footerContacts.querySelector('h2');
const contactsButton = document.querySelector('.footer__contacts-button');


const contactsListOpen = () => {
  contactsButton.addEventListener('click', () => {
    contactsList.classList.toggle('footer__contacts-list--open');
    contactsListTitle.classList.toggle('footer__contacts-before--open');
    contactsListTitle.classList.toggle('footer__contacts-before-closed');
  });
};


export default contactsListOpen;

