const indexedDb = window.indexedDB;
let db;
const conexion = indexedDb.open("listaDeTreas",1);
conexion.onsuccess = ()=>{
    db = conexion.result;
    console.log("base abierta", db);
}
conexion.onupgradeneeded = (e)=>{
    db.result;
    console.log("baseCreada", db);
    const coleccionObjetos = db.createObjectStore("tareas",{keyPath: "clave"});
} 
conexion.onerror = (error)=>{
    console.log("error", error);
}
