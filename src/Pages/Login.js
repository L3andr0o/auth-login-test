import React, { useState } from 'react';
import {useAuth} from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Alert from '../Components/Alert';

export default function Login(){

    const [user, setUser] = useState({
        email : '',
        password : ''
    });

    const {login, loginWithGoogle} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({target : {name, value}}) =>setUser({...user, [name]: value});
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try{
            await login(user.email, user.password);
            navigate('/');
        }catch(e){
            setError(e.message)
        }
    }

    const handleGoogleLogin = async () =>{
        try {
        loginWithGoogle();
        navigate('/')
        } catch (e) {
            setError(e.message)    
        }
    }

    return(
        <div>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
            type='email'
            name='email' 
            placeholder='youremail@company.ltd' 
            id='email' 
            onChange={handleChange}/>

            <label htmlFor='password' >Password</label>
            <input 
            type='password'
            name='password' 
            id='password'
            placeholder='******' 
            onChange={handleChange}/>
            <button>Login</button>
        </form>
        <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    )
}