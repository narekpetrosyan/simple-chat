import React, {useEffect} from "react";
import {ChatBox} from "../../Components/ChatBox/ChatBox";
import socket from "../../services/socket/socket";
import {useSelector} from "react-redux";

export const Chat = () => {
    const user = useSelector(state => state.auth.user)

    return (
        <ChatBox/>
    );
}
