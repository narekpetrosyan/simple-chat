import React from "react";
import "./Message.scss"

export const MessageLeft = (props) => {
    return (
        <>
            <div className="messageRow">
                <div className="displayName">{props.displayName}</div>
                <div className="messageBlue">
                    <div>
                        <p className="messageContent">{props.message}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export const MessageRight = (props) => {
    return (
        <div className="messageRowRight">
            <p>{props.user}</p>
            <div className="messageOrange">
                <p className="messageContent">{props.message}</p>
                <div className="messageTimeStampRight">{props.timestamp}</div>
            </div>
        </div>
    );
};
