import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import modalClose from './modules/modal-close';
import modalOpen from './modules/modal-open';
import navigationListOpen from './modules/navigation';
import contactsListOpen from './modules/contacts';
import phoneMask from './modules/phone-mask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  modalClose();
  modalOpen();
  contactsListOpen();
  navigationListOpen();
  document.getElementById('phone-mask').addEventListener('input', phoneMask);
  document.getElementById('phone-mask-modal').addEventListener('input', phoneMask);


  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();

    const lockBtnElement = document.querySelector('.lock');
    const unlockBtnElement = document.querySelector('.unlock');

    lockBtnElement.addEventListener('click', () => window.focusLock.lock('.lock-block'));
    unlockBtnElement.addEventListener('click', () => window.focusLock.unlock());
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
