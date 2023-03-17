    
function calcular (){
     let peso = document.getElementById("peso").value;
     let altura = document.getElementById("altura").value;
        let text = document.getElementById("resultado")

     let resultado = (peso / ( altura * altura));
     let resultadofinal  = resultado.toFixed(1);
     document.getElementById("resultado").innerHTML = "O resultado é:  " + resultadofinal;

     if(resultadofinal <= 18.5 ){
        text.innerHTML = "Abaixo do peso normal: " + resultadofinal
     }else if(resultadofinal >= 18.5 && resultadofinal <= 24.9 ){
        text.innerHTML = "Peso ideal: " + resultadofinal
     }else if(resultadofinal >= 25 && resultadofinal <= 29.9 ){
        text.innerHTML = "Excesso de peso: " + resultadofinal
     }else{
        text.innerHTML = "Obesidade: Procure um médico"
     }
}