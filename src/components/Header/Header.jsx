import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header(){
    const user = useAuthState(auth);
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const signOut = () => {
        auth.signOut();
    };

    return(
        <header id="--header-header-container">
            <FontAwesomeIcon 
                className="--header-fa-tractor" 
                icon="fa-solid fa-tractor" 
            />

            <h1 id="--header-title">Farmer say</h1>
            <FontAwesomeIcon 
                className='--header-fa-google' 
                icon="fa-brands fa-google" 
                onClick={googleSignIn}
            />
        </header>
    )
}