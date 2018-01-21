require('../sass/form.scss');
window.onload = function() {
        var link = "https://code.jquery.com/jquery-3.3.0.js";
        var integrity = 'integrity="sha256-TFWSuDJt6kS+huV+vVlyV1jM3dwGdeNWqezhTxXB/X8="';
        var cross = 'crossorigin="anonymous"';
        var script = document.createElement('script');
        script.src = link + ' ' + integrity + ' ' + cross;
        document.body.appendChild(script);



    }
    (function() {

        document.querySelector('.form-boxcontrol').noValidate = true;

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
            function validateRequired(el) {
                if (isRequired(el)) {
                    var valid = !isEmpty(el);
                    if (!valid) {
                        setErrorMessage(el, 'Field is required');
                    }
                    return valid;
                }
                return true;
            }

            function isRequired(el) {
                return ((typeof el.required === 'boolean') && el.required) ||
                    (typeof el.required === 'string');
            }

            function isEmpty(el) {
                return !el.value || el.value === el.placeholder;
            }

            function setErrorMessage(el, message) {
                $(el).data('errorMessage', message);
            }
        })
    })();


document.querySelector('#name').onfocus = function() {
    console.log('focused')
    if (document.querySelector('#name').value.toString() == 'fucker') {
        console.log('fucker')
        window.location.href = '/public/assets/html/shan.html';
    }
}