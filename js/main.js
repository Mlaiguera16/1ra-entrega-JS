const userOk = "prueba@gmail.com";
const passOk = "987";
let producto1 = "Ensalada Cesar";
let producto2 = "Ensalada Runch";
let producto3 = "Ensalada Primavera";
let producto4 = "Ensalada Vegana";
let producto5 = "Ensalada Power";
let producto6 = "Ensalada de Quesos";
let producto7 = "Ensalada Mediterranea";
let producto8 = "Ensalada Griega";
let producto9 = "Ensalada Oriental";
let precioProducto1 = 999;
let precioProducto2 = 890;
let precioProducto3 = 799;
let precioProducto4 = 850;
let precioProducto5 = 999;
let precioProducto6 = 980;
let precioProducto7 = 890;
let precioProducto8 = 820;
let precioProducto9 = 789;
let carrito = 0;
let okpass = false;
let menup;
function menuPrincipal() {
  menup = prompt(
    "Selecciona una opción del menu \n1-Comprar " +
      producto1 +
      " por $ " +
      precioProducto1 +
      "\n2-Comprar " +
      producto2 +
      " por $ " +
      precioProducto2 +
      "\n3-Comprar " +
      producto3 +
      " por $ " +
      precioProducto3 +
      "\n4-Comprar " +
      producto4 +
      " por $ " +
      precioProducto4 +
      "\n5-Comprar " +
      producto5 +
      " por $ " +
      precioProducto5 +
      "\n6-Comprar " +
      producto6 +
      " por $ " +
      precioProducto6 +
      "\n7-Comprar " +
      producto7 +
      " por $ " +
      precioProducto7 +
      "\n8-Comprar " +
      producto8 +
      " por $ " +
      precioProducto8 +
      "\n9-Comprar " +
      producto9 +
      " por $ " +
      precioProducto9 +
      "\n10-Anular compra \n11-Ver total \n12-Actualizar dirección de envio \n13-Pagar \n14-Salir"
  );
}
function actualizacionCarrito(prod) {
  carrito = carrito + prod;
}

let user = prompt(
  "Bienvenido !!!!!!!!!!!!!!!!!!!\n\nPor favor para iniciar sesión en la tienda on line ingresa tu mail registrado:\n"
);

let pass = prompt("Ingresa tu contraseña\n");

if (user == userOk && pass == passOk) {
  alert(
    "Sesión Iniciada correctamente! \nSe procede a acceder al carrito de compras"
  );
  okpass = true;
} else {
  alert("Error, el usuario o la contraseña son invalidos");
}

if (okpass) {
  menuPrincipal();

  while (menup != "14") {
    switch (menup) {
      case "1":
        alert("Agregamos " + producto1 + " al carrito!");
        actualizacionCarrito(precioProducto1);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "2":
        alert("Agregamos " + producto2 + " al carrito!");
        actualizacionCarrito(precioProducto2);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "3":
        alert("Agregamos " + producto3 + " al carrito!");
        actualizacionCarrito(precioProducto3);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "4":
        alert("Agregamos " + producto4 + " al carrito!");
        actualizacionCarrito(precioProducto4);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "5":
        alert("Agregamos " + producto5 + " al carrito!");
        actualizacionCarrito(precioProducto5);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "6":
        alert("Agregamos " + producto6 + " al carrito!");
        actualizacionCarrito(precioProducto6);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "7":
        alert("Agregamos " + producto7 + " al carrito!");
        actualizacionCarrito(precioProducto7);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "8":
        alert("Agregamos " + producto8 + " al carrito!");
        actualizacionCarrito(precioProducto8);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "9":
        alert("Agregamos " + producto9 + " al carrito!");
        actualizacionCarrito(precioProducto9);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "10":
        alert("Anulamos todos los productos del carrito");
        carrito = 0;
        alert("Tu saldo es de $ " + carrito);
        break;
      case "11":
        alert("Tu Total hasta el momento es de $ " + carrito);
        break;
      case "12":
        prompt("Por favor informanos tu dirección a la cual llegara el envio:");
        break;
      case "13":
        prompt(
          "Ingresa los datos de la tarjeta de credito para proceder con el pago:"
        );
        break;

      default:
        alert("Presione una opción valida por favor....");
        break;
    }
    menuPrincipal();
  }
}
