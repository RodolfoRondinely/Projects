var campos = document.querySelectorAll("#form [name]")
var comentario={}
var resultado=document.getElementById("mensagens")

function addLine(dataUser){
    console.log=(` ${Object.values(comentario)}`)
    
}

var clicar=document.getElementById("btnenviar").addEventListener("click",function(event){
   
    campos.forEach(function(field,index){

        ` ${comentario[field.name] = field.value} `       

        resultado.innerHTML=
        (`
        
        ${Object.values(comentario)}
        `)
             })
             addLine(`${Object.values(comentario)}`)

            })
    this.criar_templante=function(){
        var template = document.querySelector("#templante1")
        lista_td = template.textContent= this.campos.name
    }