import styles from './login.module.css'
import '../styles.css'
import Link from 'next/link';

export default function Login(){
    return(
        <div className={styles.App}>
            <div className={styles.leftside}>
                <h1>Login.</h1>
                </div>
            <div className={styles.rightside}>
                <form className={styles.inputareabox}>
                    <h1>Welome Back!</h1>
                    <input type="text" placeholder="Username" className={styles.inputfield}></input>
                    <input type="text" placeholder="Password" className={styles.inputfield}></input>
                    <div className={styles.submitbutton}>Oh Yeah</div>
                    <Link className={styles.havelogin} href={'./register'}>BooHoo I don't have an account</Link>
                </form>
            </div>
            

        </div>
    )
}