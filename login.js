
window.onload = () => {

    if (sessionStorage.getItem("usuario") != "" && sessionStorage.getItem("usuario") != null) {
        console.log(sessionStorage.getItem("usuario"))
        location.href = "index.html"
        login()
    } else {
        login()
    }
}
function login() {
    let form = document.getElementById("reg")
    let boton = document.createElement("button")
    let nombre = document.createElement("input")
    let mail = document.createElement("input")
    let contrasena = document.createElement("input")
    let divCabecera = document.getElementById("cabecera")
    let titulo = document.createElement("h1")
    let divReg = document.getElementById("registrar")
    let registro = document.createElement("a")
    registro.innerHTML = "registro"
    registro.href = "register.html"
    titulo.innerHTML = "Login"

    boton.innerHTML = "Logear"
    nombre.setAttribute("type", "text")
    nombre.setAttribute("required", true)
    nombre.setAttribute("placeholder", "Introduzca su nombre")
    mail.setAttribute("type", "mail")
    mail.setAttribute("required", true)
    mail.setAttribute("placeholder", "Introduzca su mail")
    contrasena.setAttribute("type", "password")
    contrasena.setAttribute("required", true)
    contrasena.setAttribute("placeholder", "Introduzca su contraseña")

    form.appendChild(nombre)
    // form.appendChild(mail)
    form.appendChild(contrasena)
    divReg.appendChild(boton)
    divReg.appendChild(registro)

    divCabecera.appendChild(titulo)



    boton.addEventListener("click", () => {
        cargarDatos(nombre.value, contrasena.value)
    })
}
function crearusr(user) {
    sessionStorage.setItem("usuario", user)
    location.href = "index.html"
    var today = new Date();

    // obtener la hora en la configuración regional de EE. UU.
  
    sessionStorage.setItem("hora_inicio",today)
}
function cargarDatos(name, pass) {
    fetch("./cuentas.json")
        .then(response => response.json())
        .then(datos => {
            let arrayCuentas = new Array()
            let valores = datos.cuentas

            valores.forEach(element => {
                let cuenta = new user(element.nombre, element.contrasena, element.mail)

                arrayCuentas.push(cuenta)
            });

            checkDatos(arrayCuentas, name, pass)
        })
}
function checkDatos(data, nombre, contrasena) {
    console.log(data)
    data.forEach(element => {
        console.log("algo")
        if (element.check(nombre, contrasena)) {
            crearusr(nombre)
        }
    });
}