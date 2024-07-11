'use client'
import style from './navbar.module.css'
import Link from 'next/link'
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile, cilHeart, cilThumbUp, cilPencil} from '@coreui/icons';

export default function Navbar(){
    return(
        <div className={style.app}>
            <Link href='/' className={style.homebutton}><div style={{display:"flex", justifyContent:'center', alignItems:'center'}}><CIcon color='white' width={35} icon={cilHome}/></div></Link>
            <Link href='/login' className={style.accountbutton}><div style={{display:"flex", justifyContent:'center', alignItems:'center'}}><CIcon color='white' width={35} icon={cilUser}/></div></Link>
            <Link href='/createcard' className={style.accountbutton}><div style={{display:"flex", justifyContent:'center', alignItems:'center'}}><CIcon color='white' width={35} icon={cilPencil}/></div></Link>

        </div>
    )
}