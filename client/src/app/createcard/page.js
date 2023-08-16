import style from './create.module.css'
import Card from '../components/card/Card'
import '../styles.css'

export default function CreateCard(){
    
    return(
        <div className={style.app}>
        
            <div className={style.cont}>
                <div className={style.card}>
                    <div className={style.front}> <h1>front</h1> </div>
                    <div className={style.back}> <h1>back</h1> </div>
                </div>

            </div>
            
        </div>
    )

}