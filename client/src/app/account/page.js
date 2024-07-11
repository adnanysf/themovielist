import style from './account.module.css';
import User from '../objects/currentUser'



export default function account(){
    return(
        <div className={style.app}>
            <h1>
                {User.getName()}
            </h1>
        </div>
    )
}