
/*
*consultar al usuario qué desea hacer y validar que no ingrese el campo vacío ni carácteres distintos a los indicados (1 y 2 como opción)
*/
function principal(options) {
  do {
  /*
  *pop up que pide datos por teclado al cliente y guarda lo escrito en la variable askUser
  */
    var askUser = prompt('Favor ingrese número de lo que desea hacer, 1: cifrar, 2: descifrar');
    if (askUser !== '') {
    /*
    *si el campo de texto no está vacío al ingresar uno llamará a la función de cifrado
    */
      if (askUser === '1') {
        cipher();
      /*
      *si usuario ingresa "2" en prompt entonces llama a función de descifrado
      */
      } else if (askUser === '2') {
        decipher();
      } else {
      /*
      *si no se cumple niuna de las condiciones anteriormente descritas arroja alert de error
      */
        alert('ingrese una opción válida');
      }
    }
    /*
    *creo loop para mantener cautivo a usuario hasta que ingrese uno de los parámetros y no deje vacío el prompt, mientras no lo haga la ventana continuará apareciendo
    */
  } while (askUser === '' || (askUser !== '1' && askUser !== '2'));
}
/*
*crear la función de cifrado
*/
function cipher(string) {
  do {
    /*
    *crear variable que contenga lo que usuario ingrese por teclado
    */
    var strToCipher = prompt('Favor ingresar mensaje a cifrar');
    /*
    *variable (array) para contener los valores ascii de cada carácter ingresado en prompt
    */
    var ascii = [];
    /*
    *variable (array) para contener los valores ascii convertidos nuevamente a carácteres
    */
    var newStr = [];
    /*
    *variable para validar que los carácteres ingresados sean alfabéticos
    */
    var validateStr = /^[a-zA-Z]*$/;
    /*
    *condiciones para hacer correr el ciclo, si el string ingresado no está vacío ni es algo fuera de los parámetros alfabéticos, entonces se ejecuta.
    */
    if (strToCipher !== '' && validateStr.test(strToCipher) === true) {
      /*
      *recorrer lo ingresado en prompt
      */
      for (var i = 0; i < strToCipher.length; i++) {
        /*
        *si prompt ingresado es mayúscula, entonces conteo del ascii empieza desde el carácter 65 (A mayúscula en ascii)
        */
        if (strToCipher[i] === strToCipher[i].toUpperCase()) {
          /*
          *ingresar cada carácter de la iteración en array, empezando el conteo desde el carácter 65 (A)
          */
          ascii.push((strToCipher.charCodeAt(i) - 65 + 33) % 26 + 65);
          /*
          *si los carácteres ingresados son en minúscula, el conteo comienza desde el carácter 97 (a minúscula) y se aplica la fórmula
          */
        } else if (strToCipher[i] === strToCipher[i].toLowerCase()) {
        /*
        *ingresar cada carácter del prompt que es minúscula en un nuevo array (ascii)
        */
          ascii.push((strToCipher.charCodeAt(i) - 97 + 33) % 26 + 97);
        }
      /*
      *crear segundo contador, para recorrer array de posiciones ascii
      */
      } for (var x = 0 ; x < ascii.length; x++) {
        /*
        *ingresar en nuevo array carácteres del recorrido anterior uno a uno con un nuevo ciclo
        */
        newStr.push(String.fromCharCode(ascii[x]));
      }
      /*
      *si todo lo anterior se ejecuta correctamente un alert devolverá el nuevo string del msje codificado
      */
      return alert('el mensaje \'' + strToCipher + '\ ha sido cifrado, el nuevo mensaje es \'' + newStr.join('') + '\'');
    } else {
      /*
      *si no se cumplen condiciones arroja mensaje de error
      */
      alert('favor ingrese parámetros válidos');
    }
    /*
    *si no se cumplen condiciones luego del mensaje de error vuelve al inicio del loop solicitando ingresar los parámetros válidos
    */
  } while (strToCipher === '' || validateStr.test(strToCipher) === false);
}
/*
*crear funcion de decifrado
*/
function decipher(string) {
  do {
    /*
    *crear variable para guardar lo que usuario ingrese por teclado
    */
    var strToDecipher = prompt('Favor ingresar mensaje a decifrar');
    /*
    *crear variable vacía para guardar números correspondientes a carácteres ascii
    */
    var ascii = [];
    /*
    *crear variable vacía que guarde números ascii convertidos en carácteres
    */
    var newStr = [];
    /*
    *variable de validación alfabética
    */
    var validateStr = /^[a-zA-Z]*$/;
    /*
    *si se cumple condición de que prompt no esté vacío y cumple con la validación alfabética, se ejecuta lo que viene a continuación
    */
    if (strToDecipher !== '' && validateStr.test(strToDecipher) === true) {
      /*
      *recorrer lo ingresado en prompt
      */
      for (var i = 0; i < strToDecipher.length; i++) {
        /*
        *si string ingresado es mayúscula, entonces conteo del ascii empieza desde el carácter 90 (Z ascii, ya que debe contar de derecha a izquierda)
        */
        if (strToDecipher[i] === strToDecipher[i].toUpperCase()) {
          /*
          *ingresa números correspondientes a cáda carácter ascii en la variable vacía declarada arriba, haciendo el decifrado de derecha a izquierda
          */
          ascii.push((strToDecipher.charCodeAt(i) - 90 - 33 + 26) % 26 + 90);
          /*
          *si string ingresado es en minúscula, se ejecuta lo que viene a continuación
          */
        } else if (strToDecipher[i] === strToDecipher[i].toLowerCase()) {
        /*
        *ingresar cada carácter del prompt que es minúscula en un nuevo array, comenzando el conteo desde carácter número 122, que es la z minúscula ya que es hacia atrás.
        */
          ascii.push((strToDecipher.charCodeAt(i) - 122 - 33 + 26) % 26 + 122);
        }
        /*
        *segundo bucle recorre el array de números ascii
        */
      } for (var x = 0 ; x < ascii.length; x++) {
        /*
        *ingresar en nuevo array carácteres del recorrido anterior uno a uno con un nuevo ciclo
        */
        newStr.push(String.fromCharCode(ascii[x]));
      }
      /*
      *si todo lo anterior se cumple retorna alert con resultado del descifrado
      */
      return alert('Su mensaje descifrado es ' + newStr.join(''));
    } else {
      /*
      *si no se cumplen condiciones arroja mensaje de error
      */
      alert('favor ingrese parámetros válidos');
    }
    /*
    *luego del mensaje de error el while devuelve el bucle al inicio del do, en el cual solicita que ingrese los datos con parámetros válidos
    */
  } while (strToDecipher === '' || validateStr.test(strToDecipher) === false);
}

principal();