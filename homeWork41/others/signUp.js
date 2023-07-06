let a = document.querySelector('.signup-checkbox__input');
console.log(a);

document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.form-container');
    const SForm = document.getElementById('SIngUpForm');
    SForm.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        let error = formValidate();
        console.log(error);

        error === 0 ? collectData(SForm) : false
    }

    function formValidate() {
        let error = 0;
        let formRequired = document.querySelectorAll('._req');
        let arrTest = [];
        for (let index = 0; index < formRequired.length; index++) {
            const input = formRequired[index];
            formRemoveError(input);

            if (input.id === 'formName' || input.id === 'formSurname' || input.id ===  'formFamilyName') {
                if(!NSFTest(input)) {
                    formAddError(input);
                    error++;
                } 

            } else if (input.id === 'formEmail') {
                if(!emailTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.id === 'formNumber') {
                if(!phoneTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.id === 'formAddress') {
                if(!addressTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.classList.contains('signup-checkbox__input')) {
               arrTest.push(checkboxTest(input));
                if(arrTest.length === 2 && arrTest.includes(1) === false) {
                    formAddError(input);
                    error++;
                }

            } else if (input.id ===  'formAddress' ) {
                if(!addressTest(input) === 0) {
                    formAddError(input);
                    error++;
                }
            }
        }

        function formAddError(input) {
            if(input.type === 'checkbox') {
                input.parentElement.parentElement.parentElement.classList.add('_error');
                input.classList.add('_error');
            } else {
                input.parentElement.classList.add('_error');
                input.classList.add('_error');
            }
        }

        function formRemoveError(input) {
            if(input.type === 'checkbox') {
                input.parentElement.parentElement.parentElement.classList.remove('_error');
                input.classList.remove('_error');
            } else{
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }
        }

        function NSFTest(input) {
            return /^[a-z]{1,100}$/i.test(input.value);
        }

        function addressTest(input) {
            return /^[a-z,\.,\,,\-,0-9]{1,100}$/i.test(input.value);
        }

        function emailTest(input) {
            return /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(input.value);
        }

        function phoneTest(input) {
            return /^\+\d{12}$/.test(input.value)
        }
    
        function checkboxTest(input) {
            let count = 0;
            console.log(count);
            if (input.checked) {
                count++;
            }
            console.log(count);

            return count;
        }

        return error;
    }

    function collectData() {
       
        let information = '';
        let input =  document.querySelectorAll('input');
        input.forEach(element => {
            console.log(element)
        if (element.getAttribute('type') === 'radio' || element.getAttribute('type') === 'checkbox') {
            if(element.checked) {
               information+= `
                <p>${element.name}: ${element.value}</p>
               `
            } 
        } else if (element.getAttribute('type') !== 'radio' || element.getAttribute('type') !== 'checkbox') {
            information+= `
        <p>${element.name}: ${element.value}</p>
       `
        } 
       });

       container.innerHTML = '<h1>You are successfully registered</h1>'+ information;
       document.querySelector('body').classList.add('flex-class');
       SForm.classList.add('flex-element')
    }

});