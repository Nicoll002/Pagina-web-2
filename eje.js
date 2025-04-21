function eje1(){
    txt = '';
    txt += '<form onsubmit="event.preventDefault(); calcular();">';
        txt += '<div class="row">';
        
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="ec1">Valor Uno:</label>';
                txt += '<input type="number" class="form-control" id="ec1" name="ec1">';
            txt += '</div>';
            
            txt += '<div class="form-group col-md-2">';
                txt += '<label for="operacion">Operación:</label>';
                txt += '<select class="form-control" id="operacion">';
                    txt += '<option value="sumar">+</option>';
                    txt += '<option value="restar">-</option>';
                    txt += '<option value="multiplicar">×</option>';
                    txt += '<option value="dividir">÷</option>';
                txt += '</select>';
            txt += '</div>';

            txt += '<div class="form-group col-md-3">';
                txt += '<label for="ec2">Valor Dos:</label>';
                txt += '<input type="number" class="form-control" id="ec2" name="ec2">';
            txt += '</div>';
            
            txt += '<div class="form-group col-md-4">';
                txt += '<button type="submit" class="btn btn-primary btntri">Calcular</button>';
            txt += '</div>';

        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function calcular(){
    let num1 = parseFloat(document.getElementById("ec1").value);
    let num2 = parseFloat(document.getElementById("ec2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)){
        resultado = "Por favor, ingresa números válidos.";
    } else {
        switch (operacion){
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                resultado = (num2 !== 0) ? (num1 / num2).toFixed(2) : "No se puede dividir por 0";
                break;
        }
    }

    document.getElementById("resultado").innerHTML = '<div class="resultado-box"><h3>Resultado: ' + resultado + '</h3></div>';
}

function eje2(){
    txt = '';
    txt +='<form onsubmit="event.preventDefault();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="ec1">Valor:</label>';
                txt += '<input type="number" class="form-control" id="ec1" name="ec1">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<button type="submit" class="btn btn-primary">Enviar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    document.getElementById("eje").innerHTML = txt;
}

function eje3_2(){
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_2();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor1_3_2">Valor 1:</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_2" name="valor1_3_2">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor2_3_2">Valor 2:</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_2" name="valor2_3_2">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_2" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_2() {
    let valor1 = parseFloat(document.getElementById("valor1_3_2").value);
    let valor2 = parseFloat(document.getElementById("valor2_3_2").value);
    let resultado = '';

    if (valor1 > valor2) {
        resultado = 'El número mayor es: ' + valor1;
    } else if (valor2 > valor1) {
        resultado = 'El número mayor es: ' + valor2;
    } else {
        resultado = 'Ambos números son iguales.';
    }

    document.getElementById("resultado3_2").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_3() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_3();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor3_3">Valor:</label>';
                txt += '<input type="number" class="form-control" id="valor3_3" name="valor3_3">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_3" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_3() {
    let valor = parseFloat(document.getElementById("valor3_3").value);
    let resultado = '';

    if (valor > 100) {
        resultado = 'El número es mayor que 100.';
    } else if (valor < 100) {
        resultado = 'El número es menor que 100.';
    } else {
        resultado = 'El número es igual a 100.';
    }

    document.getElementById("resultado3_3").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_4() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_4();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor1_3_4">Valor 1:</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_4" name="valor1_3_4">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor2_3_4">Valor 2:</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_4" name="valor2_3_4">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor3_3_4">Valor 3:</label>';
                txt += '<input type="number" class="form-control" id="valor3_3_4" name="valor3_3_4">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Mostrar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_4" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_4() {
    let valor1 = parseFloat(document.getElementById("valor1_3_4").value);
    let valor2 = parseFloat(document.getElementById("valor2_3_4").value);
    let valor3 = parseFloat(document.getElementById("valor3_3_4").value);
    let valores = [valor1, valor2, valor3];
    valores.sort((a, b) => a - b);

    let resultado = 'Valores ordenados: ' + valores.join(', ');

    document.getElementById("resultado3_4").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_5() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_5();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="nota1_3_5">Nota 1:</label>';
                txt += '<input type="number" class="form-control" id="nota1_3_5" name="nota1_3_5" min="0" max="5" step="0.1">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="nota2_3_5">Nota 2:</label>';
                txt += '<input type="number" class="form-control" id="nota2_3_5" name="nota2_3_5" min="0" max="5" step="0.1">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="nota3_3_5">Nota 3:</label>';
                txt += '<input type="number" class="form-control" id="nota3_3_5" name="nota3_3_5" min="0" max="5" step="0.1">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_5" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_5() {
    let nota1 = parseFloat(document.getElementById("nota1_3_5").value);
    let nota2 = parseFloat(document.getElementById("nota2_3_5").value);
    let nota3 = parseFloat(document.getElementById("nota3_3_5").value);
    let promedio = (nota1 + nota2 + nota3) / 3;
    let resultado = 'Promedio: ' + promedio.toFixed(2) + '. ';

    if (promedio >= 3.5) {
        resultado += 'Aprobó.';
    } else {
        resultado += 'Reprobó.';
    }

    document.getElementById("resultado3_5").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_6() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_6();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="base_3_6">Base:</label>';
                txt += '<input type="number" class="form-control" id="base_3_6" name="base_3_6">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="altura_3_6">Altura:</label>';
                txt += '<input type="number" class="form-control" id="altura_3_6" name="altura_3_6">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_6" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_6() {
    let base = parseFloat(document.getElementById("base_3_6").value);
    let altura = parseFloat(document.getElementById("altura_3_6").value);
    let area = (base * altura) / 2;
    let resultado = 'Área del triángulo: ' + area.toFixed(2);

    document.getElementById("resultado3_6").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_7() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_7();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_7">Número:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_7" name="numero_3_7" min="0">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_7" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_7() {
    let numero = parseFloat(document.getElementById("numero_3_7").value);
    let resultado = '';

    if (numero < 0) {
        resultado = 'Por favor, ingresa un número positivo.';
    } else if (numero % 2 === 0) {
        resultado = 'El número es par.';
    } else {
        resultado = 'El número es impar.';
    }

    document.getElementById("resultado3_7").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_8() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_8();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="color_3_8">Color:</label>';
                txt += '<select class="form-control" id="color_3_8" name="color_3_8">';
                    txt += '<option value="rojo">Rojo</option>';
                    txt += '<option value="blanco">Blanco</option>';
                    txt += '<option value="negro">Negro</option>';
                    txt += '<option value="otro">Otro</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="cantidad_3_8">Cantidad de docenas:</label>';
                txt += '<input type="number" class="form-control" id="cantidad_3_8" name="cantidad_3_8" min="1">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_8" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_8() {
    let color = document.getElementById("color_3_8").value;
    let cantidad = parseFloat(document.getElementById("cantidad_3_8").value);
    let precioPorDocena = 0;
    let descuento = 0;

    switch (color) {
        case "rojo":
            precioPorDocena = 4000;
            descuento = 0.10;
            break;
        case "blanco":
            precioPorDocena = 5000;
            descuento = 0.08;
            break;
        case "negro":
            precioPorDocena = 18000;
            descuento = 0;
            break;
        default:
            precioPorDocena = 6000;
            descuento = 0.02;
            break;
    }

    let totalSinDescuento = precioPorDocena * cantidad;
    let totalDescuento = totalSinDescuento * descuento;
    let totalConDescuento = totalSinDescuento - totalDescuento;

    let resultado = `Total sin descuento: $${totalSinDescuento.toFixed(2)}<br>`;
    resultado += `Descuento: $${totalDescuento.toFixed(2)}<br>`;
    resultado += `Total con descuento: $${totalConDescuento.toFixed(2)}`;

    document.getElementById("resultado3_8").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_9() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_9();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="productos_3_9">Número de productos vendidos:</label>';
                txt += '<input type="number" class="form-control" id="productos_3_9" name="productos_3_9" min="0" max="100">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="ventas_3_9">Valor total de ventas:</label>';
                txt += '<input type="number" class="form-control" id="ventas_3_9" name="ventas_3_9" min="0">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_9" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_9() {
    let productos = parseFloat(document.getElementById("productos_3_9").value);
    let ventas = parseFloat(document.getElementById("ventas_3_9").value);
    let porcentaje = 0;

    if (productos >= 0 && productos <= 20) {
        porcentaje = 0.05;
    } else if (productos >= 21 && productos <= 50) {
        porcentaje = 0.10;
    } else if (productos >= 51 && productos <= 80) {
        porcentaje = 0.15;
    } else if (productos >= 81 && productos <= 100) {
        porcentaje = 0.20;
    } else {
        document.getElementById("resultado3_9").innerHTML = '<div class="resultado-box"><h3>El número de productos vendidos debe estar entre 0 y 100.</h3></div>';
        return;
    }

    let ganancia = ventas * porcentaje;
    let resultado = `Número de productos vendidos: ${productos}<br>`;
    resultado += `Valor total de ventas: $${ventas.toFixed(2)}<br>`;
    resultado += `Porcentaje ganado: ${(porcentaje * 100).toFixed(2)}%<br>`;
    resultado += `Ganancia del empleado: $${ganancia.toFixed(2)}`;

    document.getElementById("resultado3_9").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_10() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_10();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="color_3_10">Color:</label>';
                txt += '<select class="form-control" id="color_3_10" name="color_3_10">';
                    txt += '<option value="verde">Verde</option>';
                    txt += '<option value="rojo">Rojo</option>';
                    txt += '<option value="otro">Otro</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="modelo_3_10">Modelo:</label>';
                txt += '<input type="number" class="form-control" id="modelo_3_10" name="modelo_3_10">';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="marca_3_10">Marca:</label>';
                txt += '<input type="text" class="form-control" id="marca_3_10" name="marca_3_10">';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="precio_3_10">Precio:</label>';
                txt += '<input type="number" class="form-control" id="precio_3_10" name="precio_3_10">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_10" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_10() {
    let color = document.getElementById("color_3_10").value;
    let modelo = parseInt(document.getElementById("modelo_3_10").value);
    let marca = document.getElementById("marca_3_10").value;
    let precio = parseFloat(document.getElementById("precio_3_10").value);
    let descuento = 0;

    if (color === "verde") {
        descuento = 0.15;
    } else if (modelo < 1990) {
        descuento = 0.20;
    } else if (color === "rojo" && modelo > 1995) {
        descuento = 0.10;
    }

    let totalDescuento = precio * descuento;
    let totalConDescuento = precio - totalDescuento;

    let resultado = `Marca del automóvil: ${marca}<br>`;
    resultado += `Precio: $${precio.toFixed(2)}<br>`;
    resultado += `Descuento: $${totalDescuento.toFixed(2)}<br>`;
    resultado += `Total a pagar: $${totalConDescuento.toFixed(2)}`;

    document.getElementById("resultado3_10").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_11() {
    let txt = '';
    txt += '<button class="btn btn-primary" onclick="realizarOperacion3_11()">Iniciar</button>';
    txt += '<div id="resultado3_11" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_11() {
    let resultado = '';
    for (let i = 200; i >= 0; i -= 3) {
        resultado += i + '<br>';
    }

    document.getElementById("resultado3_11").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_12() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_12();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="valor_3_12">Valor (mayor o igual a 10):</label>';
                txt += '<input type="number" class="form-control" id="valor_3_12" name="valor_3_12" min="10">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Mostrar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_12" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_12() {
    let valor = parseInt(document.getElementById("valor_3_12").value);
    if (valor < 10) {
        document.getElementById("resultado3_12").innerHTML = '<div class="resultado-box"><h3>Por favor, ingresa un valor mayor o igual a 10.</h3></div>';
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < valor; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    let suma = fibonacci.reduce((acc, num) => acc + num, 0);
    let resultado = `Serie de Fibonacci: ${fibonacci.join(', ')}<br>`;
    resultado += `Suma de los números: ${suma}<br>`;
    resultado += `Cantidad de números mostrados: ${fibonacci.length}`;

    document.getElementById("resultado3_12").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_13() {
    let txt = '';
    txt += '<button class="btn btn-primary" onclick="realizarOperacion3_13()">Generar</button>';
    txt += '<div id="resultado3_13" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_13() {
    let primos = [];
    let num = 2;

    while (primos.length < 30) {
        if (esPrimo(num)) {
            primos.push(num);
        }
        num++;
    }

    let resultado = `Los primeros 30 números primos son: ${primos.join(', ')}`;

    document.getElementById("resultado3_13").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function esPrimo(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function eje3_14() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_14();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="valor_3_14">Valor (mayor que 10):</label>';
                txt += '<input type="number" class="form-control" id="valor_3_14" name="valor_3_14" min="11">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Mostrar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_14" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_14() {
    let valor = parseInt(document.getElementById("valor_3_14").value);
    if (valor <= 10) {
        document.getElementById("resultado3_14").innerHTML = '<div class="resultado-box"><h3>Por favor, ingresa un valor mayor que 10.</h3></div>';
        return;
    }

    let pares = [];
    let impares = [];
    for (let i = 1; i <= valor; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    let sumaPares = pares.reduce((acc, num) => acc + num, 0);
    let sumaImpares = impares.reduce((acc, num) => acc + num, 0);
    let restaParesImpares = sumaPares - sumaImpares;
    let promedioPares = sumaPares / pares.length;
    let promedioImpares = sumaImpares / impares.length;
    let diferenciaSuma = Math.abs(sumaPares - sumaImpares);

    let resultado = `Números pares: ${pares.join(', ')}<br>`;
    resultado += `Números impares: ${impares.join(', ')}<br>`;
    resultado += `Suma de pares: ${sumaPares}<br>`;
    resultado += `Suma de impares: ${sumaImpares}<br>`;
    resultado += `Resta de pares e impares: ${restaParesImpares}<br>`;
    resultado += `Promedio de pares: ${promedioPares.toFixed(2)}<br>`;
    resultado += `Promedio de impares: ${promedioImpares.toFixed(2)}<br>`;
    resultado += `Diferencia entre la suma de pares y la suma de impares: ${diferenciaSuma}`;

    document.getElementById("resultado3_14").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_15() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_15();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="operacion_3_15">Operación (1-5):</label>';
                txt += '<input type="number" class="form-control" id="operacion_3_15" name="operacion_3_15" min="1" max="5">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor1_3_15">Valor 1:</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_15" name="valor1_3_15">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor2_3_15">Valor 2:</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_15" name="valor2_3_15">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_15" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_15() {
    let operacion = parseInt(document.getElementById("operacion_3_15").value);
    let valor1 = parseFloat(document.getElementById("valor1_3_15").value);
    let valor2 = parseFloat(document.getElementById("valor2_3_15").value);
    let resultado = '';

    switch (operacion) {
        case 1:
            resultado = `Resultado: ${valor1 + valor2}`;
            break;
        case 2:
            resultado = `Resultado: ${valor1 % valor2}`;
            break;
        case 3:
            resultado = `Resultado: ${(valor2 !== 0) ? (valor1 / valor2).toFixed(2) : "No se puede dividir por 0"}`;
            break;
        case 4:
            resultado = `Resultado: ${valor1 + valor2 + 1}`;
            break;
        case 5:
            resultado = `Resultado: ${valor1 * valor2 * 1}`;
            break;
        default:
            resultado = 'Por favor, ingresa una operación válida (1-5).';
            break;
    }

    document.getElementById("resultado3_15").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_16() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_16();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="valor_3_16">Valor (mayor que 3):</label>';
                txt += '<input type="number" class="form-control" id="valor_3_16" name="valor_3_16" min="4">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_16" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_16() {
    let valor = parseInt(document.getElementById("valor_3_16").value);
    let resultado = '';

    if (valor > 3 && valor % 2 === 0 && valor % 3 === 0) {
        resultado = `El número ${valor} es divisible por 2 y 3.`;
    } else {
        resultado = `El número ${valor} no es divisible por 2 y 3 al mismo tiempo.`;
    }

    document.getElementById("resultado3_16").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_17() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_17();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor1_3_17">Valor 1 (mayor que 4):</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_17" name="valor1_3_17" min="5">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor2_3_17">Valor 2 (menor que Valor 1):</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_17" name="valor2_3_17" min="4">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Mostrar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_17" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_17() {
    let valor1 = parseInt(document.getElementById("valor1_3_17").value);
    let valor2 = parseInt(document.getElementById("valor2_3_17").value);
    let resultado = '';

    if (valor1 <= valor2 || valor1 <= 4 || valor2 <= 4) {
        resultado = 'Por favor, asegúrate de que el Valor 1 sea mayor que el Valor 2 y ambos sean mayores que 4.';
    } else {
        let primos = [];
        for (let i = valor2; i <= valor1; i++) {
            if (esPrimo(i)) {
                primos.push(i);
            }
        }
        resultado = `Números primos entre ${valor2} y ${valor1}: ${primos.join(', ')}`;
    }

    document.getElementById("resultado3_17").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_18() {
    let txt = '';
    txt += '<button class="btn btn-primary" onclick="realizarOperacion3_18()">Mostrar</button>';
    txt += '<div id="resultado3_18" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_18() {
    let resultado = '';
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            for (let s = 0; s < 60; s++) {
                resultado += `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}<br>`;
            }
        }
    }

    document.getElementById("resultado3_18").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_19() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_19();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_19">Número:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_19" name="numero_3_19">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Generar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_19" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_19() {
    let numero = parseInt(document.getElementById("numero_3_19").value);
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `${i} * ${numero} = ${i * numero}<br>`;
    }

    document.getElementById("resultado3_19").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_20() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_20();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 50; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="valor_3_20_${i}">Valor ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="valor_3_20_${i}" name="valor_3_20_${i}" min="4">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_20" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_20() {
    let pares = 0;
    let impares = 0;
    let primos = 0;
    let noPrimos = 0;
    let numerosPrimos = [];

    for (let i = 1; i <= 50; i++) {
        let valor = parseInt(document.getElementById(`valor_3_20_${i}`).value);
        if (valor % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        if (esPrimo(valor)) {
            primos++;
            numerosPrimos.push(valor);
        } else {
            noPrimos++;
        }
    }

    let resultado = `Pares: ${pares}<br>`;
    resultado += `Impares: ${impares}<br>`;
    resultado += `Primos: ${primos}<br>`;
    resultado += `No primos: ${noPrimos}<br>`;
    resultado += `Números primos: ${numerosPrimos.join(', ')}`;

    document.getElementById("resultado3_20").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_21() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_21();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="numero1_3_21">Número 1:</label>';
                txt += '<input type="number" class="form-control" id="numero1_3_21" name="numero1_3_21">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="numero2_3_21">Número 2:</label>';
                txt += '<input type="number" class="form-control" id="numero2_3_21" name="numero2_3_21">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_21" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_21() {
    let numero1 = parseFloat(document.getElementById("numero1_3_21").value);
    let numero2 = parseFloat(document.getElementById("numero2_3_21").value);
    let suma = numero1 + numero2;

    let resultado = `La suma de ${numero1} y ${numero2} es: ${suma}`;

    document.getElementById("resultado3_21").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_22() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_22();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="examen1_3_22">Examen 1:</label>';
                txt += '<input type="number" class="form-control" id="examen1_3_22" name="examen1_3_22" min="0" max="100">';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="examen2_3_22">Examen 2:</label>';
                txt += '<input type="number" class="form-control" id="examen2_3_22" name="examen2_3_22" min="0" max="100">';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="examen3_3_22">Examen 3:</label>';
                txt += '<input type="number" class="form-control" id="examen3_3_22" name="examen3_3_22" min="0" max="100">';
            txt += '</div>';
            txt += '<div class="form-group col-md-3">';
                txt += '<label for="examen4_3_22">Examen 4:</label>';
                txt += '<input type="number" class="form-control" id="examen4_3_22" name="examen4_3_22" min="0" max="100">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_22" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_22() {
    let examen1 = parseFloat(document.getElementById("examen1_3_22").value);
    let examen2 = parseFloat(document.getElementById("examen2_3_22").value);
    let examen3 = parseFloat(document.getElementById("examen3_3_22").value);
    let examen4 = parseFloat(document.getElementById("examen4_3_22").value);
    let promedio = (examen1 + examen2 + examen3 + examen4) / 4;

    let resultado = `El promedio de las calificaciones es: ${promedio.toFixed(2)}`;

    document.getElementById("resultado3_22").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_23() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_23();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="base_3_23">Base:</label>';
                txt += '<input type="number" class="form-control" id="base_3_23" name="base_3_23">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="altura_3_23">Altura:</label>';
                txt += '<input type="number" class="form-control" id="altura_3_23" name="altura_3_23">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_23" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_23() {
    let base = parseFloat(document.getElementById("base_3_23").value);
    let altura = parseFloat(document.getElementById("altura_3_23").value);
    let area = base * altura;

    let resultado = `El área del rectángulo es: ${area.toFixed(2)}`;

    document.getElementById("resultado3_23").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_24() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_24();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="radio_3_24">Radio:</label>';
                txt += '<input type="number" class="form-control" id="radio_3_24" name="radio_3_24">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_24" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_24() {
    let radio = parseFloat(document.getElementById("radio_3_24").value);
    let area = Math.PI * Math.pow(radio, 2);

    let resultado = `El área de la circunferencia es: ${area.toFixed(2)}`;

    document.getElementById("resultado3_24").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_25() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_25();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="base1_3_25">Base 1:</label>';
                txt += '<input type="number" class="form-control" id="base1_3_25" name="base1_3_25">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="altura1_3_25">Altura 1:</label>';
                txt += '<input type="number" class="form-control" id="altura1_3_25" name="altura1_3_25">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="base2_3_25">Base 2:</label>';
                txt += '<input type="number" class="form-control" id="base2_3_25" name="base2_3_25">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="altura2_3_25">Altura 2:</label>';
                txt += '<input type="number" class="form-control" id="altura2_3_25" name="altura2_3_25">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_25" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_25() {
    let base1 = parseFloat(document.getElementById("base1_3_25").value);
    let altura1 = parseFloat(document.getElementById("altura1_3_25").value);
    let base2 = parseFloat(document.getElementById("base2_3_25").value);
    let altura2 = parseFloat(document.getElementById("altura2_3_25").value);

    let area1 = base1 * altura1;
    let area2 = base2 * altura2;
    let areaTotal = area1 + area2;

    let resultado = `El área total del terreno es: ${areaTotal.toFixed(2)}`;

    document.getElementById("resultado3_25").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_26() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_26();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="hipotenusa_3_26">Hipotenusa (H):</label>';
                txt += '<input type="number" class="form-control" id="hipotenusa_3_26" name="hipotenusa_3_26">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="radio_3_26">Radio (R):</label>';
                txt += '<input type="number" class="form-control" id="radio_3_26" name="radio_3_26">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_26" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_26() {
    let hipotenusa = parseFloat(document.getElementById("hipotenusa_3_26").value);
    let radio = parseFloat(document.getElementById("radio_3_26").value);

    // Área de los dos triángulos rectángulos
    let cateto = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(radio, 2));
    let areaTriangulos = 2 * (0.5 * radio * cateto);

    // Área de la semicircunferencia
    let areaSemicircunferencia = 0.5 * Math.PI * Math.pow(radio, 2);

    // Área total
    let areaTotal = areaTriangulos + areaSemicircunferencia;

    let resultado = `El área total de la figura es: ${areaTotal.toFixed(2)}`;

    document.getElementById("resultado3_26").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_27() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_27();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="litros_3_27">Litros producidos:</label>';
                txt += '<input type="number" class="form-control" id="litros_3_27" name="litros_3_27">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="precio_galon_3_27">Precio por galón:</label>';
                txt += '<input type="number" class="form-control" id="precio_galon_3_27" name="precio_galon_3_27">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_27" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_27() {
    let litros = parseFloat(document.getElementById("litros_3_27").value);
    let precioPorGalon = parseFloat(document.getElementById("precio_galon_3_27").value);

    // Conversión de litros a galones
    let galones = litros / 3.785;

    // Cálculo del pago
    let pago = galones * precioPorGalon;

    let resultado = `Litros producidos: ${litros.toFixed(2)}<br>`;
    resultado += `Galones: ${galones.toFixed(2)}<br>`;
    resultado += `Pago total: $${pago.toFixed(2)}`;

    document.getElementById("resultado3_27").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_28() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_28();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="x1_3_28">X1:</label>';
                txt += '<input type="number" class="form-control" id="x1_3_28" name="x1_3_28">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="y1_3_28">Y1:</label>';
                txt += '<input type="number" class="form-control" id="y1_3_28" name="y1_3_28">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="x2_3_28">X2:</label>';
                txt += '<input type="number" class="form-control" id="x2_3_28" name="x2_3_28">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="y2_3_28">Y2:</label>';
                txt += '<input type="number" class="form-control" id="y2_3_28" name="y2_3_28">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_28" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_28() {
    let x1 = parseFloat(document.getElementById("x1_3_28").value);
    let y1 = parseFloat(document.getElementById("y1_3_28").value);
    let x2 = parseFloat(document.getElementById("x2_3_28").value);
    let y2 = parseFloat(document.getElementById("y2_3_28").value);

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    let resultado = `La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`;

    document.getElementById("resultado3_28").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_29() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_29();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="metros_3_29">Metros:</label>';
                txt += '<input type="number" class="form-control" id="metros_3_29" name="metros_3_29">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Convertir</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_29" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_29() {
    let metros = parseFloat(document.getElementById("metros_3_29").value);
    let pulgadas = metros / 0.0254;

    let resultado = `La cantidad de pulgadas es: ${pulgadas.toFixed(2)}`;

    document.getElementById("resultado3_29").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_30() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_30();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="largo_3_30">Largo (m):</label>';
                txt += '<input type="number" class="form-control" id="largo_3_30" name="largo_3_30">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="ancho_3_30">Ancho (m):</label>';
                txt += '<input type="number" class="form-control" id="ancho_3_30" name="ancho_3_30">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="profundidad_3_30">Profundidad (m):</label>';
                txt += '<input type="number" class="form-control" id="profundidad_3_30" name="profundidad_3_30">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="precio_m3_3_30">Precio por metro cúbico:</label>';
                txt += '<input type="number" class="form-control" id="precio_m3_3_30" name="precio_m3_3_30">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_30" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_30() {
    let largo = parseFloat(document.getElementById("largo_3_30").value);
    let ancho = parseFloat(document.getElementById("ancho_3_30").value);
    let profundidad = parseFloat(document.getElementById("profundidad_3_30").value);
    let precioPorM3 = parseFloat(document.getElementById("precio_m3_3_30").value);

    // Cálculo del volumen en metros cúbicos
    let volumen = largo * ancho * profundidad;

    // Cálculo del pago
    let pago = volumen * precioPorM3;

    let resultado = `Volumen de agua: ${volumen.toFixed(2)} m³<br>`;
    resultado += `Pago total: $${pago.toFixed(2)}`;

    document.getElementById("resultado3_30").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_31() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_31();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor1_3_31">Valor 1:</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_31" name="valor1_3_31">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="valor2_3_31">Valor 2:</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_31" name="valor2_3_31">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_31" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_31() {
    let valor1 = parseFloat(document.getElementById("valor1_3_31").value);
    let valor2 = parseFloat(document.getElementById("valor2_3_31").value);
    let resultado = '';

    if (valor1 > valor2) {
        resultado = `El valor mayor es: ${valor1}`;
    } else if (valor2 > valor1) {
        resultado = `El valor mayor es: ${valor2}`;
    } else {
        resultado = 'Ambos valores son iguales.';
    }

    document.getElementById("resultado3_31").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_32() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_32();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_32">Número:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_32" name="numero_3_32">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_32" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_32() {
    let numero = parseFloat(document.getElementById("numero_3_32").value);
    let resultado = '';

    if (numero > 0) {
        resultado = 'El número es positivo.';
    } else if (numero < 0) {
        resultado = 'El número es negativo.';
    } else {
        resultado = 'El número es cero.';
    }

    document.getElementById("resultado3_32").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_34() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_34();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="precio_3_34">Precio del traje:</label>';
                txt += '<input type="number" class="form-control" id="precio_3_34" name="precio_3_34">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_34" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_34() {
    let precio = parseFloat(document.getElementById("precio_3_34").value);
    let descuento = (precio > 2500) ? 0.15 : 0.08;
    let montoDescuento = precio * descuento;
    let precioFinal = precio - montoDescuento;

    let resultado = `Precio original: $${precio.toFixed(2)}<br>`;
    resultado += `Descuento: $${montoDescuento.toFixed(2)}<br>`;
    resultado += `Precio final: $${precioFinal.toFixed(2)}`;

    document.getElementById("resultado3_34").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_35() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_35();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor1_3_35">Valor 1:</label>';
                txt += '<input type="number" class="form-control" id="valor1_3_35" name="valor1_3_35">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor2_3_35">Valor 2:</label>';
                txt += '<input type="number" class="form-control" id="valor2_3_35" name="valor2_3_35">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="valor3_3_35">Valor 3:</label>';
                txt += '<input type="number" class="form-control" id="valor3_3_35" name="valor3_3_35">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_35" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_35() {
    let valor1 = parseFloat(document.getElementById("valor1_3_35").value);
    let valor2 = parseFloat(document.getElementById("valor2_3_35").value);
    let valor3 = parseFloat(document.getElementById("valor3_3_35").value);
    let mayor = Math.max(valor1, valor2, valor3);

    let resultado = `El valor mayor es: ${mayor}`;

    document.getElementById("resultado3_35").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_36() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_36();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="personas_3_36">Número de personas:</label>';
                txt += '<input type="number" class="form-control" id="personas_3_36" name="personas_3_36">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_36" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_36() {
    let personas = parseInt(document.getElementById("personas_3_36").value);
    let costoPorPersona = 0;

    if (personas <= 200) {
        costoPorPersona = 95;
    } else if (personas <= 300) {
        costoPorPersona = 85;
    } else {
        costoPorPersona = 75;
    }

    let presupuesto = personas * costoPorPersona;

    let resultado = `El presupuesto para ${personas} personas es: $${presupuesto.toFixed(2)}`;

    document.getElementById("resultado3_36").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_37() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_37();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="tipo_3_37">Tipo de uva (A/B):</label>';
                txt += '<select class="form-control" id="tipo_3_37" name="tipo_3_37">';
                    txt += '<option value="A">A</option>';
                    txt += '<option value="B">B</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="tamano_3_37">Tamaño de uva (1/2):</label>';
                txt += '<select class="form-control" id="tamano_3_37" name="tamano_3_37">';
                    txt += '<option value="1">1</option>';
                    txt += '<option value="2">2</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="precioInicial_3_37">Precio inicial por kilo:</label>';
                txt += '<input type="number" class="form-control" id="precioInicial_3_37" name="precioInicial_3_37">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="kilos_3_37">Kilos de uva:</label>';
                txt += '<input type="number" class="form-control" id="kilos_3_37" name="kilos_3_37">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_37" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_37() {
    let tipo = document.getElementById("tipo_3_37").value;
    let tamano = document.getElementById("tamano_3_37").value;
    let precioInicial = parseFloat(document.getElementById("precioInicial_3_37").value);
    let kilos = parseFloat(document.getElementById("kilos_3_37").value);
    let ajuste = 0;

    if (tipo === "A") {
        ajuste = (tamano === "1") ? 0.20 : 0.30;
    } else if (tipo === "B") {
        ajuste = (tamano === "1") ? -0.30 : -0.50;
    }

    let precioFinal = precioInicial + ajuste;
    let ganancia = precioFinal * kilos;

    let resultado = `Precio inicial: $${precioInicial.toFixed(2)}<br>`;
    resultado += `Ajuste: $${ajuste.toFixed(2)}<br>`;
    resultado += `Precio final por kilo: $${precioFinal.toFixed(2)}<br>`;
    resultado += `Ganancia total: $${ganancia.toFixed(2)}`;

    document.getElementById("resultado3_37").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_38() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_38();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="alumnos_3_38">Número de alumnos:</label>';
                txt += '<input type="number" class="form-control" id="alumnos_3_38" name="alumnos_3_38">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_38" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_38() {
    let alumnos = parseInt(document.getElementById("alumnos_3_38").value);
    let costoPorAlumno = 0;
    let costoTotal = 0;

    if (alumnos >= 100) {
        costoPorAlumno = 65;
        costoTotal = alumnos * costoPorAlumno;
    } else if (alumnos >= 50) {
        costoPorAlumno = 70;
        costoTotal = alumnos * costoPorAlumno;
    } else if (alumnos >= 30) {
        costoPorAlumno = 95;
        costoTotal = alumnos * costoPorAlumno;
    } else {
        costoTotal = 4000;
        costoPorAlumno = costoTotal / alumnos;
    }

    let resultado = `Número de alumnos: ${alumnos}<br>`;
    resultado += `Costo por alumno: $${costoPorAlumno.toFixed(2)}<br>`;
    resultado += `Costo total: $${costoTotal.toFixed(2)}`;

    document.getElementById("resultado3_38").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_39() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_39();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="minutos_3_39">Duración de la llamada (minutos):</label>';
                txt += '<input type="number" class="form-control" id="minutos_3_39" name="minutos_3_39">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="dia_3_39">Día de la semana:</label>';
                txt += '<select class="form-control" id="dia_3_39" name="dia_3_39">';
                    txt += '<option value="domingo">Domingo</option>';
                    txt += '<option value="lunes">Lunes</option>';
                    txt += '<option value="martes">Martes</option>';
                    txt += '<option value="miercoles">Miércoles</option>';
                    txt += '<option value="jueves">Jueves</option>';
                    txt += '<option value="viernes">Viernes</option>';
                    txt += '<option value="sabado">Sábado</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="turno_3_39">Turno:</label>';
                txt += '<select class="form-control" id="turno_3_39" name="turno_3_39">';
                    txt += '<option value="matutino">Matutino</option>';
                    txt += '<option value="vespertino">Vespertino</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_39" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_39() {
    let minutos = parseInt(document.getElementById("minutos_3_39").value);
    let dia = document.getElementById("dia_3_39").value;
    let turno = document.getElementById("turno_3_39").value;
    let costo = 0;

    if (minutos <= 5) {
        costo = minutos * 1.00;
    } else if (minutos <= 8) {
        costo = (5 * 1.00) + ((minutos - 5) * 0.80);
    } else if (minutos <= 10) {
        costo = (5 * 1.00) + (3 * 0.80) + ((minutos - 8) * 0.70);
    } else {
        costo = (5 * 1.00) + (3 * 0.80) + (2 * 0.70) + ((minutos - 10) * 0.50);
    }

    let impuesto = 0;
    if (dia === "domingo") {
        impuesto = 0.03;
    } else if (turno === "matutino") {
        impuesto = 0.15;
    } else if (turno === "vespertino") {
        impuesto = 0.10;
    }

    let totalImpuesto = costo * impuesto;
    let totalPagar = costo + totalImpuesto;

    let resultado = `Costo de la llamada: $${costo.toFixed(2)}<br>`;
    resultado += `Impuesto: $${totalImpuesto.toFixed(2)}<br>`;
    resultado += `Total a pagar: $${totalPagar.toFixed(2)}`;

    document.getElementById("resultado3_39").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_40() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_40();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="tipo_3_40">Tipo de autobús (A/B/C):</label>';
                txt += '<select class="form-control" id="tipo_3_40" name="tipo_3_40">';
                    txt += '<option value="A">A</option>';
                    txt += '<option value="B">B</option>';
                    txt += '<option value="C">C</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="kilometros_3_40">Kilómetros recorridos:</label>';
                txt += '<input type="number" class="form-control" id="kilometros_3_40" name="kilometros_3_40">';
            txt += '</div>';
            txt += '<div class="form-group col-md-4">';
                txt += '<label for="personas_3_40">Número de personas:</label>';
                txt += '<input type="number" class="form-control" id="personas_3_40" name="personas_3_40">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_40" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_40() {
    let tipo = document.getElementById("tipo_3_40").value;
    let kilometros = parseFloat(document.getElementById("kilometros_3_40").value);
    let personas = parseInt(document.getElementById("personas_3_40").value);

    let costoPorKm = 0;
    switch (tipo) {
        case "A":
            costoPorKm = 2.0;
            break;
        case "B":
            costoPorKm = 2.5;
            break;
        case "C":
            costoPorKm = 3.0;
            break;
    }

    if (personas < 20) {
        personas = 20;
    }

    let costoTotal = kilometros * costoPorKm * personas;
    let costoPorPersona = costoTotal / personas;

    let resultado = `Costo total del viaje: $${costoTotal.toFixed(2)}<br>`;
    resultado += `Costo por persona: $${costoPorPersona.toFixed(2)}`;

    document.getElementById("resultado3_40").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_41() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_41();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="cita_3_41">Número de cita:</label>';
                txt += '<input type="number" class="form-control" id="cita_3_41" name="cita_3_41">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_41" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_41() {
    let cita = parseInt(document.getElementById("cita_3_41").value);
    let costoPorCita = 0;
    let totalPagado = 0;

    if (cita <= 3) {
        costoPorCita = 200;
        totalPagado = cita * 200;
    } else if (cita <= 5) {
        costoPorCita = 150;
        totalPagado = (3 * 200) + ((cita - 3) * 150);
    } else if (cita <= 8) {
        costoPorCita = 100;
        totalPagado = (3 * 200) + (2 * 150) + ((cita - 5) * 100);
    } else {
        costoPorCita = 50;
        totalPagado = (3 * 200) + (2 * 150) + (3 * 100) + ((cita - 8) * 50);
    }

    let resultado = `Costo de la cita: $${costoPorCita.toFixed(2)}<br>`;
    resultado += `Total pagado por el tratamiento: $${totalPagado.toFixed(2)}`;

    document.getElementById("resultado3_41").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_42() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_42();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="peso_3_42">Peso del paquete (kg):</label>';
                txt += '<input type="number" class="form-control" id="peso_3_42" name="peso_3_42">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="zona_3_42">Zona de destino:</label>';
                txt += '<select class="form-control" id="zona_3_42" name="zona_3_42">';
                    txt += '<option value="1">América del Norte</option>';
                    txt += '<option value="2">América Central</option>';
                    txt += '<option value="3">América del Sur</option>';
                    txt += '<option value="4">Europa</option>';
                    txt += '<option value="5">Asia</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_42" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_42() {
    let peso = parseFloat(document.getElementById("peso_3_42").value);
    let zona = parseInt(document.getElementById("zona_3_42").value);
    let costoPorKg = 0;

    if (peso > 5) {
        document.getElementById("resultado3_42").innerHTML = '<div class="resultado-box"><h3>El paquete excede el peso máximo permitido de 5 kg.</h3></div>';
        return;
    }

    switch (zona) {
        case 1:
            costoPorKg = 24.00;
            break;
        case 2:
            costoPorKg = 20.00;
            break;
        case 3:
            costoPorKg = 21.00;
            break;
        case 4:
            costoPorKg = 10.00;
            break;
        case 5:
            costoPorKg = 18.00;
            break;
    }

    let costoTotal = peso * costoPorKg;

    let resultado = `Peso del paquete: ${peso.toFixed(2)} kg<br>`;
    resultado += `Costo por kg: $${costoPorKg.toFixed(2)}<br>`;
    resultado += `Costo total: $${costoTotal.toFixed(2)}`;

    document.getElementById("resultado3_42").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_43() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_43();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="tipoTarjeta_3_43">Tipo de tarjeta (1/2/3/otro):</label>';
                txt += '<input type="number" class="form-control" id="tipoTarjeta_3_43" name="tipoTarjeta_3_43">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="limiteActual_3_43">Límite actual de crédito:</label>';
                txt += '<input type="number" class="form-control" id="limiteActual_3_43" name="limiteActual_3_43">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_43" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_43() {
    let tipoTarjeta = parseInt(document.getElementById("tipoTarjeta_3_43").value);
    let limiteActual = parseFloat(document.getElementById("limiteActual_3_43").value);
    let aumento = 0;

    switch (tipoTarjeta) {
        case 1:
            aumento = 0.25;
            break;
        case 2:
            aumento = 0.35;
            break;
        case 3:
            aumento = 0.40;
            break;
        default:
            aumento = 0.50;
            break;
    }

    let nuevoLimite = limiteActual * (1 + aumento);

    let resultado = `Límite actual: $${limiteActual.toFixed(2)}<br>`;
    resultado += `Aumento: ${(aumento * 100).toFixed(2)}%<br>`;
    resultado += `Nuevo límite de crédito: $${nuevoLimite.toFixed(2)}`;

    document.getElementById("resultado3_43").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_44() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_44();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="sexo_3_44">Sexo (H/M):</label>';
                txt += '<select class="form-control" id="sexo_3_44" name="sexo_3_44">';
                    txt += '<option value="H">Hombre</option>';
                    txt += '<option value="M">Mujer</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="monto_3_44">Monto de la compra:</label>';
                txt += '<input type="number" class="form-control" id="monto_3_44" name="monto_3_44">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_44" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_44() {
    let sexo = document.getElementById("sexo_3_44").value;
    let monto = parseFloat(document.getElementById("monto_3_44").value);
    let premios = [];

    if (monto > 25000) {
        if (sexo === "H") {
            premios = ["Balota 1: Premio A", "Balota 2: Premio B", "Balota 3: Premio C"];
        } else if (sexo === "M") {
            premios = ["Balota 1: Premio X", "Balota 2: Premio Y", "Balota 3: Premio Z"];
        }
    } else {
        premios = ["No hay premios disponibles para compras menores a $25,000."];
    }

    let resultado = `Monto de la compra: $${monto.toFixed(2)}<br>`;
    resultado += `Premios: ${premios.join('<br>')}`;

    document.getElementById("resultado3_44").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_45() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_45();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="numero1_3_45">Número 1:</label>';
                txt += '<input type="number" class="form-control" id="numero1_3_45" name="numero1_3_45">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="numero2_3_45">Número 2:</label>';
                txt += '<input type="number" class="form-control" id="numero2_3_45" name="numero2_3_45">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="operacion_3_45">Operación:</label>';
                txt += '<select class="form-control" id="operacion_3_45" name="operacion_3_45">';
                    txt += '<option value="sumar">Sumar</option>';
                    txt += '<option value="restar">Restar</option>';
                    txt += '<option value="multiplicar">Multiplicar</option>';
                    txt += '<option value="dividir">Dividir</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_45" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_45() {
    let numero1 = parseFloat(document.getElementById("numero1_3_45").value);
    let numero2 = parseFloat(document.getElementById("numero2_3_45").value);
    let operacion = document.getElementById("operacion_3_45").value;
    let resultado = 0;

    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            resultado = (numero2 !== 0) ? (numero1 / numero2).toFixed(2) : "No se puede dividir por 0";
            break;
    }

    document.getElementById("resultado3_45").innerHTML = '<div class="resultado-box"><h3>Resultado: ' + resultado + '</h3></div>';
}

function eje3_46() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_46();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="numero_3_46">Número:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_46" name="numero_3_46">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="operacion_3_46">Operación:</label>';
                txt += '<select class="form-control" id="operacion_3_46" name="operacion_3_46">';
                    txt += '<option value="primo">Comprobar si es primo</option>';
                    txt += '<option value="factorial">Hallar su factorial</option>';
                    txt += '<option value="tabla">Imprimir su tabla de multiplicar</option>';
                txt += '</select>';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_46" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_46() {
    let numero = parseInt(document.getElementById("numero_3_46").value);
    let operacion = document.getElementById("operacion_3_46").value;
    let resultado = '';

    switch (operacion) {
        case "primo":
            resultado = esPrimo(numero) ? `El número ${numero} es primo.` : `El número ${numero} no es primo.`;
            break;
        case "factorial":
            resultado = `El factorial de ${numero} es ${factorial(numero)}.`;
            break;
        case "tabla":
            resultado = `Tabla de multiplicar del ${numero}:<br>${tablaMultiplicar(numero)}`;
            break;
    }

    document.getElementById("resultado3_46").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

function tablaMultiplicar(num) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i}<br>`;
    }
    return tabla;
}

function eje3_47() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_47();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_47">Número N:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_47" name="numero_3_47">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_47" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_47() {
    let numero = parseInt(document.getElementById("numero_3_47").value);
    let primos = [];

    for (let i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    let resultado = `Números primos entre 1 y ${numero}: ${primos.join(', ')}`;

    document.getElementById("resultado3_47").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_48() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_48();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numeroPersonas_3_48">Número de personas:</label>';
                txt += '<input type="number" class="form-control" id="numeroPersonas_3_48" name="numeroPersonas_3_48">';
            txt += '</div>';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-6">`;
                    txt += `<label for="genero_3_48_${i}">Género de la persona ${i} (H/M):</label>`;
                    txt += `<select class="form-control" id="genero_3_48_${i}" name="genero_3_48_${i}">`;
                        txt += '<option value="H">Hombre</option>';
                        txt += '<option value="M">Mujer</option>';
                    txt += '</select>';
                txt += '</div>';
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_48" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_48() {
    let numeroPersonas = parseInt(document.getElementById("numeroPersonas_3_48").value);
    let hombres = 0;
    let mujeres = 0;

    for (let i = 1; i <= numeroPersonas; i++) {
        let genero = document.getElementById(`genero_3_48_${i}`).value;
        if (genero === "H") {
            hombres++;
        } else if (genero === "M") {
            mujeres++;
        }
    }

    let porcentajeHombres = (hombres / numeroPersonas) * 100;
    let porcentajeMujeres = (mujeres / numeroPersonas) * 100;

    let resultado = `Número de personas: ${numeroPersonas}<br>`;
    resultado += `Hombres: ${hombres} (${porcentajeHombres.toFixed(2)}%)<br>`;
    resultado += `Mujeres: ${mujeres} (${porcentajeMujeres.toFixed(2)}%)`;

    document.getElementById("resultado3_48").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_49() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_49();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 5; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="numero_3_49_${i}">Número ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="numero_3_49_${i}" name="numero_3_49_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_49" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_49() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(document.getElementById(`numero_3_49_${i}`).value);
        suma += numero;
    }

    let resultado = `La suma de los 5 números es: ${suma}`;

    document.getElementById("resultado3_49").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_50() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_50();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_50">Número N:</label>';
                txt += '<input type="number" class="form-control" id="numero_3_50" name="numero_3_50">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_50" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_50() {
    let numero = parseInt(document.getElementById("numero_3_50").value);
    let pares = [];

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    let resultado = `Números pares entre 1 y ${numero}: ${pares.join(', ')}`;

    document.getElementById("resultado3_50").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_51() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_51();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 15; i++) {
                txt += `<div class="form-group col-md-4">`;
                    txt += `<label for="venta_3_51_${i}">Venta ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="venta_3_51_${i}" name="venta_3_51_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_51" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_51() {
    let ventasMayores550 = [];
    let ventasEntre200y550 = [];
    let totalMayores550 = 0;
    let totalEntre200y550 = 0;

    for (let i = 1; i <= 15; i++) {
        let venta = parseFloat(document.getElementById(`venta_3_51_${i}`).value);
        if (venta > 550) {
            ventasMayores550.push(venta);
            totalMayores550 += venta;
        } else if (venta > 200 && venta <= 550) {
            ventasEntre200y550.push(venta);
            totalEntre200y550 += venta;
        }
    }

    let promedioMayores550 = ventasMayores550.length > 0 ? (totalMayores550 / ventasMayores550.length).toFixed(2) : 0;
    let promedioEntre200y550 = ventasEntre200y550.length > 0 ? (totalEntre200y550 / ventasEntre200y550.length).toFixed(2) : 0;

    let resultado = `Ventas mayores a 550: ${ventasMayores550.join(', ')}<br>`;
    resultado += `Ventas entre 200 y 550: ${ventasEntre200y550.join(', ')}<br>`;
    resultado += `Promedio de ventas mayores a 550: $${promedioMayores550}<br>`;
    resultado += `Promedio de ventas entre 200 y 550: $${promedioEntre200y550}<br>`;

    document.getElementById("resultado3_51").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_52() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_52();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="numero_3_52_${i}">Número ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="numero_3_52_${i}" name="numero_3_52_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_52" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_52() {
    let suma = 0;
    let i = 1;
    while (i <= 10) {
        let numero = parseFloat(document.getElementById(`numero_3_52_${i}`).value);
        suma += numero;
        i++;
    }

    let resultado = `La suma de las 10 cantidades es: ${suma}`;

    document.getElementById("resultado3_52").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_53() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_53();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numeroAlumnos_3_53">Número de alumnos:</label>';
                txt += '<input type="number" class="form-control" id="numeroAlumnos_3_53" name="numeroAlumnos_3_53">';
            txt += '</div>';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="edad_3_53_${i}">Edad del alumno ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="edad_3_53_${i}" name="edad_3_53_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_53" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_53() {
    let numeroAlumnos = parseInt(document.getElementById("numeroAlumnos_3_53").value);
    let sumaEdades = 0;

    for (let i = 1; i <= numeroAlumnos; i++) {
        let edad = parseFloat(document.getElementById(`edad_3_53_${i}`).value);
        sumaEdades += edad;
    }

    let promedioEdad = sumaEdades / numeroAlumnos;

    let resultado = `La edad promedio del grupo de ${numeroAlumnos} alumnos es: ${promedioEdad.toFixed(2)}`;

    document.getElementById("resultado3_53").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_54() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_54();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="estatura_3_54">Estatura (dejar en blanco para terminar):</label>';
                txt += '<input type="number" class="form-control" id="estatura_3_54" name="estatura_3_54">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Agregar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_54" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

let estaturas = [];

function realizarOperacion3_54() {
    let estatura = parseFloat(document.getElementById("estatura_3_54").value);
    if (!isNaN(estatura)) {
        estaturas.push(estatura);
        document.getElementById("estatura_3_54").value = '';
    } else {
        let sumaEstaturas = estaturas.reduce((acc, est) => acc + est, 0);
        let promedioEstatura = sumaEstaturas / estaturas.length;
        let resultado = `La estatura promedio del grupo es: ${promedioEstatura.toFixed(2)} m`;
        document.getElementById("resultado3_54").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
        estaturas = [];
    }
}

function eje3_55() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_55();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 12; i++) {
                txt += `<div class="form-group col-md-3">`;
                    txt += `<label for="ahorro_3_55_${i}">Ahorro del mes ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="ahorro_3_55_${i}" name="ahorro_3_55_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_55" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_55() {
    let ahorroMensual = [];
    let totalAhorro = 0;

    for (let i = 1; i <= 12; i++) {
        let ahorro = parseFloat(document.getElementById(`ahorro_3_55_${i}`).value);
        ahorroMensual.push(ahorro);
        totalAhorro += ahorro;
    }

    let resultado = `Ahorro mensual: ${ahorroMensual.join(', ')}<br>`;
    resultado += `Total ahorrado en el año: $${totalAhorro.toFixed(2)}`;

    document.getElementById("resultado3_55").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_56() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_56();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_56">Número de elementos (N):</label>';
                txt += '<input type="number" class="form-control" id="numero_3_56" name="numero_3_56">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Generar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_56" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_56() {
    let n = parseInt(document.getElementById("numero_3_56").value);
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    let resultado = `Los primeros ${n} elementos de la sucesión de Fibonacci son: ${fibonacci.join(', ')}`;

    document.getElementById("resultado3_56").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_57() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_57();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 6; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="horas_3_57_${i}">Horas día ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="horas_3_57_${i}" name="horas_3_57_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="pagoHora_3_57">Pago por hora:</label>';
                txt += '<input type="number" class="form-control" id="pagoHora_3_57" name="pagoHora_3_57">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_57" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_57() {
    let totalHoras = 0;
    for (let i = 1; i <= 6; i++) {
        let horas = parseFloat(document.getElementById(`horas_3_57_${i}`).value);
        totalHoras += horas;
    }

    let pagoHora = parseFloat(document.getElementById("pagoHora_3_57").value);
    let sueldo = totalHoras * pagoHora;

    let resultado = `Total de horas trabajadas: ${totalHoras}<br>`;
    resultado += `Sueldo total: $${sueldo.toFixed(2)}`;

    document.getElementById("resultado3_57").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_58() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_58();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="velocidad_3_58">Velocidad (km/h):</label>';
                txt += '<input type="number" class="form-control" id="velocidad_3_58" name="velocidad_3_58">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_58" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_58() {
    let velocidad = parseFloat(document.getElementById("velocidad_3_58").value);
    let distanciaInicial = 150 - 70;
    let tiempo = distanciaInicial / (2 * velocidad);
    let puntoEncuentro = 70 + (velocidad * tiempo);

    let resultado = `Se encontrarán en el kilómetro: ${puntoEncuentro.toFixed(2)}`;

    document.getElementById("resultado3_58").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_59() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_59();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numeroVentas_3_59">Número de ventas:</label>';
                txt += '<input type="number" class="form-control" id="numeroVentas_3_59" name="numeroVentas_3_59">';
            txt += '</div>';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-4">`;
                    txt += `<label for="venta_3_59_${i}">Venta ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="venta_3_59_${i}" name="venta_3_59_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_59" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_59() {
    let numeroVentas = parseInt(document.getElementById("numeroVentas_3_59").value);
    let ventasMayores1000 = 0;
    let ventasEntre500y1000 = 0;
    let ventasMenores500 = 0;
    let totalMayores1000 = 0;
    let totalEntre500y1000 = 0;
    let totalMenores500 = 0;

    for (let i = 1; i <= numeroVentas; i++) {
        let venta = parseFloat(document.getElementById(`venta_3_59_${i}`).value);
        if (venta > 1000) {
            ventasMayores1000++;
            totalMayores1000 += venta;
        } else if (venta > 500 && venta <= 1000) {
            ventasEntre500y1000++;
            totalEntre500y1000 += venta;
        } else {
            ventasMenores500++;
            totalMenores500 += venta;
        }
    }

    let resultado = `Ventas mayores a $1000: ${ventasMayores1000} (Total: $${totalMayores1000.toFixed(2)})<br>`;
    resultado += `Ventas entre $500 y $1000: ${ventasEntre500y1000} (Total: $${totalEntre500y1000.toFixed(2)})<br>`;
    resultado += `Ventas menores o iguales a $500: ${ventasMenores500} (Total: $${totalMenores500.toFixed(2)})<br>`;
    resultado += `Monto total vendido: $${(totalMayores1000 + totalEntre500y1000 + totalMenores500).toFixed(2)}`;

    document.getElementById("resultado3_59").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_60() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_60();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 50; i++) {
                txt += `<div class="form-group col-md-3">`;
                    txt += `<label for="horas_3_60_${i}">Horas trabajadas obrero ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="horas_3_60_${i}" name="horas_3_60_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_60" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_60() {
    const pagoPorHora = 30000;
    let totalNomina = 0;

    for (let i = 1; i <= 50; i++) {
        let horas = parseFloat(document.getElementById(`horas_3_60_${i}`).value);
        totalNomina += horas * pagoPorHora;
    }

    let resultado = `Total de la nómina para 50 obreros: ${totalNomina.toFixed(2)} Bolívares`;

    document.getElementById("resultado3_60").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_61() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_61();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="precio_3_61">Precio del producto:</label>';
                txt += '<input type="number" class="form-control" id="precio_3_61" name="precio_3_61">';
            txt += '</div>';
            txt += '<div class="form-group col-md-6">';
                txt += '<label for="cantidad_3_61">Cantidad:</label>';
                txt += '<input type="number" class="form-control" id="cantidad_3_61" name="cantidad_3_61">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Agregar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_61" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

let totalVenta = 0;

function realizarOperacion3_61() {
    let precio = parseFloat(document.getElementById("precio_3_61").value);
    let cantidad = parseInt(document.getElementById("cantidad_3_61").value);
    let subtotal = precio * cantidad;
    totalVenta += subtotal;

    let resultado = `Subtotal: $${subtotal.toFixed(2)}<br>`;
    resultado += `Total acumulado: $${totalVenta.toFixed(2)}`;

    document.getElementById("resultado3_61").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_62() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_62();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="numero_3_62_${i}">Número ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="numero_3_62_${i}" name="numero_3_62_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_62" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_62() {
    let suma = 0;
    let i = 1;
    do {
        let numero = parseFloat(document.getElementById(`numero_3_62_${i}`).value);
        suma += numero;
        i++;
    } while (i <= 10);

    let resultado = `La suma de las 10 cantidades es: ${suma}`;

    document.getElementById("resultado3_62").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_63() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_63();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numeroCantidades_3_63">Número de cantidades (N):</label>';
                txt += '<input type="number" class="form-control" id="numeroCantidades_3_63" name="numeroCantidades_3_63">';
            txt += '</div>';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="cantidad_3_63_${i}">Cantidad ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="cantidad_3_63_${i}" name="cantidad_3_63_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_63" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_63() {
    let numeroCantidades = parseInt(document.getElementById("numeroCantidades_3_63").value);
    let menoresIgualesCero = 0;
    let mayoresCero = 0;

    for (let i = 1; i <= numeroCantidades; i++) {
        let cantidad = parseFloat(document.getElementById(`cantidad_3_63_${i}`).value);
        if (cantidad <= 0) {
            menoresIgualesCero++;
        } else {
            mayoresCero++;
        }
    }

    let resultado = `Cantidades menores o iguales a cero: ${menoresIgualesCero}<br>`;
    resultado += `Cantidades mayores a cero: ${mayoresCero}`;

    document.getElementById("resultado3_63").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_64() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_64();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="numero_3_64_${i}">Número ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="numero_3_64_${i}" name="numero_3_64_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_64" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_64() {
    let numeros = [];
    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(document.getElementById(`numero_3_64_${i}`).value);
        numeros.push(numero);
    }

    let suma = numeros.reduce((acc, num) => acc + num, 0);

    let resultado = `La suma de los 10 números es: ${suma}`;

    document.getElementById("resultado3_64").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}


function eje3_65() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_65();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numeroDatos_3_65">Número de datos (N):</label>';
                txt += '<input type="number" class="form-control" id="numeroDatos_3_65" name="numeroDatos_3_65">';
            txt += '</div>';
            for (let i = 1; i <= 10; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="dato_3_65_${i}">Dato ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="dato_3_65_${i}" name="dato_3_65_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Calcular</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_65" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_65() {
    let numeroDatos = parseInt(document.getElementById("numeroDatos_3_65").value);
    let positivos = [];
    let negativos = [];
    let sumaPositivos = 0;
    let sumaNegativos = 0;

    for (let i = 1; i <= numeroDatos; i++) {
        let dato = parseFloat(document.getElementById(`dato_3_65_${i}`).value);
        if (dato >= 0) {
            positivos.push(dato);
            sumaPositivos += dato;
        } else {
            negativos.push(dato);
            sumaNegativos += dato;
        }
    }

    let mayorPositivo = Math.max(...positivos);
    let menorPositivo = Math.min(...positivos);
    let mayorNegativo = Math.max(...negativos);
    let menorNegativo = Math.min(...negativos);

    let resultado = `Positivos: ${positivos.join(', ')}<br>`;
    resultado += `Negativos: ${negativos.join(', ')}<br>`;
    resultado += `Suma de positivos: ${sumaPositivos}<br>`;
    resultado += `Suma de negativos: ${sumaNegativos}<br>`;
    resultado += `Mayor positivo: ${mayorPositivo}<br>`;
    resultado += `Menor positivo: ${menorPositivo}<br>`;
    resultado += `Mayor negativo: ${mayorNegativo}<br>`;
    resultado += `Menor negativo: ${menorNegativo}`;

    document.getElementById("resultado3_65").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_66() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_66();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="datoBuscar_3_66">Dato a buscar (X):</label>';
                txt += '<input type="number" class="form-control" id="datoBuscar_3_66" name="datoBuscar_3_66">';
            txt += '</div>';
            for (let i = 1; i <= 100; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="elemento_3_66_${i}">Elemento ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="elemento_3_66_${i}" name="elemento_3_66_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Buscar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_66" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_66() {
    let datoBuscar = parseFloat(document.getElementById("datoBuscar_3_66").value);
    let posicion = -1;

    for (let i = 1; i <= 100; i++) {
        let elemento = parseFloat(document.getElementById(`elemento_3_66_${i}`).value);
        if (elemento === datoBuscar) {
            posicion = i;
            break;
        }
    }

    let resultado = (posicion !== -1) ? `El dato ${datoBuscar} se encontró en la posición ${posicion}.` : `El dato ${datoBuscar} no se encontró en el vector.`;

    document.getElementById("resultado3_66").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_67() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_67();">';
        txt += '<div class="row">';
            for (let i = 1; i <= 25; i++) {
                txt += `<div class="form-group col-md-2">`;
                    txt += `<label for="elemento_3_67_${i}">Elemento ${i}:</label>`;
                    txt += `<input type="number" class="form-control" id="elemento_3_67_${i}" name="elemento_3_67_${i}">`;
                txt += `</div>`;
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Invertir</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_67" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_67() {
    let vector = [];
    for (let i = 1; i <= 25; i++) {
        let elemento = parseFloat(document.getElementById(`elemento_3_67_${i}`).value);
        vector.push(elemento);
    }

    let vectorInvertido = vector.reverse();

    let resultado = `Vector invertido: ${vectorInvertido.join(', ')}`;

    document.getElementById("resultado3_67").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_68() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_68();">';
        txt += '<div class="row">';
            txt += '<div class="form-group col-md-12">';
                txt += '<label for="numero_3_68">Número (introduce un número negativo para terminar):</label>';
                txt += '<input type="number" class="form-control" id="numero_3_68" name="numero_3_68">';
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Agregar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_68" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

let numerosPositivos = [];

function realizarOperacion3_68() {
    let numero = parseFloat(document.getElementById("numero_3_68").value);
    if (numero >= 0) {
        numerosPositivos.push(numero);
        document.getElementById("numero_3_68").value = '';
    } else {
        let suma = numerosPositivos.reduce((acc, num) => acc + num, 0);
        let promedio = suma / numerosPositivos.length;
        let resultado = `Promedio de los números positivos: ${promedio.toFixed(2)}`;
        document.getElementById("resultado3_68").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
        numerosPositivos = [];
    }
}

function eje3_69() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_69();">';
        txt += '<div class="row">';
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    txt += `<div class="form-group col-md-2">`;
                        txt += `<label for="nota_3_69_${i}_${j}">Nota (${i},${j}):</label>`;
                        txt += `<input type="number" class="form-control" id="nota_3_69_${i}_${j}" name="nota_3_69_${i}_${j}" step="0.1" min="0" max="5">`;
                    txt += `</div>`;
                }
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Mostrar Aprobadas</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_69" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_69() {
    let notasAprobadas = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let nota = parseFloat(document.getElementById(`nota_3_69_${i}_${j}`).value);
            if (nota >= 3.5) {
                notasAprobadas.push(nota);
            }
        }
    }

    let resultado = `Notas aprobadas: ${notasAprobadas.join(', ')}`;

    document.getElementById("resultado3_69").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_70() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_70();">';
        txt += '<div class="row">';
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    txt += `<div class="form-group col-md-2">`;
                        txt += `<label for="numero_3_70_${i}_${j}">Número (${i},${j}):</label>`;
                        txt += `<input type="number" class="form-control" id="numero_3_70_${i}_${j}" name="numero_3_70_${i}_${j}" min="0" max="99">`;
                    txt += `</div>`;
                }
            }
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Ordenar y Mostrar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_70" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_70() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let numero = parseInt(document.getElementById(`numero_3_70_${i}_${j}`).value);
            numeros.push(numero);
        }
    }

    numeros.sort((a, b) => a - b);
    let menor = numeros[0];
    let mayor = numeros[numeros.length - 1];
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let promedio = suma / numeros.length;

    let resultado = `Números en orden ascendente: ${numeros.join(', ')}<br>`;
    resultado += `Menor número: ${menor}<br>`;
    resultado += `Mayor número: ${mayor}<br>`;
    resultado += `Promedio: ${promedio.toFixed(1)}`;

    document.getElementById("resultado3_70").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}

function eje3_71() {
    let txt = '';
    txt += '<form onsubmit="event.preventDefault(); realizarOperacion3_71();">';
        txt += '<div class="row">';
            txt += '<div class="col-md-6">';
                txt += '<h4>Matriz A</h4>';
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        txt += `<div class="form-group col-md-4">`;
                            txt += `<label for="matrizA_3_71_${i}_${j}">A(${i},${j}):</label>`;
                            txt += `<input type="number" class="form-control" id="matrizA_3_71_${i}_${j}" name="matrizA_3_71_${i}_${j}" min="0" max="9">`;
                        txt += `</div>`;
                    }
                }
            txt += '</div>';
            txt += '<div class="col-md-6">';
                txt += '<h4>Matriz B</h4>';
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        txt += `<div class="form-group col-md-4">`;
                            txt += `<label for="matrizB_3_71_${i}_${j}">B(${i},${j}):</label>`;
                            txt += `<input type="number" class="form-control" id="matrizB_3_71_${i}_${j}" name="matrizB_3_71_${i}_${j}" min="0" max="9">`;
                        txt += `</div>`;
                    }
                }
            txt += '</div>';
            txt += '<div class="form-group col-md-12">';
                txt += '<button type="submit" class="btn btn-primary">Multiplicar y Sumar</button>';
            txt += '</div>';
        txt += '</div>';
    txt += '</form>';

    txt += '<div id="resultado3_71" class="mt-3"></div>';

    document.getElementById("eje").innerHTML = txt;
}

function realizarOperacion3_71() {
    let matrizA = [];
    let matrizB = [];
    for (let i = 0; i < 3; i++) {
        matrizA[i] = [];
        matrizB[i] = [];
        for (let j = 0; j < 3; j++) {
            matrizA[i][j] = parseInt(document.getElementById(`matrizA_3_71_${i}_${j}`).value);
            matrizB[i][j] = parseInt(document.getElementById(`matrizB_3_71_${i}_${j}`).value);
        }
    }

    let matrizC = [];
    for (let i = 0; i < 3; i++) {
        matrizC[i] = [];
        for (let j = 0; j < 3; j++) {
            matrizC[i][j] = 0;
            for (let k = 0; k < 3; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    let sumaFilas = matrizC.map(fila => fila.reduce((acc, num) => acc + num, 0));
    let sumaColumnas = [0, 0, 0];
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            sumaColumnas[j] += matrizC[i][j];
        }
    }

    let resultado = `Matriz resultante:<br>${matrizC.map(fila => fila.join(', ')).join('<br>')}<br>`;
    resultado += `Suma de filas: ${sumaFilas.join(', ')}<br>`;
    resultado += `Suma de columnas: ${sumaColumnas.join(', ')}`;

    document.getElementById("resultado3_71").innerHTML = '<div class="resultado-box"><h3>' + resultado + '</h3></div>';
}