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
  modalFeedback.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      windowClose();
    }
  });

  isOpen.addEventListener('click', () => {
    windowClose();
  });

  buttonClose.addEventListener('click', () => {
    windowClose();
  });
};

export default modalClose;
