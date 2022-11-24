class persona {
    constructor(nombre) {

        this.nombre = nombre;
    }
}
class user extends persona {

    constructor(nombre, contrasena, mail) {
        super(nombre)
        this.contrasena = contrasena
        this.mail = mail
    }
    get() {
        return `Usuario ${this.nombre} con email ${this.mail} y contraseña ${this.contrasena}`
    }
    check(tryUser,tryPass) {
        console.log(tryUser,tryPass)
        if(tryUser==this.nombre && tryPass==this.contrasena) {
            return true
        }else{
            return false
        }
    }

}
class piloto extends persona {
    constructor(nombre, img) {
        super(nombre)
        this.img = img
    }
}
class equipo {
    constructor(nombre, img) {
        this.nombre = nombre
        this.img = img
    }
}
class circuito {
    constructor(nombre, img) {
        this.nombre = nombre
        this.img = img
    }
}