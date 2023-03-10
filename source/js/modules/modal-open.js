const buttonOpen = document.querySelector('.header__button');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');
const inputName = document.querySelector('.modal-feedback__name');
const wrapper = document.querySelector('.wrapper');

const modalOpen = () => {
  buttonOpen.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    isOpen.style.display = 'block';
    modalFeedback.style.display = 'block';
    inputName.focus();
    wrapper.inert = true;
  });
};

export default modalOpen;
