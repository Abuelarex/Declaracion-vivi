function showDeclaration() {
  const intro = document.getElementById("intro");
  const dec = document.getElementById("declaration");

  // animación de salida
  intro.classList.add("fade-out-up");

  setTimeout(() => {
    intro.classList.add("hidden");
    dec.classList.remove("hidden");
    dec.classList.add("zoom-in");
  }, 1000); // espera a que termine la animación de salida
}

function sayYes() {
  // Ocultar la declaración con animación
  const declarationDiv = document.getElementById("declaration");
  declarationDiv.classList.add("fade-out-up");

  setTimeout(() => {
    declarationDiv.classList.add("hidden"); // ya no se ve
  }, 1000); // coincide con la duración de la animación

  // Mostrar mensaje inicial de confirmación
  const msg = document.getElementById("final-message");
  msg.classList.remove("hidden");

  // Emojis de corazones
  const heartEmojis = ["💖","💕","💘","💗","❤️‍🔥","🫶"];

  // Loop infinito de corazones
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("hearts");

    // Elegir emoji random
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Posición horizontal aleatoria y siempre abajo
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px"; 

    // Tamaño aleatorio
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    // Eliminar corazón después de animación
    setTimeout(() => {
      heart.remove();
    }, 8000);

  }, 100); // cada 100ms aparece un nuevo corazón

  // Mostrar el div final romántico después de 3 segundos
  setTimeout(() => {
    const finalDiv = document.getElementById("final");
    finalDiv.classList.remove("hidden");
    finalDiv.classList.add("fade-zoom");
  }, 2000);
}

