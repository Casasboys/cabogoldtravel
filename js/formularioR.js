const $form = document.querySelector('#formularioR');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5585929438';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let cel = document.querySelector('#cel').value
        let email = document.querySelector('#email').value
        let servicio = document.querySelector('#service').value
        let fecha = document.querySelector('#date').value
        let mensa = document.querySelector('#mess').value
        let message = 'send?phone=' + phone + '&text=*_Formulario Cabo Gold_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + name + '%0A*Número teléfonico*%0A' + cel + '%0A*¿Cuál es tu correo?*%0A' + email + '%0A*¿Cuál es tu servicio?*%0A' + servicio + '%0A*¿Qué fecha agendas?*%0A' + fecha + '%0A*Solicitud extra*%0A' + mensa


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 2);

});