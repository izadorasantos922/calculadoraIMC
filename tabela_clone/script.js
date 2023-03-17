 
 function calcular(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let text = document.getElementById("resultado");

    let resultado = (peso / ( altura * altura));

    let resultadofinal = resultado.toFixed(1);

    document.getElementById("resultado").innerHTML = "O resultado é " + resultadofinal

   
 }