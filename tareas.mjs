let list = document.getElementById("todo-list")

export function crearTarea(texto){

   if(!notNull(texto)){

   

   let flag = true;
   let div = document.createElement("div")
   let text = document.createElement("input")
   text.disabled = flag
   let botonEditar = crearElemento("button","🔒","botones","botonEditar","Editar Tarea")
   let botonBorrar = crearElemento("button","🗑","botones","botonBorrar","Borrar Tarea")

   botonEditar.addEventListener("click",()=>{
      if(flag===true){
         botonEditar.textContent="🔓"
      }else{
         botonEditar.textContent="🔒"
      }
      flag = !flag
      text.disabled = flag
      
   })

   botonBorrar.addEventListener("click",()=>{
     let opc=confirm("¿Está seguro?")
     if(opc)
      list.removeChild(div)
   })

   text.value = texto
   text.className="tarea"
   div.appendChild(text)
   div.appendChild(botonEditar)
   div.appendChild(botonBorrar)
   list.appendChild(div)
}else{
    alert("El cuadro no puede estar en blanco")  
}
   
}

function crearElemento(elemento,text,clase,id,title){
   let element = document.createElement(elemento);
   
   element.textContent = text;
   
   if(clase!=undefined){
      element.className=clase
   }

   if(id!=undefined){
      element.id=id;
   }

   if(title!=undefined){
      element.title=title
   }

   return element;

}

function notNull(text){
   let re = /(?<!.)\s+(?!.)/
   return text==="" || re.test(text)
}






