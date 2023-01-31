import React, {useEffect, useRef, useState } from 'react';
import {
    query, collection, orderBy, onSnapshot, limit, QuerySnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';
import './Chat.css'
import Messages from '../Messages/Messages'
import SendMessage from '../SendMessage/SendMessage'

export default function Chat(){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
            let messages = [];
            QuerySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        });
        return ()=> unsubscribe;
    },[])

    return(
        <section id="--chat-chat-container">
            {messages?.map((message)=>(
                <Messages key={message.id} message={message} />
            ))}
            
            <SendMessage />
        </section>
    )
}