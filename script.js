const form = document.getElementById('form')
const input = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  msgErro: document.getElementById('msgErro')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  input.msgErro.classList.remove('active')
  input.msgErro.innerHTML = ('Email está errado')
  input.name.classList.remove('erro')
  input.email.classList.remove('erro')

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let data = {
    name,
    email
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  } 
  
if (name && email) {

    if (validateEmail(data.email)) {
      localStorage.setItem('listEmail',JSON.stringify(data))
    } else {
      input.email.classList.add('erro')
      input.msgErro.classList.add('active')
      preventDefault()
    }

  } else {
    input.email.classList.add('erro')
    input.name.classList.add('erro')
    input.msgErro.innerHTML = 'Preencha todos os campos'
    input.msgErro.classList.add('active')
    preventDefault()
  }

  setTimeout(() => {
    form.innerHTML = `   
      <div class="main loader">
        <h1>Valeu ${name}</h1>
        </div>`
  },(2000))
  
  form.innerHTML = `
    <div class='loader'>
      <img src="/assets/loader.gif" id='loader' alt="carregando">
    </div>`
  }
)
