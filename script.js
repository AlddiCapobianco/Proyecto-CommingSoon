function validarEmail() {
  let email = document.querySelector("#email").value;
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expReg.test(email)){
     alert("La dirección de email es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }