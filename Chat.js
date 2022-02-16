import React, { useState } from "react";
import "./App.css";

function Chat({ socket }) {
  const [currentmsg, setcurrentmsg] = useState("");
  const [currentmsg1, setcurrentmsg1] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");
  const [username1, setUsername1] = useState("");

  const sendMessage = async (userId) => {
    if (currentmsg !== "") {
      const messageData = {
        user: username,
        message: currentmsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
          userId
      };
      setMessageList((list) => [...list, messageData]);
      setcurrentmsg("");
    }
  };

  const sendMessage1 = async (userId) => {
    if (currentmsg1 !== "") {
      const messageData1 = {
        user: username1,
        message: currentmsg1,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
          userId
      };
      setMessageList((list) => [...list, messageData1]);
      setcurrentmsg1("");
    }
  };

  return (
    <div className="head">
      <div className="Ananth">
        <input
          type="text2"
          placeholder="Name..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button>Enter</button>
        <div className="container">
          <div className="header">
            <h1>Ananth</h1>
            <p>chats</p>
          </div>
          <div className="body">
            {messageList.map((messageContent) => {
              return (
                <div className={messageContent.userId === 1 ? "message" : "message1"}>
                  <div>
                    <div className="message-det1">
                      <p>{messageContent.user}</p>
                    </div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-det">
                      <p>{messageContent.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <input
              type="text"
              value={currentmsg}
              placeholder="Enter Your Message"
              onChange={(event) => {
                setcurrentmsg(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage(1);
              }}
            />
            <button onClick={() => sendMessage(1)}>Send</button>
          </div>
        </div>
      </div>
      <div className="Karthick">
        <input
          type="text1"
          placeholder="Name..."
          onChange={(event) => {
            setUsername1(event.target.value);
          }}
        />
        <button type="enter">Enter</button>
        <div className="container1">
          <div className="header">
            <h1>Karthick</h1>
            <p>chats</p>
          </div>
          <div className="body">
            {messageList.map((messageContent) => {
              return (
                <div className={messageContent.userId === 2 ? "message" : "message1"}>
                  <div>
                    <div className="message-det3">
                      <p>{messageContent.user}</p>
                    </div>
                    <div className="message-content1">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-det2">
                      <p>{messageContent.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <input
              type="text"
              value={currentmsg1}
              placeholder="Enter Your Message"
              onChange={(event) => {
                setcurrentmsg1(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage1(2);
              }}
            />
            <button onClick={() => sendMessage1(2)}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;