// llamar elementos html
const btnGenerarContraseña = document.querySelector('#btn-contraseña');
const btnCopiar = document.querySelector('#btn-copiar');
const textArea = document.querySelector(".textarea-1");


// 6 arrays, cada uno con caracteres del mismo tipo,
// para materia prima para generar las contraseñas
const letrasMinusculas = ["b", "z", "x", "n", "c", "j", "s", "f", "ñ", "p", "g", "q", "w", "m",
    "t", "r", "k", "y", "l", "v", "d", "h"];

const letrasMayusculas = ["W", "B", "J", "H", "S", "D", "L", "K", "Q", "N", "X", "C", "Z", "G",
    "R", "Y", "Ñ", "P", "M", "F", "T", "V"];

const vocalesMinusculas = ["i", "e", "a", "u", "o"];

const vocalesMayusculas = ["U", "I", "E", "O", "A"];

const numeros = ["1", "8", "7", "4", "5", "9", "0", "2", "3", "6"];

const caracteresEspeciales = ["+", "!", "(", ".", "-", "=", "?", "/", ",", ":", "-", "_", "*", ")",
    ";", "Ç", "{", "}", "&", "%", "@", "¿", "¡"];


// array bidimensional, contiene los 6 array primarios
const diccionario = [letrasMayusculas, numeros, vocalesMinusculas, caracteresEspeciales,
    vocalesMayusculas, letrasMinusculas];




// evento click añadido al botón btnGenerarContraseña,  con una función para
//generar contraseña, se basa en ciclo que cada ciclo tiene 2 etapas para generar
//un carácter aleatorio, en la primera generar un número pseudo aleatorio para
// que la función escoja un array del array diccionario, 2 etapa generar otro 
// número pseudo aleatorio para  que la función elija un carácter del array
// ya elegido, terminado el ciclo hasta que la condición del while se cumpla
// para que se rompa 


btnGenerarContraseña.addEventListener('click', () => {

    let contraseña = "";
    let ind = 0;
    let indexArray2 = [];
    while (ind <= 14) {

        const numeroRandom6 = Math.floor(Math.random() * 6);

        if (numeroRandom6 == 0 || numeroRandom6 == 5) {

            indexArray2 = Math.floor(Math.random() * letrasMayusculas.length);

        } else if (numeroRandom6 == 2 || numeroRandom6 == 4) {

            indexArray2 = Math.floor(Math.random() * vocalesMayusculas.length);

        } else if (numeroRandom6 == 1) {
            indexArray2 = Math.floor(Math.random() * numeros.length);

        } else {
            indexArray2 = Math.floor(Math.random() * caracteresEspeciales.length);

        };

        console.log(`index array 2: ${indexArray2}`);
        console.log(`indice: ${ind}`);
        contraseña += diccionario[numeroRandom6][indexArray2];
        console.log(`contraseña: ${contraseña}`);
        ind++;
    };

    textArea.textContent = contraseña;


});



// botón copiar, que el textarea que limpia y dar aviso que fue copiado

btnCopiar.addEventListener('click', () => {

    navigator.clipboard.writeText(textArea.textContent);
    textArea.textContent = "";

    btnCopiar.textContent = "copiado";

    setTimeout(() => {
        btnCopiar.textContent = "Copiar";
    }, 1000)
});