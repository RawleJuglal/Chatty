import React from 'react';
import './Messages.css';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import PlaceHolderPic from '../../assets/placeholder-pic.png'

export default function Messages({message}){
    const [user] = useAuthState(auth)

    return(
        <div id="--messages-messages-container">
            <div className={`--message-single-user ${message.uid === user.uid ? `--messages-single-message-user` : ``}`}>
                <div id="--messages-image-container">
                    <img className="--messages-img" src={message.avatar} alt="user avatar" />
                </div>
                <div id="--messages-info-container" className='--friends-speech'>
                    <h1 className='--message-author'>{message.name}</h1>
                    <p className='--message-text'>{message.text}</p>
                    <p className='--message-time'>19:47</p>
                </div>
            </div>
            <div className='--messages-single-message --messages-single-message-user'>
                <div id="--messages-image-container" className=' --messages-image-container-user'>
                    <img className="--messages-img" src={PlaceHolderPic} alt="picture that must be changed" />
                </div>
                <div id="--messages-info-container" className='--users-speech'>
                    <h1 className='--message-author'>Authors Name</h1>
                    <p className='--message-text'>Lorem ipsum and a little bit more than that</p>
                    <p className='--message-time'>19:47</p>
                </div>
            </div>
        </div>
    )
}