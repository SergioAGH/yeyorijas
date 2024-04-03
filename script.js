const IDBReques = indexedDB.open("yeyodatos",1)

IDBReques.addEventListener("upgradeneeded",()=>{
    const db = IDBReques.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    });
})
IDBReques.addEventListener("success",()=>{
    console.log("todo salio correctamente");
})

IDBReques.addEventListener("error",()=>{
    console.log("ocurrio un error");
})

const addObjetos = objeto =>{
    const db = IDBReques.result;
    const IDBtransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto agregado")
    })
}
const leerObjetos = ()=>{
    const db = IDBReques.result;
    const IDBtransaction = db.transaction("nombres","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todo los datos fueron leidos")
    })
}
const modificarObjeto = (key,objeto) =>{
    const db = IDBReques.result;
    const IDBtransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto,key);
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto modificado")
    })
}    
const eliminarObjetos = key =>{
    const db = IDBReques.result;
    const IDBtransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto eliminado")
    })
}
