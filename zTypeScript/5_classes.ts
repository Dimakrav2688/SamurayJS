class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
}
//readonly данные переменные не будет переписыватся. Но в конструкторе readonly можем перезаписать если это нужно.
// можем записать пример более лаконично 
//class Car {
//    readonly nymberOfWheels: numver = 4
//    constructor(readonly model: string) {}
//}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Модификаторы

class Animal {
    protected voice: string =''
    public color: string = 'black'
    private go() {
        console.log("Go")
    }
}