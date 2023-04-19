const buttonClose = document.querySelector('.modal-feedback__button-close');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');
const wrapper = document.querySelector('.wrapper');

const windowClose = () => {
  isOpen.style.display = 'none';
  modalFeedback.style.display = 'none';
  document.body.style.overflow = 'auto';
  wrapper.inert = false;

  const previouslyFocusedElement = document.querySelector('.js-modal-focus');

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
};

const modalClose = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      windowClose();
    }
  });

  isOpen.addEventListener('click', (e) => {
    if (e.target === isOpen) {
      windowClose();
    }
  });

  buttonClose.addEventListener('click', (e) => {
    if (e.target === buttonClose) {
      windowClose();
    }
  });
};


export default modalClose;
