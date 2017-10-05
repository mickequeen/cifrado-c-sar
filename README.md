# Cifrado César

#### Este Archivo contiene
		-Pseudocódigo de cifrado César
		-Número de versión
		-Diagrama de Flujo


````
Funcion principal ( resp )
 	solicita ingresar entre opcion 1 o 2
 	si ingresa 1, llama a función de cifrado
 	si ingreso 2, llama a función de descifrado
	 en caso de ingresar parámetros no válidos arroja error
Fin Funcion

Funcion cipher ( string )
   solicitar ingreso de texto
    si no cumple con parámetros de texto (cualquier cosa no alfabética) arrojar mensaje de error
    	si cumple con parámetros de texto tomar cada carácter y cifrarlo 33 espacios hacia la derecha
    	verifica si es mayúscula o minúscula y la cifra en cada caso
    retorna mensaje cifrado

Fin Funcion

Funcion decipher ( string )
 	  si no cumple con parámetros de texto (cualquier cosa no alfabética) arrojar mensaje de error
    	si cumple con parámetros de texto tomar cada carácter y descifrarlo 33 espacios hacia la izquierda
    	verifica si es mayúscula o minúscula y la descifra en cada caso
    retorna mensaje descifrado

fin función

    llamo a función principal en caso de que no cumplan algún parámetro para solicitar ingreso de datos nuevamente.
    principal()
FinAlgoritmo

````

#### Diagrama de flujo
![Diagrama de flujo cifrado de César](http://subirimagen.me/uploads/20171005081052.jpg)

#### Versión `0.0.1`
#### Creado por Carol Martínez
###### Squad 5to Elemento