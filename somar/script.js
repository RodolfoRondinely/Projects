function somar(){

    let nu1= document.getElementById('n1').value
    let nu2= document.getElementById('n2').value

    //convertendo nu1 e nu2 pra um tipo numero
   let num1=Number(nu1)
   let num2=Number(nu2)

   let resultado = num1+num2

    res.innerHTML=(`o resultado é ${resultado}`)
}

console.log(data.localDateString)


