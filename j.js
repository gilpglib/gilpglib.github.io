document.write(/* html */
  `<meta name="viewport"
  content="width=device-width,
     initial-scale=1.0">
  <link rel="icon" sizes="32x32"
    href="https://gilpglib.github.io/favicon.ico">
  <style>
    h1, label, .salida {font-family: sans-serif}
  </style>
  <h1></h1><pre></pre>`);

/** Asigna un título a la página.
 * @param {string} txt texto del título. */
function title(txt) {
  document.title = txt;
  let h1 = document.querySelector("h1");
  h1.textContent = txt;
}

/** Muestra un texto sin hacer salto de línea.
 * @param {string} txt texto que se muestra. */
function print(txt) {
  let pre = document.querySelector("pre");
  pre.append(txt);
}

/** Muestra un texto y luego hace salto de línea.
 * @param {string} txt texto que se muestra. */
function println(txt) {
  let pre = document.querySelector("pre");
  pre.append(txt + "\n");
}

/** Crea un sprite en las coordenadas, tamaño
 * y texto indicados.
 * @param {number} x coordenada x en pixeles.
 * @param {number} y coordenada y en pixeles.
 * @param {number} fontSize tamaño en pixeles.
 * @param {string} txt texto del sprite.
 * @returns {HTMLOutputElement} el sprite. */
function sprite(x, y, fontSize, txt) {
  let output = document.createElement("output");
  output.style.position = "fixed";
  output.style.top = `${y}px`;
  output.style.left = `${x}px`;
  output.style.fontSize = `${fontSize}px`;
  output.value = txt;
  document.body.append(output);
  return output;
}

/** Mueve un sprite a las coordenadas indicadas.
 * @param {number} x coordenada x en pixeles.
 * @param {number} y coordenada y en pixeles.
 * @param {HTMLElement} sprite */
function mueve(x, y, sprite) {
  sprite.style.top = `${y}px`;
  sprite.style.left = `${x}px`;
}

/** Asigna la imagen de fondo de la página.
 * @param {string} url url de la imagen. */
function fondo(url) {
  document.head.innerHTML += /* html */
    `<style>
      html {
        background-image: url(${url});
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-attachment: fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
    </style>`;
}

/** Asigna el color de letra de la página.
 * @param {string} col color. */
function color(col) {
  document.documentElement.style.color = col;
}

/** Asigna el color de fondo de la página.
 * @param {string} col color. */
function backgroundColor(col) {
  document.documentElement.style.backgroundColor += col;
}

/** Agrega un botón con un rótulo, y el código que ejecuta al hacerle clic,
 * @param {string} txt texto del rótulo.
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} fun código
 *   que se ejecuta al hacer clic. */
function botón(txt, fun) {
  let bot = document.createElement("button");
  bot.textContent = txt;
  bot.addEventListener("click", fun);
  let pre = document.querySelector("pre");
  pre.append(bot);
}

/** Agrega un botón en las coordenadas indicadas, con un rótulo y el código
 * que ejecuta al hacerle clic.
 * @param {number} x coordenada x en pixeles.
 * @param {number} y coordenada y en pixeles.
 * @param {string} txt texto del rótulo.
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} fun código
 *   que se ejecuta al hacer clic. */
function pegaBotón(x, y, txt, fun) {
  let bot = document.createElement("button");
  bot.style.position = "fixed";
  bot.style.top = `${y}px`;
  bot.style.left = `${x}px`;
  bot.textContent = txt;
  bot.addEventListener("click", fun);
  document.body.append(bot);
}

/** Devuelve un número aleatorio entre el valor menor y el valor mayor.
 * @param {number} menor el menor valor que se puede generar
 * @param {number} mayor el mayor valor que se puede generar
 * @returns {number} un número aleatorio entre menor y mayor. */
function random(menor, mayor) {
  /* Math.floor(x): elimina los decimales. */
  menor = Math.floor(menor);
  mayor = Math.floor(mayor);
  /* Math.random(): genera un número aleatorio >= 0 y < 1. */
  return menor + Math.floor(Math.random() * (mayor - menor + 1));
}

/** Devuelve true si 2 sprites se tocan.
 * @param {HTMLElement} e1
 * @param {HTMLElement} e2
 * @returns {boolean} true si los elementos se tocan. */
function seTocan(e1, e2) {
  const rE1 = e1.getBoundingClientRect();
  const rE2 = e2.getBoundingClientRect();
  return (rE1.right >= rE2.left &&
    rE1.left <= rE2.right &&
    rE1.top <= rE2.bottom &&
    rE1.bottom >= rE2.top);
}

/** Agrega un input con una etiqueta.
 * @param {string} txt texto del rótulo. */
function campo(txt) {
  let label = document.createElement("label");
  label.append(txt);
  label.append(document.createElement("br"));
  let input = document.createElement("input");
  let pre = document.querySelector("pre");
  label.append(input);
  pre.append(label);
  return input;
}

/** Agrega un output. */
function salida() {
  let output = document.createElement("output");
  output.classList.add("salida");
  let pre = document.querySelector("pre");
  pre.append(output);
  return output;
}