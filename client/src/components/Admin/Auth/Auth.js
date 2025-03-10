import { Avatar, Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from './stylesa'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {signup,signin} from '../../../actions/auth'
import { useNavigate, Link } from 'react-router-dom'


const Auth = () => {
    const classes = useStyles()
    const [isSignup, setSignup] = useState(true)
    const [authData, setauthData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' })

    const dispatch = useDispatch()

    const history = useNavigate()

    const checkvalid = () =>{
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;    
        const rval = regexExp.test(authData.email); 
        if (authData.confirmPassword !== authData.password) {
            return false
        } 
        else if( rval === false ){
            return false
        }
        else if(authData.password.length < 8 ){
            return false
        }
        else{
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            if (checkvalid() === true){
                dispatch(signup(authData, history));
            }else{
                alert('enter proper details')
            }
                        
        } else {
            dispatch(signin(authData, history))
        }
    }

    const switchMode = () => {
        setSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <Container component="main" maxWidth="xs" >
            <br></br> <br></br> <br></br> <br></br>
            <Paper className={classes.paper}  >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <TextField required fullWidth minRows={4} name='firstname' label="First Name" onChange={(e) => {setauthData({...authData,firstname:e.target.value}) }} ></TextField>
                                    <TextField required fullWidth minRows={4} name='lastname' label="Last Name" onChange={(e) => {setauthData({...authData,lastname:e.target.value}) }} ></TextField>
                                </>
                            )
                        }
                        <TextField required fullWidth minRows={4} name='email' label='Email' onChange={(e) => {setauthData({...authData,email:e.target.value})}} ></TextField> 
                        <TextField required fullWidth minRows={4} type='password' name='password' label='Password' onChange={(e) => {setauthData({...authData,password:e.target.value})}} ></TextField> 
                        
                        { isSignup && <TextField required fullWidth minRows={4} type='password' name='confirmPassword' label='Confirm Password' onChange={(e)=>{ setauthData({...authData,confirmPassword:e.target.value}) }} > </TextField> }
                        
                    
                    </Grid>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                        
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                </form>
            </Paper>
        </Container>

    )
}

export default Auth

//