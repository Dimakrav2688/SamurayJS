/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function add (a: number, b: number): number {
    return a + b
}
//указываем входящие параметры указываем через : какой тип данных должен быть. и какой тип должна возвращать функция. 

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}
// так как мы указали и входящий параметр и выдачу с функции то при заполнении ретурна ВС код даже будет подсказывать
// доступные функции для стринга.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Можно создавать функцию с разными параметрами и значениями и варианты её вызова:
interface MyPosition {
    x: number | undefined
    y: number | undefined
}
interface MyPositionWithDefault extends MyPosition {
    default: string
} //extends унаследование логики MyPosition 

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition


function position (a?: number, b?: number) {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    } 
    if( a && !b) {
        return {x:a, y: undefined, default: a.toString}
    }
    return {x: a, y: b}
    }
// создали логику использования функции позицион и далее её используем =>
console.log('Empty: ', position())
console.log('One param: ', position(a: 42))
console.log('Two params: ', position(a:10, b:15))
