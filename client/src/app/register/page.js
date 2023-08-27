"use client"
import styles from './register.module.css'
import '../styles.css'
import Link from 'next/link';
import { useState } from 'react';


export default function Register(){
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')
    const [title, setTitle] = useState('Register.')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    function checkInputs(){
        if(!name){
            setTitle('Enter a name.')
            return
        }
        if(!username){
            setTitle('Enter a username.')
            return
        }
        if(!password){
            setTitle('Enter a password.')
            return
        }
        if(password !== repassword){
            setTitle('Passwords do not match.')
            return
        }
        submitUser();
    }

    function submitUser(){
        fetch('http://localhost:4000/registeruser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password
            })
        })
    }

    return(
        <div className={styles.App}>
            <div className={styles.leftside}>
                <h1 className={styles.title}>{title}</h1>
                </div>
            <div className={styles.rightside}>
                <form className={styles.inputareabox}>
                    <h1>Give us your info</h1>
                    <input onChange={handleName} type="text" placeholder="Name" className={styles.inputfield}></input>
                    <input onChange={handleUsername} type="text" placeholder="Username" className={styles.inputfield}></input>
                    <input onChange={handlePassword} type="password" placeholder="Password" className={styles.inputfield}></input>
                    <input onChange={setRePassword} type="password" placeholder="Re-Type Password" className={styles.inputfield}></input>
                    <div onClick={checkInputs} className={styles.submitbutton}>Oh Yeah</div>
                    <Link className={styles.havelogin} href={'./login'}>I already have an account!</Link>
                </form>
            </div>
            

        </div>
    )
}