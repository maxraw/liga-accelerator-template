const buttonOpen = document.querySelector('.header__button');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');
const inputName = document.querySelector('#modal-name');
const wrapper = document.querySelector('.wrapper');

const modalOpen = () => {
  buttonOpen.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    isOpen.style.display = 'block';
    modalFeedback.style.display = 'block';
    inputName.focus();
    wrapper.inert = true;
  });

  isOpen.addEventListener('transitionend', function (event) {
    if (event.target.classList.contains('modal-feedback') && modal.classList.contains('is-open')) {
      inputName.focus();
    }
  });

  const modal = document.querySelector('.modal-feedback');
  const focusableElements = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  let KEYCODE_TAB = 9;

  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
};


export default modalOpen;
