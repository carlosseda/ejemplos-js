for (let i = 0; i < formInputs.length; i++) {

  if (formInputs[i].maxLength > 0) {

    formInputs[i].addEventListener('input', () => {

      if (formInputs[i].value.length > 0) {

        let counterSpan = document.createElement('span');
        counterSpan.textContent = formInputs[i].value.length + ' / ' + formInputs[i].maxLength;

        formInputs[i].closest('.form-element').querySelector('.form-element-counter').innerHTML = counterSpan.outerHTML;

      } else {

        formInputs[i].closest('.form-element').querySelector('.form-element-counter').innerHTML = '';
      }
    });
  }
}