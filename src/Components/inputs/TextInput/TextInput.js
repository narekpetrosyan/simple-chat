import React from 'react'
import "./TextInput.scss"
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

export const TextInput = ({setMessage,handleSend,message}) => {
    return (
        <>
            <TextField
                id="standard-text"
                label="Type the message"
                className="wrapText"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <Button variant="contained" color="primary" onClick={() => handleSend()}>
                <SendIcon/>
            </Button>
        </>
    )
}



