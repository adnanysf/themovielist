import styles from './home.module.css'
import './styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.app}>
      <img className={styles.bg} src='./bg.png' alt='Logo' ></img>
      <div className={styles.cont}>
        <div className={styles.left}>
          <div className={styles.titlename}>The Movie List</div>
          </div>
        <div className={styles.right}>
          <h1 style={{userSelect: 'none', cursor: 'default', marginTop:'5rem'}}>Start Now</h1>
          <Link href='./createcard' className={styles.makelist}>Make a List</Link>
        </div>
      </div>
    </div>
  )
}
