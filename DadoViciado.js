function TestarDado(){
    let dado = []
    let quantidades = []
    let contador1 = 0
    let contador2 = 0
    let contador3 = 0
    let contador4 = 0
    let contador5 = 0
    let contador6 = 0

    quantidades = document.getElementById("inpQuantidade").value
    
for (let i = 0; dado.length < quantidades;i++){
dado[i] = Math.floor(Math.random() * (7 - 1) + 1)
if (contador1 == 0){
    document.getElementById('div1').innerHTML = 'Número 1 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}
if (contador2 == 0){
    document.getElementById('div2').innerHTML = 'Número 2 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}
if (contador3 == 0){
    document.getElementById('div3').innerHTML = 'Número 3 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}
if (contador4 == 0){
    document.getElementById('div4').innerHTML = 'Número 4 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}
if (contador5 == 0){
    document.getElementById('div5').innerHTML = 'Número 5 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}
if (contador6 == 0){
    document.getElementById('div6').innerHTML = 'Número 6 Sorteado 0 vezes e sua porcentagem foi de: 0%'
}

if (dado[i] == 1){
    let porcento1 = (contador1++ * 100) / quantidades
    document.getElementById('div1').innerHTML = 'Número 1 Sorteado ' + contador1 + ' vezes e sua porcentagem foi de: ' + porcento1.toFixed(2) + '%'
if (contador1 == 1 || contador1 == 2){
    porcento1 = (contador1 *100) / quantidades
    document.getElementById('div1').innerHTML = 'Número 1 Sorteado ' + contador1 + ' vezes e sua porcentagem foi de: ' + porcento1.toFixed(2) + '%'
}}
if (dado[i] == 2){
    let porcento2 = (contador2++ * 100) / quantidades
    document.getElementById('div2').innerHTML = 'Número 2 Sorteado ' + contador2 + ' vezes e sua porcentagem foi de: ' + porcento2.toFixed(2) + '%'

if (contador2 == 1 || contador2 == 2){
    porcento2 = (contador2 *100) / quantidades
    document.getElementById('div2').innerHTML = 'Número 2 Sorteado ' + contador2 + ' vezes e sua porcentagem foi de: ' + porcento2.toFixed(2) + '%'
}}
if (dado[i] == 3){
    let porcento3 = (contador3++ * 100) / quantidades
    document.getElementById('div3').innerHTML = 'Número 3 Sorteado ' + contador3 + ' vezes e sua porcentagem foi de: ' + porcento3.toFixed(2) + '%'

if (contador3 == 1 || contador3 == 2){
    porcento3 = (contador3 *100) / quantidades
    document.getElementById('div3').innerHTML = 'Número 3 Sorteado ' + contador3 + ' vezes e sua porcentagem foi de: ' + porcento3.toFixed(2) + '%'
}}
if (dado[i] == 4){
    let porcento4 = (contador4++ * 100) / quantidades
    document.getElementById('div4').innerHTML = 'Número 4 Sorteado ' + contador4 + ' vezes e sua porcentagem foi de: ' + porcento4.toFixed(2) + '%'

 if (contador4 == 1 || contador4 == 2){
    porcento4 = (contador4 *100) / quantidades
    document.getElementById('div4').innerHTML = 'Número 4 Sorteado ' + contador4 + ' vezes e sua porcentagem foi de: ' + porcento4.toFixed(2) + '%'
}}
if (dado[i] == 5){
    let porcento5 = (contador5++ * 100) / quantidades
    document.getElementById('div5').innerHTML = 'Número 5 Sorteado ' + contador5 + ' vezes e sua porcentagem foi de: ' + porcento5.toFixed(2) + '%'

if (contador5 == 1 || contador5 == 2){
    porcento5 = (contador5 *100) / quantidades
    document.getElementById('div5').innerHTML = 'Número 5 Sorteado ' + contador5 + ' vezes e sua porcentagem foi de: ' + porcento5.toFixed(2) + '%'
}}
if (dado[i] == 6){
    let porcento6 = (contador6++ * 100) / quantidades
    document.getElementById('div6').innerHTML = 'Número 6 Sorteado ' + contador6 + ' vezes e sua porcentagem foi de: ' + porcento6.toFixed(2) + '%'

if (contador6 == 1 || contador6 == 2){
    porcento6 = (contador6 *100) / quantidades
    document.getElementById('div6').innerHTML = 'Número 6 Sorteado ' + contador6 + ' vezes e sua porcentagem foi de: ' + porcento6.toFixed(2) + '%'
}}
}
}