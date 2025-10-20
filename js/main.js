
// WEBapp: Simulador de Dados (MVP)
// Versión: 1.0
// MVP = Producto Mínimo Viable = Tirar dado 6 caras

// Objeto DADO
let dado = {
    // Propiedades
    cantosRedondeados: true,
    material: ["plástico", "madera", "metal", "resina"],
    color: "blanco",
    opacidad: 1,
    caras: [4, 6, 8, 10, 12, 20, 100],
    grabado: false,
    tamano2: {
        ["pequeño"]: "2cm",
        ["standard"]: "3cm",
        ["grande"]: "5cm",
    },
    peso: ["ligero", "standard", "pesado"],
    marca: [
        "Hasbro",
        "Chessex",
        "Koplow",
        "GameScience",
        "WizDice",
        "Q-Workshop",
        "Die Hard Dice",
    ],
    // Métodos
    tirar: function (caras = 6) {
        // si las caras no coinciden con las caras definidas en la propiedad caras, devolver un mensaje de error
        if (!this.caras.includes(caras)) {
            return "Error: El dado no tiene " + caras + " caras.";
        }
        return Math.floor(Math.random() * caras) + 1;
    },
};

// Conexiones con HTML
const zonaDado = document.getElementById("zonaDado"); // <div></div>
const boton = document.getElementById("boton"); // <a></a>

  const posicionesDado =  new Map([
    [1, "-10px -10px"],
    [2, "-430px -20px"],
    [3, "-880px -25px"],
    [4, "-1320px -25px"],
    [5, "-1730px -25px"],
    [6, "-2150px -25px"]
  ]);



// Botón para tirar el dado
boton.addEventListener("click", function (event) {
    // tirarDado();
    event.preventDefault();
    const resultado = dado.tirar();
    zonaDado.style.backgroundPosition = posicionesDado.get(resultado);
});