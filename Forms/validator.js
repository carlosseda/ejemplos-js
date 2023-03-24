export let validateForm = formInputs => {

    let validForm = true;
    
    let validators = {
        "only-letters": /^[a-zA-Z\s]+$/g,
        "only-numbers": /\d/g,
        "telephone": /^\d{9}$/g,
        "email": /\w+@\w+\.\w+/g,
        "web": /^(http|https):\/\/\w+\.\w+/g,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
        "date": /^\d{4}-\d{2}-\d{2}$/g,
        "time": /^\d{2}:\d{2}$/g
    }

    for (let i = 0; i < formInputs.length; i++) {

        if (formInputs[i].dataset.validate) {
            
            if(formInputs[i].value.match(validators[formInputs[i].dataset.validate]) == null) {
                formInputs[i].classList.add('invalid');
                validForm = false;
            }else{
                formInputs[i].classList.remove('invalid');
            }
        }
    }

    if(!validForm){
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Los datos del formulario no son válidos',
                type: 'error'
            }
        }));
    }

    return validForm;
};



