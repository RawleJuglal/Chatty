import React,{useState} from 'react'
import { auth, db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import './SendMessage.css'

const SendMessage = ()=> {
    const [message, setMessage] = useState("");

    const sendMessage = async (event)=> {
        event.preventDefault();
        if(message.trim() === ''){
            alert("enter valid message");
            return;
        }

        const {uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text:message,
            name:displayName,
            avatar:photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage('');
        // scroll.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div id="--sendMessage-sendMessage-container">
            <form>
                <input 
                    type="text" 
                    value={message}
                    className="--sendMessage-input"
                    onChange = {(e)=> setMessage(e.target.value)} 
                />

                <button className="--sendMessage-submit" type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage