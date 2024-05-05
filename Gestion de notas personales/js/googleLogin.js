import { GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
import { handleAuthError } from "./registro2.js";


const googleButton = document.querySelector('#googleButton');
googleButton.addEventListener('click', async () =>{
    const provedor = new GoogleAuthProvider();

    try{
        const cred = await signInWithPopup(auth, provedor);
        
        showMessage('Bienvenido '+ cred.user.displayname, 'success');
        window.location.href = "menu.html";

    } catch (error){
        handleAuthError(error);
    }
})