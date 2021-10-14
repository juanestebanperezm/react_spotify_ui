import React from 'react'
import './login.css'
import {loginUrl} from './Musikx'

function Login({}){

    /* functions */


    return(
        
        <div className="login">
            <img src="https://i.imgur.com/XlRSRer.png" alt="" />
            <a href={loginUrl}>Ingresar</a>
        </div>
    )

}


export default Login;