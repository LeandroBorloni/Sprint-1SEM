let inputNome = document.querySelector("#nomeInput")
let inputSobrenome = document.querySelector("#sobrenomeInput")
let inputEmail = document.querySelector("#emailInput")
let inputCidade = document.querySelector("#cidadeInput")
let inputEstado = document.querySelector("#estadoInput")
let inputComentarios = document.querySelector("#floatingTextarea2")
let formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", function(e) {
    e.preventDefault()

    const dados = {
        "Nome": e.target.elements["nomeInput"].value,
        "Sobrenome": e.target.elements["sobrenomeInput"].value,
        "Email": e.target.elements["emailInput"].value,
        "Cidade": e.target.elements["cidadeInput"].value,
        "Estado": e.target.elements["estadoInput"].value,
        "Comentarios": e.target.elements["floatingTextarea2"].value
    }

    localStorage.setItem("Contato", JSON.stringify(dados))
    window.alert("Formulário enviado com sucesso!")
    formulario.reset()
})
