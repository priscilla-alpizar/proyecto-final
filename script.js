function mostrarMas() {
    if (document.getElementById("textoOculto").classList.contains("ocultar"))
      document.getElementById("textoOculto").classList.remove("ocultar");
    else
      document.getElementById("textoOculto").classList.add("ocultar");
  }
  
  function mostrarFamilia() {
    document.getElementById("familia").classList.remove("ocultar");
    document.getElementById("hobbies").classList.add("ocultar");
    document.getElementById("paseos").classList.add("ocultar");
  }
  
  function mostrarHobbies() {
    document.getElementById("familia").classList.add("ocultar");
    document.getElementById("hobbies").classList.remove("ocultar");
    document.getElementById("paseos").classList.add("ocultar");
  }
  
  function mostrarPaseos() {
    document.getElementById("familia").classList.add("ocultar");
    document.getElementById("hobbies").classList.add("ocultar");
    document.getElementById("paseos").classList.remove("ocultar");
  }