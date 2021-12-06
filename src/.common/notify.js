import Toastify from 'toastify-js';

export const showError = (text) => 
    Toastify({
        text,
        style: {
            background: "#ec4145"
        }
    }).showToast();

export const showMessage = (text) => 
    Toastify({
        text
    }).showToast();