window.onload = () => {
    cargarDatos(sessionStorage.getItem("usuario"))
    setInterval(hora,1000)
}
function cargarDatos(name) {
    fetch("./cuentas.json")
        .then(response => response.json())
        .then(datos => {
            let arrayCuentas = new Array()
            let valores = datos.cuentas

            valores.forEach(element => {
                let cuenta = new user(element.nombre, element.contrasena, element.mail)

                arrayCuentas.push(cuenta)
            });

            mostrarDatos(arrayCuentas, name)
        })
}
function mostrarDatos(arr,name){
    let div = document.getElementById("user")
    let divC = document.getElementById("cabecera")
    let nombre = document.createElement("h1")
    
    nombre.innerHTML=name
    divC.appendChild(nombre)
    arr.forEach(element => {
        if (element.nombre==name) {
            let texto = document.createElement("p")
            let txt = element.get()
            texto.innerHTML=txt
            div.appendChild(texto)
        }
    });
}
function hora() {
    let div = document.getElementById("hora")
    div.innerHTML=""
    let hora = document.createElement("p")
    hora.innerHTML=""
    let horaI=sessionStorage.getItem("hora_inicio")
    let today = new Date();
    let horaAc = today.toLocaleTimeString("en-US")
    hora.innerHTML="Hora actual "+horaAc
    div.appendChild(hora)
}