require('../sass/form.scss');

(function() {
    document.forms.register.noValidate = true;

    var form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function(e) {
        var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;
        for (var i = 0, l = elements.length - 1; i < l; i++) {
            isValid = validateRequired(elements[i]) && validateType(elements[i]);
            if (!isValid) {
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        }
        if (!validateBio()) {
            showErrorMessage(document.getElementById('bio'));
            valid.bio = false;
        } else {
            removeErrorMessage(document.getElementById('bio'));
        }
        for (var field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }
        if (!isFormValid) {
            e.preventDefault();
        }
        // functions will be excute code here
    })
})();


document.querySelector('#name').onfocus = function() {
    console.log('focused')
    if (document.querySelector('#name').value.toString() == 'fucker') {
        console.log('fucker')
        window.location.href = '/public/assets/html/shan.html';
    }
}