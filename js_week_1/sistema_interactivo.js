
function pressButton() {

  let name = prompt("Ingresa tu nombre");
  let age = prompt("Ingresa tu edad");

  // Verificacion para la var AGE
  if (isNaN(age)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    console.log("Valor invalido: " + age);
  }
  // Se ve que valor se ingresó
  if (age) {
    console.log("edad: " + age);
  }

  // Verificacion para la edead.
  if (age < 18) {
    alert("Hola " + name + " eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
  }
  else if (age >= 18) {
    alert("Hola " + name + " eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
  }
}

