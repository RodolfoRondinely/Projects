function logar(){
    var senha=document.getElementById("userSenha").value
        
    
  //  while (senha!=1234);

        if (senha==1234) {
            alert(`LOGIN EFETUADO COM SUCESSO`)
        window.location.href="http://127.0.0.1:5500/MotoristaApp/index.html"

        } else {
            alert(`SENHA INCORRETA, FAVOR CONFERIR !!!`)
            
        }
       
}