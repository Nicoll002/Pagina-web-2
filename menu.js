crearmenu();
moseje(0);

const m1 = document.querySelector('#m1');
const m2 = document.querySelector('#m2');

m1. addEventListener("click",function(){ocumen(1);});
m2. addEventListener("click",function(){ocumen(2);});

function ocumen(ti){ 
    if(ti==1){
        document.getElementById("m2").style.display = "inherit";
        document.getElementById("m1").style.display = "none";
        document.getElementById("men").style.display = "inline-block";
    }else{
        document.getElementById("m2").style.display = "none";
        document.getElementById("m1").style.display = "inherit";
        document.getElementById("men").style.display = "none";
    }
}

function crearmenu(){
    let txt="";

    let titmen = ["Triqui",
        "Calculos Básicos", "Valor Mayor o menor", "Mayor o menor a 100", "Orden ascendente 3 valores", "Promedio notas", "Area triangulo", "Par o impar", "Rosas", "Productos vendidos", "Concesionario carros",
        "Decremento 3 en 3", "Fibonacci", "30 primos", "Valor mayor a 10", "Operación asignada", "Divisible por 2 y 3", "Primos mayores a 4 ", "Reloj", "Tabla del 5", "50 valores",
        "Suma de 2 numeros cualquiera", "Promedio examenes", "Area de un rectángulo", "Area circunferencia", "Terrenos construcción", "Área de una figura compuesta", " Conversión de litros a galones ", " Distancia entre dos puntos", "Conversión de metros a pulgadas", "Cálculo del pago por consumo de agua",
        "Determinar cuál de dos valores es el mayor", "Determinar si un número es positivo o negativo", "Costo de lápices", "Descuento en trajes", "Determinar cuál de tres cantidades es la mayor", "Presupuesto para banquetes", "Ganancia por venta de uva", " Costo del viaje de estudios", " Costo de una llamada telefónica", "Costo de un viaje en autobús",
        "Costo de la consulta médica", "Costo de paquetería internacional", "Aumento del límite de crédito", "Premios en el supermercado", "Menú de operaciones matemáticas", "Operaciones sobre un número", "Números primos entre 1 y N", "Porcentaje de hombres y mujeres", "Suma de 5 números", "Números pares entre 1 y N",
        "Análisis de ventas", "Suma de diez cantidades", "Edad promedio de un grupo de N alumnos", "Estatura promedio de un grupo de personas", "Ahorro mensual y total en un año", "N elementos de la sucesión de Fibonacci", "Total de horas trabajadas y sueldo", "Encuentro en la carretera", "Análisis de ventas", "Cálculo de nómina",
        "Caja registradora", "Suma de diez cantidades", "Cantidades mayores y menores o iguales a cero", "Suma de 10 números almacenados en un vector", "Guardar positivos y negativos en vector", "Buscar un dato en un vector", "Invertir un vector de 25", "Promedio de una lista indeterminada", "Matriz 5x5", "Matriz 5x5 con números enteros",
        "matrices 3x3 y sumar filas"
    ];

    let icons = [
        "fa-solid fa-gamepad", "fa-solid fa-dice", "fa-solid fa-headset", "fa-solid fa-trophy", "fa-solid fa-star",
        "fa-solid fa-joystick", "fa-solid fa-dragon", "fa-solid fa-ghost", "fa-solid fa-chess-knight", "fa-solid fa-chess-queen",
        "fa-solid fa-chess-rook", "fa-solid fa-chess-pawn", "fa-solid fa-chess-bishop", "fa-solid fa-chess-king", "fa-solid fa-fire",
        "fa-solid fa-sword", "fa-solid fa-shield", "fa-solid fa-heart", "fa-solid fa-bolt", "fa-solid fa-skull",
        "fa-solid fa-user-ninja", "fa-solid fa-user-secret", "fa-solid fa-robot", "fa-solid fa-mask", "fa-solid fa-spider",
        "fa-solid fa-paw", "fa-solid fa-fist-raised", "fa-solid fa-hand-rock", "fa-solid fa-hand-peace", "fa-solid fa-hand-spock",
        "fa-solid fa-crosshairs", "fa-solid fa-bullseye", "fa-solid fa-flag-checkered", "fa-solid fa-running", "fa-solid fa-dungeon",
        "fa-solid fa-scroll", "fa-solid fa-book-spells", "fa-solid fa-wand-magic", "fa-solid fa-ring", "fa-solid fa-gem",
        "fa-solid fa-coins", "fa-solid fa-chess", "fa-solid fa-dice-d20", "fa-solid fa-dice-d6", "fa-solid fa-hat-wizard",
        "fa-solid fa-hand-holding-usd", "fa-solid fa-globe", "fa-solid fa-key", "fa-solid fa-lock", "fa-solid fa-unlock",
        "fa-solid fa-shield-alt", "fa-solid fa-medal", "fa-solid fa-crown", "fa-solid fa-helmet-battle", "fa-solid fa-axe-battle",
        "fa-solid fa-bomb", "fa-solid fa-gun", "fa-solid fa-radiation", "fa-solid fa-smog", "fa-solid fa-rocket",
        "fa-solid fa-satellite", "fa-solid fa-alien", "fa-solid fa-meteor", "fa-solid fa-swords", "fa-solid fa-hammer-war",
        "fa-solid fa-biohazard", "fa-solid fa-network-wired", "fa-solid fa-vr-cardboard", "fa-solid fa-potion", "fa-solid fa-scroll-old"
    ];
    
    

    for(var i=0;i<=(titmen.length);i++){
        let tit = "<i class='"+icons[i]+"'></i> Ejercicio "+(i+1)+" - "+titmen[i];
        txt += "<a href=\"#\" onclick=\"moseje("+i+", '"+icons[i]+"','"+titmen[i]+"');\">"+tit+"</a>";
    }
    document.getElementById("men").innerHTML = txt;
}

function moseje(n,ico="fa-solid fa-user", tit="Triqui"){
    let ti = "<h2><i class='"+ico+"'></i> Ejercicio "+(n+1)+" - "+tit+"</h2><hr>";
    document.getElementById("titulo").innerHTML=ti;
    if(n==0){
        document.getElementById("triqui").style.display="inherit";
        document.getElementById("eje").style.display="none";
    }else{
        document.getElementById("triqui").style.display="none";
        document.getElementById("eje").style.display="inherit";
        if(n==1) eje1();
        else if(n==2) eje3_2();
        else if (n==3) eje3_3();
        else if (n==4) eje3_4();
        else if (n==5) eje3_5();
        else if (n==6) eje3_6();
        else if (n==7) eje3_7();
        else if (n==8) eje3_8();
        else if (n==9) eje3_9();
        else if (n==10) eje3_10();
        else if (n==11) eje3_11();
        else if (n==12) eje3_12();
        else if (n==13) eje3_13();
        else if (n==14) eje3_14();
        else if (n==15) eje3_15();
        else if (n==16) eje3_16();
        else if (n==17) eje3_17();
        else if (n==18) eje3_18();
        else if (n==19) eje3_19();
        else if (n==20) eje3_20();
        else if (n==21) eje3_21();
        else if (n==22) eje3_22();
        else if (n==23) eje3_23();
        else if (n==24) eje3_24();
        else if (n==25) eje3_25();
        else if (n==26) eje3_26();
        else if (n==27) eje3_27();
        else if (n==28) eje3_28();
        else if (n==29) eje3_29();
        else if (n==30) eje3_30();
        else if (n==31) eje3_31();
        else if (n==32) eje3_32();
        else if (n==33) eje3_33();
        else if (n==34) eje3_34();
        else if (n==35) eje3_35();
        else if (n==36) eje3_36();
        else if (n==37) eje3_37();
        else if (n==38) eje3_38();
        else if (n==39) eje3_39();
        else if (n==40) eje3_40();
        else if (n==41) eje3_41();
        else if (n==42) eje3_42();
        else if (n==43) eje3_43();
        else if (n==44) eje3_44();
        else if (n==45) eje3_45();
        else if (n==46) eje3_46();
        else if (n==47) eje3_47();
        else if (n==48) eje3_48();
        else if (n==49) eje3_49();
        else if (n==50) eje3_50();
        else if (n==51) eje3_51();
        else if (n==52) eje3_52();
        else if (n==53) eje3_53();
        else if (n==54) eje3_54();
        else if (n==55) eje3_55();
        else if (n==56) eje3_56();
        else if (n==57) eje3_57();
        else if (n==58) eje3_58();
        else if (n==59) eje3_59();
        else if (n==60) eje3_60();
        else if (n==61) eje3_61();
        else if (n==62) eje3_62();
        else if (n==63) eje3_63();
        else if (n==64) eje3_64();
        else if (n==65) eje3_65();
        else if (n==66) eje3_66();
        else if (n==67) eje3_67();
        else if (n==68) eje3_68();
        else if (n==69) eje3_69();
        else if (n==70) eje3_70();
        else if (n==71) eje3_71();
        else if (n==72) eje3_72();
        
        
    }
}