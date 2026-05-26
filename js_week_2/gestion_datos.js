// Estructuras de Datos JAVASCRIPT

// ==========================================
// TASK 1
// Creación del objeto de productos
// ==========================================

// Cada producto tiene:
// - id
// - nombre
// - precio

const productos = {
  producto1: {
    id: 1,
    nombre: "Teclado Mecánico",
    precio: 250000
  },

  producto2: {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 120000
  },

  producto3: {
    id: 3,
    nombre: "Monitor 24 pulgadas",
    precio: 850000
  }
};

console.log("=== LISTA DE PRODUCTOS ===");
console.log(productos);



// ==========================================
// TASK 2
// Uso de Set en JavaScript
// ==========================================

// Set elimina duplicados automáticamente

const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log("\n=== SET ORIGINAL ===");
console.log(numeros);


// Agregar nuevo número

numeros.add(10);

console.log("\n=== SET DESPUÉS DE ADD ===");
console.log(numeros);


// Verificar existencia de un número

console.log("\n=== VERIFICAR NÚMERO ===");

if (numeros.has(3)) {
  console.log("El número 3 sí existe");
} else {
  console.log("El número 3 no existe");
}


// Eliminar un número

numeros.delete(2);

console.log("\n=== SET DESPUÉS DE DELETE ===");
console.log(numeros);


// Recorrer Set con for...of

console.log("\n=== RECORRIDO DEL SET ===");

for (const numero of numeros) {
  console.log(numero);
}



// ==========================================
// TASK 3
// Creación de un Map
// ==========================================

// Clave = categoría
// Valor = nombre del producto

const categorias = new Map();

categorias.set("Periféricos", "Teclado Mecánico");
categorias.set("Accesorios", "Mouse Gamer");
categorias.set("Pantallas", "Monitor 24 pulgadas");

console.log("\n=== MAP DE CATEGORÍAS ===");
console.log(categorias);



// ==========================================
// TASK 4
// Iteración sobre estructuras de datos
// ==========================================


// ---------- for...in sobre objeto ----------

console.log("\n=== RECORRER OBJETO CON for...in ===");

for (const clave in productos) {
  console.log(clave);
  console.log(productos[clave]);
}


// ---------- for...of sobre Set ----------

console.log("\n=== RECORRER SET CON for...of ===");

for (const numero of numeros) {
  console.log(numero);
}


// ---------- forEach sobre Map ----------

console.log("\n=== RECORRER MAP CON forEach ===");

categorias.forEach((valor, clave) => {
  console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});



// ==========================================
// TASK 5
// Validación y pruebas
// ==========================================

// Validar productos

console.log("\n=== VALIDACIÓN DE PRODUCTOS ===");

for (const clave in productos) {

  const producto = productos[clave];

  const idValido =
    typeof producto.id === "number";

  const nombreValido =
    typeof producto.nombre === "string" &&
    producto.nombre.length > 0;

  const precioValido =
    typeof producto.precio === "number" &&
    producto.precio > 0;

  if (idValido && nombreValido && precioValido) {
    console.log(`${producto.nombre} es válido`);
  } else {
    console.log(`${producto.nombre} NO es válido`);
  }
}



// ==========================================
// RESULTADOS FINALES
// ==========================================

console.log("\n=== RESULTADO FINAL ===");

// Lista completa de productos
console.log("\nProductos:");
console.log(productos);


// Lista única del Set
console.log("\nNúmeros únicos:");
console.log(numeros);


// Categorías y productos del Map
console.log("\nCategorías y productos:");

categorias.forEach((producto, categoria) => {
  console.log(`${categoria}: ${producto}`);
});


