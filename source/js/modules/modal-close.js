const buttonClose = document.querySelector('.modal-feedback__button-close');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');
const wrapper = document.querySelector('.wrapper');

const windowClose = () => {
  isOpen.style.display = 'none';
  modalFeedback.style.display = 'none';
  document.body.style.overflow = 'auto';
  wrapper.inert = false;
};

const modalClose = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      windowClose();
    }
  });

  isOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    windowClose();
  });

  buttonClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    windowClose();
  });
};

export default modalClose;
