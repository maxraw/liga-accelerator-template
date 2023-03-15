const footerContacts = document.querySelector('.footer-contacts');
const contactsList = document.querySelector('.footer-contacts__list');
const contactsListTitle = footerContacts.querySelector('h2');
const contactsButton = document.querySelector('.footer-contacts__button');


const contactsListOpen = () => {
  contactsButton.addEventListener('click', () => {
    contactsList.classList.toggle('footer-contacts__list--open');
    contactsListTitle.classList.toggle('footer-contacts__before-open');
    contactsListTitle.classList.toggle('footer-contacts__before-closed');
  });
};


export default contactsListOpen;
