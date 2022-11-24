window.onload = () => {
    inicio()
}

function inicio() {

    let boton = document.createElement("button")
    let div = document.getElementById("reg")
    div.appendChild(boton)
    boton.innerHTML = "registrar"

    boton.addEventListener("click", () => {
        let nombre = document.getElementById("user").value
        let contrasena = document.getElementById("pass").value
        let mail = document.getElementById("mail").value
        let usuario = new user(nombre, contrasena, mail)
        crearUser(usuario)
        location.href="login.html"
    })
}
function crearUser(user) {
    let jsonOBJ = JSON.stringify(user)
    let formulario = new FormData()
    formulario.append("json", jsonOBJ)
    fetch("./creadorJSON.php", {

        method: 'POST',

        headers: {



        },

        body: formulario

    }).then(respuesta => respuesta.text())

        
}