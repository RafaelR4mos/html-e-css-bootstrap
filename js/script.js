let alertTrigger = false;
const toastLiveExample = document.getElementById('liveToast')


const form = document.querySelector('.needs-validation')

form.addEventListener('submit', event => {

  event.preventDefault()
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')

  if (form.checkValidity()) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
    form.reset();
    form.classList.remove('was-validated')
  }

}, false)


