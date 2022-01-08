import {crearTarea} from "./tareas.mjs"
import {GeneraJson} from "./load.mjs"
import {upload} from "./load.mjs"
import {replaceError} from "./load.mjs"

let descarga = document.getElementById("descargar")
let botonCrear = document.getElementById("agregar")
let tareaNueva = document.getElementById("nuevo")
let btnUpload = document.getElementById("formFile")
let btnVaciar= document.getElementById("vaciar");
btnVaciar.addEventListener("mouseover",()=>{
   
})

btnVaciar.addEventListener("click",()=>{
   tareaNueva.value="";
})

btnUpload.addEventListener('click',replaceError); 
btnUpload.addEventListener('change',upload)

botonCrear.addEventListener("click", ()=>{
   crearTarea(tareaNueva.value)
   tareaNueva.value=""
})

descarga.addEventListener("click",GeneraJson)

