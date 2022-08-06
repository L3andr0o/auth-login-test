import React, { useState } from 'react';
import {useAuth} from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const [user, setUser] = useState({
        email : '',
        password : ''
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({target : {name, value}}) =>setUser({...user, [name]: value});
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try{
            await signup(user.email, user.password);
            navigate('/');
        }catch(e){
            setError(e.message)
        }
    }

    return(
        <div>
            {error && <p>{error}</p>}
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
            <button>Register</button>
        </form>
        </div>
    )
}