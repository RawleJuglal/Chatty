import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
//ABOVE SHOULD BE REFACTORED DRY
import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header(){
    //REFACTOR DRY
    const [user] = useAuthState(auth);
    console.log(user)
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const signOut = () => {
        console.log('calling sign out')
        console.log(auth);
        auth.signOut();
    };
    //ABOVE REFACTOR DRY
    return(
        <header id="--header-header-container">
            <FontAwesomeIcon 
                className="--header-fa-tractor" 
                icon="fa-solid fa-tractor" 
            />

            <h1 id="--header-title">Farmer say</h1>
            {user ?
            (   
                <div id="--header-sign-out-container"><FontAwesomeIcon icon="fa-solid fa-door-open" onClick={signOut} className="--header-sign-out"/><span id="--header-sign-out-text">Sign Out</span></div>
            ):(
                <FontAwesomeIcon 
                    className='--header-fa-google' 
                    icon="fa-brands fa-google" 
                    onClick={googleSignIn}
                />
            )}
            
        </header>
    )
}