/*Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota 4; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.*/

class Persona{
    constructor(nombre){
    this.nombre = `su nombre es ${nombre}`
    }
    }
    
    class Alumno extends Persona{
    codigo;
    constructor(nota1,nota2,nota3,nota4,nombre){
    super(nombre)
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
    this.nota4 = nota4
    this.promedionota = this.promedio()
    this.aprobado = this.condicion()
    this.mochila = this.obsequio()
    }
    promedio = ()=> {
    let nota1 = this.nota1
    let nota2 = this.nota2
    let nota3 = this.nota3
    let nota4 = this.nota4
    
    let promedio =nota1*0.15 + nota2*0.20 + nota3*0.25 + nota4*0.40
    return promedio
    }
    condicion= ()=> {
    let promedio = this.promedio()
    
    if(promedio >= 12){
    return "aprobado"
    }else{
    return "desaprobado"
    }
    }
    obsequio=()=> {
    let nota = this.promedio()
    
    if(nota > 17){
    return "tienes una mochila "
    }else{
    return "no te ganaste la mochila"
    }
    }
    }
    document.getElementById("calcular").addEventListener("click",()=> {
    
    let nota1 = document.getElementById("nota1").value || 0
    let nota2 = document.getElementById("nota2").value || 0
    let nota3 = document.getElementById("nota3").value || 0
    let nota4 = document.getElementById("nota4").value || 0
    let nombre = document.getElementById("nombre").value || ""
    
    let carlos = new Alumno(nota1,nota2,nota3,nota4,nombre)
    
    alert(`${carlos.nombre} y su promedio es de ${carlos.promedionota}`)
    alert(`${carlos.nombre} y esta ${carlos.aprobado}`)
    alert(`${carlos.mochila}`)
    })