


function reg(){
    const nc = document.getElementById("txt1").value;
    const cl = document.getElementById("txt2").value;
    const no = document.getElementById("txt3").value;
    const cd = document.getElementById("txt4").value;
    const ar = document.getElementById("txt5").value;
    const fecha = new Date().toLocaleDateString();
    let data = {
        fc:fecha,nc:nc,cl:cl,no:no,cd:cd,ar:ar
    }
    document.getElementById("txtt").value="";
    const cam = Object.values(data).includes("");
    if (cam == false) {
        agregar(data);
    } else {
        alert("CAMPOS BASIOS");
    }
    document.getElementById("txt1").value="";
    document.getElementById("txt2").value="";
    document.getElementById("txt3").value="";
    document.getElementById("txt4").value="";
    document.getElementById("txt5").value="";
    }
const indexedDb = window.indexedDB;
let db;
const conexion = indexedDb.open("baseYeyo",1);
conexion.onsuccess = ()=>{
    db = conexion.result;
    console.log("base abierta", db);
}
conexion.onupgradeneeded = (e)=>{
    db = e.target.result;
    console.log("baseCreada", db);
    const coleccionObjetos = db.createObjectStore("reg",{keyPath: "nc"});
    coleccionObjetos.createIndex("buscar","fc",{unique:false});
  
} 
conexion.onerror = (error)=>{
    console.log("error", error);
}
const agregar = (data)=>{
    const transaccion = db.transaction(["reg"],"readwrite");
    const colecionObjetos = transaccion.objectStore("reg");
    const conexion = colecionObjetos.add(data);

    consultar()
}
const obtener = ()=>{
    
}
const actualizar = ()=>{
    
}
const eliminar = ()=>{
    
}
const consultar = ()=>{
    const transaccion = db.transaction(["reg"],"readonly");
    const colecionObjetos = transaccion.objectStore("reg");
    const conexion = colecionObjetos.openCursor()
    
    conexion.onsuccess = (e)=>{
      const cursor = e.target.result
        if(cursor){
            document.getElementById("txtt").value+=cursor.value.fc+" "+cursor.value.nc+" "+cursor.value.cl+" "+
            cursor.value.no+" "+cursor.value.cd+" "+cursor.value.ar+"\n"; 
            cursor.continue();
        }else{
            console.log("no hay tareas en la lista")
        }
    }
}
