function inversion() {
    //CAPTURAMOS LOS ELEMENTOS DE HTML QUE SE VAN A UTILIZAR
    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("monto").value;
    const cTiempo = document.getElementById("tiempo").value;


    let cMontos=parseInt(cMonto)

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show");
    const showEmail = document.getElementById("email-show");
    const showTiempo = document.getElementById("tiempo-show");
    const showInteres = document.getElementById("interes-show");
    const showGanancia = document.getElementById("ganancia-show");
    const showTotal = document.getElementById("total-show");

   

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;

    switch (cTiempo) {
        case "1":
            showTiempo.innerText = "12 Meses";
            showInteres.innerText = "0.8%";
            showGanancia.innerText = 0.008 * 12 * cMontos;
            showTotal.innerText =  0.008 * 12 * cMontos + cMontos; 

            break;
        case "2":
            showTiempo.innerText = "24 Meses";
            showInteres.innerText = "1.3%";
            showGanancia.innerText = 0.013 * 24 * cMontos;
            showTotal.innerText = 0.013 * 24 * cMontos + cMontos;

            break;
        case "3":
            showTiempo.innerText = "36 Meses"
            showInteres.innerText = "1.7%"
            showGanancia.innerText = 0.017 * 36 * cMontos;
            showTotal.innerText = 0.017 * 36 * cMontos + cMontos;
            break;

        default:
            break;
    }
}