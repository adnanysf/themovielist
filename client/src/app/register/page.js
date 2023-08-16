import styles from './register.module.css'
import '../styles.css'
import Link from 'next/link';


export default function Register(){
    return(
        <div className={styles.App}>
            <div className={styles.leftside}>
                <h1>Register.</h1>
                </div>
            <div className={styles.rightside}>
                <form className={styles.inputareabox}>
                    <h1>Give us your info</h1>
                    <input type="text" placeholder="Email" className={styles.inputfield}></input>
                    <input type="text" placeholder="Name" className={styles.inputfield}></input>
                    <input type="text" placeholder="Username" className={styles.inputfield}></input>
                    <input type="text" placeholder="Password" className={styles.inputfield}></input>
                    <input type="text" placeholder="Type it again g" className={styles.inputfield}></input>
                    <div className={styles.submitbutton}>Oh Yeah</div>
                    <Link className={styles.havelogin} href={'./login'}>I already have an account!</Link>
                </form>
            </div>
            

        </div>
    )
}