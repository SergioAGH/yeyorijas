const indexedDb = window.indexedDB;
let db;
const conexion = indexedDb.open("listaDeTareas",1);
conexion.onsuccess = ()=>{
    db = conexion.result;
    console.log("base abierta", db);
}
conexion.onupgradeneeded = (e)=>{
    db = e.target.result;
    console.log("baseCreada", db);
    const coleccionObjetos = db.createObjectStore("tareas",{keyPath: "clave"});
} 
conexion.onerror = (error)=>{
    console.log("error", error);
}
const agregar = (info)=>{
    const transaccion = db.transaction(["tareas"],"readwrite");
    const colecionObjetos = transaccion.objectStore("tareas");
    const conexion = colecionObjetos.add(data)
    consultar()
}
const obtener = ()=>{
    
}
const actualizar = ()=>{
    
}
const eliminar = ()=>{
    
}
const consultar = ()=>{
    const transaccion = db.transaction(["tareas"],"readonly");
    const colecionObjetos = transaccion.objectStore("tareas");
    const conexion = colecionObjetos.openCursor()
    
    conexion.onsuccess = (e)=>{
        const cursor = e.target.result
        if(cursor){
            console.log("listaDeTreas")
            console.log(cursor.value)
        }else{
            console.log("no hay tareas en la lista")
        }
    }
}
