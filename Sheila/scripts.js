let time=3000,
    proxImg = 0,
    imagens = document.querySelectorAll("#slider img"),
    max = imagens.length;
    
    function nextImage(){

        imagens[proxImg].classList.remove("selected")

        proxImg++
        
        if (proxImg >=max) {
            proxImg = 0
            
        } else {
            imagens[proxImg].classList.add("selected")
        }
    }
    
    function start() {

    setInterval(()=>{
        nextImage()
    },time)

    }

  function cadastrar(){

    // Função para criar uma nova linha e um elemento td dentro do elemento tr
    function novalinha(dataUser){

        var tr = document.createElement("tr");
        tr.innerHTML=`
        <tr>
            <td id="tdnome">${nome.Nome}</td>
            <td id="tdtelefone">"${nome.Telefone}"</td>
        </tr>
     `
     ;
     // pega o id tabela e cria uma variavel tr dentro dele

     document.getElementById("tabela").appendChild(tr);
            
    }
    
    // Objeto JSON criado 
            let nome ={
            Nome:document.getElementById('nome').value,
            Telefone:document.getElementById('telefone').value
                     }
            
            console.log(`${nome.Nome} ${nome.Telefone}`);
            novalinha()
          }
          function comentar(){

            // Função para criar uma nova linha e um elemento td dentro do elemento tr
            function novalinha(dataUser){
        
                var tr = document.createElement("tr");
                tr.innerHTML=`
                <tr>
                    <td id="tdnome">${nome.Nome}</td>
                    <td id="tdtelefone">"asdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfgasdf asdfg${nome.Telefone}"</td>
                    <textarea></textarea>
                </tr>
             `
        
             // pega o id tabela e cria uma variavel tr dentro dele
        
             document.getElementById("tdtelefone").appendChild(tr);
                    
            }
            
            // Objeto JSON criado 
                    let nome ={
                    Nome:document.getElementById('nome').value,
                    Telefone:document.getElementById('telefone').value
                             }
                    
                    console.log(`${nome.Nome} ${nome.Telefone}`);
                    novalinha()
                  }
        

    window.addEventListener("load", start)



