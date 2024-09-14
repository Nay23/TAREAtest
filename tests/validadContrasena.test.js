
const validarContrasena = require('../validarContrasena');

// Grupo de pruebas
describe('Pruebas de clases de equivalencia para validar contraseñas', () => {

    // Clase de equivalencia 1: Contraseñas con menos de 8 caracteres
    test('Debe retornar "Contraseña muy corta" cuando la longitud es menor de 8', () => {
        expect(validarContrasena("abc")).toBe("Contraseña muy corta");
    });

    // Clase de equivalencia 2: Contraseñas con 8 a 12 caracteres
    test('Debe retornar "Contraseña válida" cuando la longitud está entre 8 y 12', () => {
        expect(validarContrasena("abc12345")).toBe("Contraseña válida");
        expect(validarContrasena("abc123456789")).toBe("Contraseña válida");
    });

    // Clase de equivalencia 3: Contraseñas con más de 12 caracteres
    test('Debe retornar "Contraseña muy larga" cuando la longitud es mayor a 12', () => {
        expect(validarContrasena("abc1234567890")).toBe("Contraseña muy larga");
    });
});
