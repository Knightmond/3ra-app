import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export function firebaseConfig() {
    const initKeys = {
        apiKey: "AIzaSyDM5-w40c2mVQaHaCke2I2k30lDc2rwA90",
        authDomain: "tercera-app-db.firebaseapp.com",
        projectId: "tercera-app-db",
        storageBucket: "tercera-app-db.appspot.com",
        messagingSenderId: "565789686310",
        appId: "1:565789686310:web:5517b56798c6d9113204e7"
    };

    const app = initializeApp(initKeys);
    const analytics = getAnalytics(app);
}

export function fbRegistrarUsuario(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(keys => {

    })
}

export async function fbLogin(email, password) {
    try {
        let keys = await signInWithEmailAndPassword(getAuth(), email, password)
    } catch (e) {
        return false;
    }
    return true;
}

export async function fbBuscar(targetCollection) {
    let lista = [];
    let query = collection(getFirestore(), targetCollection);
    let resultado = await getDocs(query);
    resultado.forEach(documento => {
        let objeto = documento.data();
        objeto.id = documento.id;
        lista.push(objeto);
    });
    return lista;
}

export function fbCrear(coleccion, objeto) {
    objeto.id = uuidv4();
    let referencia = doc(getFirestore(), coleccion, objeto.id);
    setDoc(referencia, objeto);
}

export async function fbEliminar(coleccion, id) {
    await deleteDoc(doc(getFirestore(), coleccion, id));
}