const dadosUsuario = document.querySelectorAll('.camposdepreenchimento');
const btnEnviarDados = document.getElementById('btn-enviar');

btnEnviarDados.addEventListener('click', (event) => {
    event.preventDefault();
    let valido = true
    dadosUsuario.forEach(element => {
        if (element.value === "") {
            mostrarErro(element);
            valido = false
        } else {
            esconderErro(element);
            mostrarSucesso(element);
        }
    });
})

function mostrarErro(element) {
    element.classList.add('bordavermelha');
    element.classList.remove('bordaverde');
    element.nextElementSibling.classList.add('mostrar');
    element.nextElementSibling.textContent = "campo obrigatório";
};

function esconderErro(element) {
    element.classList.remove('bordavermelha');
    element.nextElementSibling.classList.remove('mostrar');
};

function mostrarSucesso(element) {
    element.classList.add('bordaverde');
};