document.addEventListener('DOMContentLoaded', function() {
    // Initialize Material Design Components
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach((textField) => {
        new mdc.textField.MDCTextField(textField);
    });

    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach((button) => {
        new mdc.ripple.MDCRipple(button);
    });
});

function onInputFocus(labelId) {
    document.getElementById(labelId).classList.add('mdc-floating-label--float-above');
}

function onInputBlur(labelId) {
    const inputField = document.getElementById(labelId).previousElementSibling;
    if (!inputField.value) {
        document.getElementById(labelId).classList.remove('mdc-floating-label--float-above');
    }
}

function signInWithGoogle() {
    // Implement Google sign-in functionality here
    console.log('Signing in with Google...');
}
