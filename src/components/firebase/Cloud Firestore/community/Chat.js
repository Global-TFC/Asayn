import React,{useState,useRef} from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import './Chat.css'

import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./ChatMessage";

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
      <>
      <div className="acadamy"></div>
      <div className="messagebody">
        <header className="header">
          <h1>Acadamy Name</h1>
        </header>
        <main>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </main>

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
      </div>
      </>
    );
}

export default Chat;
