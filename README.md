# Kata Numeros Romanos
## Acerca de esta Kata
Esta Kata fue presentada por Ken Beck en XP2001. Aca [el video de Karl Scotland haciendo esta kata en Excel at agile 2008](https://www.infoq.com/presentations/TDD-Managers-Nicolette-Scotland)

### Dificultad - Facil.

## Descripción del problema
Los Romanos escribian los numeros usando las letras: I, V, X, L, C, D, M (una ventaja que tenian estas letras era que eran en general hechas con lineas rectas y faciles de esculpir en piedras)

### Parte I
Escribir una función que convierta un numero en un string con la representación del numero en numeros romanos

Ejemplos:

     1 --> I
     10 --> X
     7 --> VII
etc.

Para mas detalle de como escribir numeros romanos podes consultar [esta referencia](https://matematicasparaticharito.wordpress.com/2015/03/21/sistema-de-numeracion-romano/)

No es necesario soportar numeros mayores a 3000 (Incluso los romanos no consideraron esta opción en general)

En el codigo de ejemplo están los primeros tests.

### Parte II
Escribir una funcion que convierta en la otra dirección, es decir, de numeros romanos a arábicos

### Pistas

- Crees que es mejor pensar el algoritmo antes de empezar con TDD?
- Si no conoces el algoritmo para resolver este problema, podes armar uno usando TDD?
- Si ya conoces el argoritmo para resolver este problema, podes implementarlo usando estrictamente TDD?
- Cual es la mejor estructura de datos para guardar las letras romanas: (I, V, D, M etc)

### Retrospectiva
- Ayuda partir al funcion en pequeñas funciones o es mejor mantener todo en una sola función?
- El orden en que elegis los tests afecto el algoritmo final?
- Podes pensar en otro algoritmo para resolver este problema?
