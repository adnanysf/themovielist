'use client'
import style from './create.module.css'
import '../styles.css'
import { useState } from 'react'

export default function CreateCard(){
    const [movietitle, setMovieTitle] = useState("")

    const titleChange = (event) => {
        setMovieTitle(event.target.value)
    }

    return(
        <div className={style.app}>
            <div className={style.left}>
                <h1 className='title'>Create List.</h1>
                <div className={style.titlecontainer}>
                    <textarea placeholder='Movie Title' className={style.movietitle} onChange={titleChange}></textarea>
                </div>
                <div className={style.save}><h3>Save</h3></div>
                <div className={style.update}><h3>Export</h3></div>
            </div>
            <div className={style.cont}>

                <div className={style.front}> 
                    {movietitle}
                 </div>
                <div className={style.back}> <h1>back</h1> </div>
    

            </div>
            
        </div>
    )

}