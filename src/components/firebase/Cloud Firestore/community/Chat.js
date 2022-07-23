import React, { useState, useRef } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import './Chat.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from "styled-components";

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
    <Container fluid>
      <Row>
        <Col md="4" className="acadamy">
          <ListGroup as="ol" numbered>
          {Array.from({ length: 15 }).map((_, idx) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          ))}
          </ListGroup>
        </Col>
        <Col>
          <ChatNav  >
            <ChatName href="#home">Chat Name</ChatName>
          </ChatNav>
          <div >

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
          </div>
        </Col>
      </Row>


    </Container>
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

const ChatName = styled.span``
const BarEnd = styled.span`
  color: black;
`

export default Chat;
