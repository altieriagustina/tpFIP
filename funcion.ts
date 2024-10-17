import * as rs from "readline-sync"

let primerNro: number = rs.questionInt(`Ingrese el primer número: `)
let segundoNro: number = rs.questionInt(`Ingrese el segundo número: `)

let sumarNumeros = (nro1: number, nro2: number): number => {
    let resultado: number = nro1 + nro2
    return resultado
}

console.log(`El resultado de la suma de ${primerNro} + ${segundoNro} es: ${sumarNumeros(primerNro, segundoNro)}`)