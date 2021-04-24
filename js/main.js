const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#formulario')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:amjimenezv@gmail.com?subjet= nombre: ${form.get('name')} Correo: ${form.get('email')}&body =${form.get('name')}${form.get('lastname')}${form.get('email')}${form.get('position')}${form.get('operation')}${form.get('where')}${form.get('schedule')}`)
    $buttonMailto.click()
}