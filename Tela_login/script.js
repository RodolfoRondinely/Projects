let form = document.getElementById("form")
let submit = document.getElementById("btn")



submit.addEventListener('click', function (e){

e.preventDefault()

let senha = document.getElementById("senha").value
let confSenha = document.getElementById("confSenha").value

if (confSenha            =! senha) {
    alert('Senha digitada não confere, favor conferir')
    
} else {
    alert('Login com sucesso')
}
})                                          