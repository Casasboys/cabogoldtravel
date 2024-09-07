const $form = document.querySelector('#formularioC');
const buttonSubmit = document.querySelector('#submitc');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5585929438';


$form.addEventListener('submitc', (event) => {
    event.preventDefault()
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#namec').value
        let cel = document.querySelector('#cels').value
        let email = document.querySelector('#correoc').value
        let messc = document.querySelector('#mensajec').value
        let message = 'send?phone=' + phone + '&text=*_Formulario Cabo Gold_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + name + '%0A*Número teléfonico*%0A' + cel +  '%0A*Correo*%0A' + email + '%0A*Tu mensaje:*%0A' + messc


        if (isMobilec()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 2);

});