import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/Auth/autchAction";
import {Button, Grid, Paper, TextField} from "@material-ui/core";

export const Login = () => {
    const dispatch = useDispatch()
    const [fields, setFields] = useState({
        email: "",
        password: ""
    })

    const handleLogin = () => {
        dispatch(loginUser(fields))
    }

    return (
        <div style={{padding: 30}}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField value={fields.email} label="Email"
                                   onChange={(e) => setFields({...fields,email: e.target.value})}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={fields.password} label="Password" type={'password'}
                                   onChange={(e) => setFields({...fields,password: e.target.value})}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth
                                onClick={() => handleLogin()}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
