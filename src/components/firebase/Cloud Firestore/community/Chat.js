import React, { useState, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import "./Chat.css";
import styled from "styled-components";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import BackButten from "../../../includes/back butten/BackButten";




const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Chat() {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
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
        <ChatNav>
          {/* <BackButten /> */}
          <ChatName href="#home">Community Name</ChatName>
        </ChatNav>
        <Body>
          <main>
            {messages &&
              messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>
          </main>

          <TypeTab>
            <form onSubmit={sendMessage}>
              <div className="input-bg">
                <textarea
                  className="input"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Message"
                />

                <label class="custom-file-upload">
                  <input type="file" />
                  📁
                </label>

                <button className="textarea-btn" type="submit" disabled={!formValue}>
                  🕊️
                </button>
              </div>
            </form>
          </TypeTab>
        </Body>
    </>
  );
}

const TypeTab = styled.div`
  position: fixed;
  bottom: 10px;
  width: 480px;
  @media (max-width: 768px) {
    bottom: 10px;
    max-width:768px ;
    width: 120%;
    left: 20px;
  }
`;
const ChatNav = styled.h4`
  border-radius: 10px;
  position: fixed;
  top: 0;
  z-index: 10;
  margin-top: 13px;
`;
const Body = styled.div`
  max-width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ChatName = styled.span`
  font-family: "Courier New", Courier, monospace;
`;

export default Chat;
