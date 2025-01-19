# Explicacion de cada archivo generado al crear un proyecto angular

.editorconfig
Descargue una extension "EditorConfig for VS Code" permite sobreescribir valores por defecto de nuestro editor de codigo
Lo que hace este archivo es establecer configuraciones por defecto a este proyecto, con el fin de que el codigo se mire igual en todos lados

.gitignore
Es un archivo propio de git para ignorar archivos que esten en este archivo para no subirlos al remoto

angular.json
Se le dice a angular ciertas configuraciones para la ejecucion del proyecto

package-lock.json
Dice como fueron construidos los modulos de node( jamas se toca, solo cuando se hagan comandos de instalacion o remover dependencias de package.json )

package.json
Es algo propio de aplicaciones de node ( Este proyecto de angular esta construido sobre node )
Dice las dependencias que la aplicacion necesita, ya sea para desarrollo o produccion.

README.md
Debe de explicar, como funciona, corre la aplicacion, cualquier detalle para poder hacer funcionar el programa, como hacer el build, etc.
Funciona con markdow( Es pa darle forma al texto )

tsconfic.app.json
Son configuraciones de typescript

tsconfic.json
Recomendaciones para trabajar typescript en angular de forma estandarizada

tsconfic.spec.json
Son configuraciones de typescript, en la parte del testing
