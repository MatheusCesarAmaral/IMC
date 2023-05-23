function calc_imc(){
    var nome 
    var peso
    var altura
    var IMC

    nome = (document.meu_form.nome.value);
    peso = parseFloat(document.meu_form.peso.value);
    altura = parseFloat(document.meu_form.altura.value);

    altura = altura / 100

    IMC = peso / (altura * altura);

    if (IMC < 18.5){
        window.alert(nome + ' o seu IMC é: ' + IMC.toPrecision(4) + ' e você está abaixo do peso.');
    }else if (IMC >= 18.5 && IMC <=24.9){
        window.alert(nome + ' o seu IMC é: ' + IMC.toPrecision(4) + ' e você está no peso normal.');
    }else {
        window.alert( nome + ' o seu IMC é: ' + IMC.toPrecision(4) + ' e você está acima do peso.');
    }
    
}