console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // uso parseInt para convertir los valores a tipo numerico
    // ya que al llamar operandoA.value lo tomaria como string
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}