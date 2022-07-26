import React, { useState, useRef } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import './Chat.css'
import styled from "styled-components";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./ChatMessage";

import Groups from "./Groups";

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Chat() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
       <div >
       
          <ChatNav  >
            <ChatName href="#home">Chat Name</ChatName>
          </ChatNav>
        <Groups />
          <Body>
            <main>
              {messages &&
                messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

              <span ref={dummy}></span>
            </main>

            <TypeTab>
              <form onSubmit={sendMessage}>
                <input className="input"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Message"
                />

                <button className="btn" type="submit" disabled={!formValue}>
                  🕊️
                </button>
              </form>
            </TypeTab>
            </Body>
          </div>
        
  );
}

const TypeTab = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`
const ChatNav = styled.h4`
  background-color: #8b8b8b;
`
const Body = styled.div`
  width: 95%;
  
`

const ChatName = styled.span``
const BarEnd = styled.span`
  color: black;
`

export default Chat;
