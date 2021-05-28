import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Paper} from "@material-ui/core";
import "./ChatBox.scss"
import {TextInput} from "../inputs/TextInput/TextInput";
import socket from "../../services/socket/socket";
import {setMessages} from "../../store/Messages/messagesAction";
import {MessageRight,MessageLeft} from "../Message/Message";

export const ChatBox = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const messages = useSelector(state => state.messages.messages)
    const [message, setMessage] = useState("")

    useEffect(() => {
        socket.on('send_message', msg => {
            console.log(msg)
            dispatch(setMessages(msg))
        })
    }, [dispatch])

    const handleSend = () => {
        socket.emit('send_message', message, user);
        setMessage(" ")
    }

    return (
        <div className="container">
            <Paper className="messagesBody">
                <Paper id="style-1" className="messagesBody">
                    {messages && messages.map((ms,index) =>{
                        const user = JSON.parse(localStorage.getItem('user')).name
                        if (ms.name === user){
                            return <MessageRight
                                key={index}
                                message={ms.msg}
                                displayName={ms.name}
                            />
                        }else{
                            return <MessageLeft
                                key={index}
                                message={ms.msg}
                                displayName={ms.name}
                            />
                        }
                    })}

                    {/*<MessageLeft*/}
                    {/*    message="some message"*/}
                    {/*    timestamp="MM/DD 00:00"*/}
                    {/*    displayName="aaaa"*/}
                    {/*/>*/}
                    {/*<MessageRight*/}
                    {/*    message="bbbbbb"*/}
                    {/*    timestamp="MM/DD 00:00"*/}
                    {/*    displayName="bbbbb"*/}
                    {/*/>*/}
                </Paper>
                <TextInput setMessage={setMessage} message={message} handleSend={handleSend}/>
            </Paper>
        </div>
    );
}
