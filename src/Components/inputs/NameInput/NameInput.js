import React from "react";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@material-ui/core";
import "./NameInput.scss"
import {addUser} from "../../../store/Messages/messagesAction";


export const NameInput = () => {
    const dispatch = useDispatch()
    const [username,setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")

    const enterHandle = () => {
        dispatch(addUser({
            id: 7,
            user: name
        }))
    }
    return (
        <div className="nameInput">
            <TextField
                id="outlined-textarea"
                label="Enter your name"
                placeholder="Name"
                multiline
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" onClick={() => enterHandle()} color="primary">Enter</Button>
        </div>
    )
}
