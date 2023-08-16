import style from './navbar.module.css'
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className={style.app}>
            <Link href='/' className={style.homebutton}>Home</Link>
        </div>
    )
}