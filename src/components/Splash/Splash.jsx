import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
//ABOVE SHOULD BE REFACTORED DRY
import React from 'react'
import './Splash.css'
import GoogleBtn from '../../assets/google_signin_btn.png'
import Cowgirl from '../../assets/cowgirl.jpg'
import Harvest from '../../assets/harvest.jpg'
import Mechanic from '../../assets/mechanic.jpg'

export default function Splash(){
    //REFACTOR DRY
    const user = useAuthState(auth);
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const signOut = () => {
        auth.signOut();
    };
    //ABOVE REFACTOR DRY
    return(
        <section id="--splash-splash-container">
            <div id="flexed-ipad">
                <div id="--splash-lifestyle" className='flexed-right'>
                    <img className="--splash-img" src={Cowgirl} alt="cowgirl" />
                    <h1 id="--splash-lifestyle-title" className='--splash-title'>People who appreciate your lifestyle</h1>
                </div>
                <div id="--splash-harvest">
                    <img className="--splash-img" src={Harvest} alt="basket of vegetables" />
                    <h1 id="--splash-harvest-title" className='--splash-title'>Sell or trade directly</h1>
                </div>
                <div id="--splash-mechanic" className='flexed-right'>
                    <img className="--splash-img" src={Mechanic} alt="mechanic with oil stick" />
                    <h1 id="--splash-mechanic-title" className='--splash-title'>Questions about your tractor</h1>
                </div>
            </div>
            
            <p id="--splash-cta">Sign in with Google and start chatting with other farmers</p>
            <img 
                src={GoogleBtn} 
                alt="sign in with google" 
                className="--splash-btn-google" 
                onClick={googleSignIn}   
            />
        </section>
    )
}