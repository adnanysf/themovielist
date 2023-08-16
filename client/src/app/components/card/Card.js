import style from './card.module.css'


export default function Card(props){

    return(
        <div className={style.cont}>
            <div className={style.card}>
                <div className={style.front}> <h1>front</h1> </div>
                <div className={style.back}> <h1>back</h1> </div>
            </div>

        </div>
    )

}