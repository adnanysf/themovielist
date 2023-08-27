"use client"
import styles from './login.module.css'
import '../styles.css'
import Link from 'next/link';
import { useState } from 'react';

export default function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    function checkUser(){
        fetch('http://localhost:4000/loginuser',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
    }

    return(
        <div className={styles.App}>
            <div className={styles.leftside}>
                <h1>Login.</h1>
                </div>
            <div className={styles.rightside}>
                <form className={styles.inputareabox}>
                    <h1>Welome Back!</h1>
                    <input onChange={setUsername} type="text" placeholder="Username" className={styles.inputfield}></input>
                    <input onChange={setPassword} type="password" placeholder="Password" className={styles.inputfield}></input>
                    <div className={styles.submitbutton}>Oh Yeah</div>
                    <Link className={styles.havelogin} href={'./register'}>BooHoo I don't have an account</Link>
                </form>
            </div>
            

        </div>
    )
}