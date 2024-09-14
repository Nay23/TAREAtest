// Archivo: validarContrasena.js

// Función que valida la longitud de la contraseña
function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return "Contraseña muy corta";
    } else if (contrasena.length >= 8 && contrasena.length <= 12) {
        return "Contraseña válida";
    } else {
        return "Contraseña muy larga";
    }
}

// Exportar la función para que se pueda utilizar en otros archivos
module.exports = validarContrasena;
