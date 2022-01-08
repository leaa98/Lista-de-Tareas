import {crearTarea} from './tareas.mjs'
let input;
let inputClon;

export async function GeneraJson(){ // se reunen todas las tareas cargadas en un arreglo y luego se pasa por argumento a download
   let tareas = document.getElementsByClassName("tarea"); 
   let texto =[];
   
  
   for (let i = 0; i < tareas.length; i++) {
     
      texto.push(tareas[i].value);
      
   }
   
  download('tareas',texto);
}

export default function download(filename, text) { //se convierte un arreglo a json y se descarga
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(text));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", filename + ".json");
    // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
 }

 export async function upload(evt){


    try{
       
    var file = evt.target.files[0]; // se lee el indice 0 ya que solo se admite un archivo
         var ext = /(.json)$/i
         if(!ext.exec(file.type)){ // si no se encuentra la extensión .json, el archivo no se sube
            throw new  Error 
         }else{
           
          readJson(file) 

         }
        
  
      
    }catch(err){
       alert("no se puede leer este tipo de archivo")
       
       document.getElementById("archivo").removeChild(input) // se borra el input original
      


       document.getElementById("archivo").appendChild(inputClon) //se lo reemplaza por el clon
      
       
    }

 
    
 }
 

export function replaceError(){ // Esta función elimina el archivo cargado en el input tipe files

  input = document.getElementById("files")
  inputClon = input.cloneNode(true) //se clona el nodo original antes de ser cargado para remplazarlo dada una condición definida en la función upload
  inputClon.addEventListener('click',replaceError);
  inputClon.addEventListener('change',upload,false)

}

async function readJson(json){
    
   try {
      
   
  var reader = new FileReader();

   reader.readAsText(json)

   reader.onload = function(){
      
     return JsonToArray(reader.result)

   }
} catch (error) {
      console.log(error)
}

}

async function JsonToArray(json){
   let array = JSON.parse(json) //se convierte el archivo json a un arreglo
   
    for (let i = 0; i < array.length; i++) {
     
       crearTarea(array[i]) //se muestran en pantalla las tareas guardades en el json
      
   }


}

