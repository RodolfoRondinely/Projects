let campos = document.querySelectorAll(".formulario [name]");
let user =  {};

document.getElementById("btnEnviar").addEventListener('click' , function(event){

    event.preventDefault()
    campos.forEach(function(nome,index){

        user[nome.name] = nome.value;
    
        });
        console.log(`O nome do cliente é : ${user.nome} e ${user.sobreNome} `);
        console.log(user);
        let resultado  = document.querySelector(".res")

        resultado.innerHTML = (`O nome do cliente é : ${user.nome} e ${user.sobreNome}`)

});
function addLine(dataUser)

let tr = document.createElement("tr")

    tr.innerHTML = ` <tr>
    <td> O nome do cliente é : ${user.nome} com sobre Nome de : ${user.sobreNome}`
    <tr>
    document.querySelector(".res").appendChild(tr)

    
/*let btn = document.getElementById("btnEnviar")

btn.addEventListener('click' , mostra) 

function mostra(){
    console.log(user)
}
*/