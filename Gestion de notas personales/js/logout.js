import { signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { auth } from './firebase.js';

const logout = document.querySelector('#logoutButton');
logout.addEventListener('click', async () =>{
   await signOut(auth);
});