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

  function trapFocus(element) {
    let focusableEls = element.querySelectorAll('.modal-feedback__name, #phone-mask, #modal-textfield, .modal-feedback__send, #modal-agreement, .modal-feedback__button-close');
    let firstFocusableEl = focusableEls[0];
    let lastFocusableEl = focusableEls[focusableEls.length - 1];
    let KEYCODE_TAB = 9;

    element.addEventListener('keydown', function(e) {
      let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
  trapFocus();
};


export default modalOpen;
