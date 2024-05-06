import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js';

const signupForm = document.querySelector('#signupform');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const passwordField = signupForm['passwordd'];
    const confirmPasswordField = signupForm['confirmpassword'];
    const emailField = signupForm['emaill'];

    const email = emailField.value;
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        showMessage("Las contraseñas no coinciden.", "error");
        return; // Detener la ejecución si las contraseñas no coinciden
    }

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        
        // Limpiar campos después de registrar al usuario
        emailField.value = "";
        passwordField.value = "";
        confirmPasswordField.value = "";

        // Auto iniciar sesión después de registrar al usuario
        await signInUser(email, password);
        
    } catch (error) {
        handleAuthError(error);
    }
});

export const signinForm = document.querySelector('#login-form');
signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signinForm['email'].value;
    const password = signinForm['password'].value;

    try {
        await signInUser(email, password);
    } catch (error) {
        handleAuthError(error);
    }
});

async function signInUser(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    
    // Redirigir a la página del menú después del inicio de sesión exitoso
    window.location.href = "menu.html";
    
}

export function handleAuthError(error) {
    if (error.code === "auth/email-already-in-use") {
        showMessage("El correo electrónico ya está en uso.", "error");
    } else if (error.code === "auth/invalid-email") {
        showMessage("Correo invalido, debe seguir el formato example@example.com", "error");
    } else if (error.code === "auth/weak-password") {
        showMessage("La contraseña debe tener al menos 6 caracteres", "error");
    } else if (error.code === "auth/invalid-credential") {
        showMessage("Contraseña o correo incorrecto, por favor intente de nuevo", "error");
    } else if(error.code === "auth/network-request-failed"){
        showMessage("Fallo al conectar, revise su conexion a internet", "error");
    } else if(error.code == "auth/too-many-requests"){
        showMessage("Has intentado ingresar muchas veces, por favor intentalo más tarde.")
    } else if(error.code === "auth/internal-error"){
        showMessage("Ha ocurrido una error al iniciar sesion con google, intente de nuevo por favor.", "e")
    }
    else { showMessage("Error desconocido al autenticar: " + error.message, "error"); }
}
