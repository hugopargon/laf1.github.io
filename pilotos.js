
window.onload = () => {
    inicio() // carga el dom

    // if que controla si se han cargado en el local storage los datos
    if (localStorage.getItem("equipos") && localStorage.getItem("pilotos") && localStorage.getItem("circuitos")) {
        console.log("cargados")
    } else {
        console.log("se llama al fetch")
        fetches()
    }
}

function fetches() {
    // fetch de equipos
    fetch("https://v1.formula-1.api-sports.io/rankings/teams?season=2022", {
        "method": "GET",
        "headers": {
            "x-apisports-key": "f5aa5f56382f53420ebdf782622d2018",
        }
    })
        .then(response => response.json())
        .then(response => {
            let jso = JSON.stringify(response)
            localStorage.setItem("equipos", jso)
        }
        )

    // fetch de pilotos
    fetch("https://v1.formula-1.api-sports.io/rankings/drivers?season=2022", {
        "method": "GET",
        "headers": {
            "x-apisports-key": "f5aa5f56382f53420ebdf782622d2018",
        }
    })
        .then(response => response.json())
        .then(response => {
            let jso = JSON.stringify(response)
            localStorage.setItem("pilotos", jso)
        })
    // fetch de circuitos
    fetch("https://v1.formula-1.api-sports.io/races?season=2022", {
        "method": "GET",
        "headers": {
            "x-apisports-key": "f5aa5f56382f53420ebdf782622d2018",

        }
    })

        .then(response => response.json())
        .then(response => {
            let jso = JSON.stringify(response)
            localStorage.setItem("circuitos", jso)
        })
}
function inicio() {
    let boton1 = document.createElement("li")
    let boton2 = document.createElement("li")
    let boton3 = document.createElement("li")
    let boton4 = document.createElement("button")
    let nombre = document.createElement("li")
    let list = document.createElement("ul")
    let div = document.getElementById("botones")

    boton1.innerHTML = "Pilotos"
    boton2.innerHTML = "Circuitos"
    boton3.innerHTML = "Equipos"
    boton4.innerHTML = "Cerra sesiòn"
    nombre.innerHTML = sessionStorage.getItem("usuario")

    boton1.setAttribute("class", "nav-link")
    boton2.setAttribute("class", "nav-link")
    boton3.setAttribute("class", "nav-link")
    nombre.setAttribute("class", "nav-link")
    list.setAttribute("class", "nav justify-content-center nav-tabs ")


    boton1.addEventListener("click", pilotos)
    boton2.addEventListener("click", circuitos)
    boton3.addEventListener("click", equipos)
    boton4.addEventListener("click", () => {
        if (sessionStorage.getItem("usuario")) {
            sessionStorage.removeItem("usuario")
            location.href = "login.html"

        }
    })
    nombre.addEventListener("click", () => window.open("usuario.html"))


    list.appendChild(boton1)
    list.appendChild(boton2)
    list.appendChild(boton3)
    list.appendChild(nombre)
    list.appendChild(boton4)
    div.appendChild(list)
}

function equipos() {
    if (document.querySelector('#equipos')) {
        document.querySelector('#equipos').remove();
    }
    let div = document.createElement("div")
    div.id = "equipos"
    div.setAttribute("class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3")

    let seccion = document.getElementById("datos")
    seccion.innerHTML = ""
    seccion.appendChild(div)
    let txtdatos = localStorage.getItem("equipos")
    let datos = JSON.parse(txtdatos)

    datos.response.forEach(element => {
        let div3 = document.createElement("div")
        div3.setAttribute("class", "col")
        let equipo = element.team
        let div1 = document.createElement("div")
        div1.setAttribute("class", "card")
        div1.style = "width: 30rem;"
        let div2 = document.createElement("div")
        div2.setAttribute("class", "card-body")
        let img = document.createElement("img")
        let nombre = document.createElement("h4")
        img.setAttribute("src", equipo.logo)
        img.style.width = 100 + "%"
        img.style.height = 100 + "%"
        img.setAttribute("class", "card-img-top")
        nombre.innerHTML = equipo.name
        nombre.setAttribute("class", "card-title")
        div2.appendChild(nombre)
        div1.appendChild(img)
        div1.appendChild(div2)
        div3.appendChild(div1)
        div.appendChild(div3)
        img.addEventListener("click", () => {
            ifr(equipo.name)
        })

    });
}
function pilotos() {
    if (document.querySelector('#pilotos')) {
        document.querySelector('#pilotos').remove();
    }
    let div = document.createElement("div")
    div.id = "pilotos"
    div.setAttribute("class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3")
    let seccion = document.getElementById("datos")
    seccion.innerHTML = ""
    seccion.appendChild(div)
    let txtdatos = localStorage.getItem("pilotos")
    let datos = JSON.parse(txtdatos)
    datos.response.forEach(element => {
        let div3 = document.createElement("div")
        div3.setAttribute("class", "col")
        let div1 = document.createElement("div")
        div1.setAttribute("class", "card")
        div1.style = "width: 30rem;"
        let div2 = document.createElement("div")
        div2.setAttribute("class", "card-body")
        let piloto = element.driver
        let img = document.createElement("img")
        let nombre = document.createElement("h4")
        img.setAttribute("src", piloto.image)
        img.style.width = 100 + "%"
        img.style.height = 100 + "%"
        img.setAttribute("class", "card-img-top")
        nombre.innerHTML = piloto.name
        nombre.setAttribute("class", "card-title")
        div2.appendChild(nombre)
        div1.appendChild(img)
        div1.appendChild(div2)
        div3.appendChild(div1)
        div.appendChild(div3)
        img.addEventListener("click", () => {
            ifr(piloto.name)
        })


    })
}
function circuitos() {
    if (document.querySelector('#circuitos')) {
        document.querySelector('#circuitos').remove();
    }
    let div = document.createElement("div")
    div.id = "circuitos"
    div.setAttribute("class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3")

    let seccion = document.getElementById("datos")
    seccion.innerHTML = ""
    seccion.appendChild(div)
    let txt = localStorage.getItem("circuitos")
    let datos = JSON.parse(txt)

    datos.response.forEach(element => {
        let div3 = document.createElement("div")
        div3.setAttribute("class", "col")
        let a = element.type
        if (a == "Race") {
            let circuito = element.circuit
            let div1 = document.createElement("div")
            div1.setAttribute("class", "card")
            div1.style = "width: 30rem;"
            let div2 = document.createElement("div")
            div2.setAttribute("class", "card-body")
            let img = document.createElement("img")
            let nombre = document.createElement("h4")
            img.setAttribute("src", circuito.image)
            img.setAttribute("class", "card-img-top")
            img.style.width = 100 + "%"
            img.style.height = 100 + "%"
            nombre.innerHTML = circuito.name
            nombre.setAttribute("class", "card-title")
            div2.appendChild(nombre)
            div1.appendChild(img)
            div1.appendChild(div2)
            div3.appendChild(div1)
            div.appendChild(div3)
            img.addEventListener("click", () => {
                ifr(circuito.name)
            })
        }
    });
}
function ifr(nombre) {
    let fram = document.getElementById("frame")
    fram.innerHTML = ""
    let iframe = document.createElement("iframe")
    iframe.style.width = 100 + "%"
    iframe.style.height = 600 + "px"
    iframe.src = "https://es.wikipedia.org/wiki/" + nombre
    fram.appendChild(iframe)
}