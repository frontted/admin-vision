import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

const default_snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

const default_obj = {
  message: 'Notified!',
  actionText: 'Undo',
  actionHandler: function () {
    //
  }
};

const default_btn = document.querySelector('#default-snackbar');

default_btn.addEventListener('click', function () {
  default_snackbar.show(default_obj);
})

const start_snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar--align-start'));
const start_obj = {
  message: 'Notified start',
  actionText: 'Undo',
  actionHandler: function () {
    //
  }
};

const start_btn = document.querySelector('#start-snackbar');
start_btn.addEventListener('click', function () {
  start_snackbar.show(start_obj);
})

const start_snackbar_rtl = new MDCSnackbar(document.querySelector('.mdc-snackbar--right'));
const start_obj_rtl = {
  message: 'Notified start',
  actionText: 'Undo',
  actionHandler: function () {
    //
  }
};

const start_btn_rtl = document.querySelector('#start-snackbar-rtl');
start_btn_rtl.addEventListener('click', function () {
  start_snackbar_rtl.show(start_obj_rtl);
})