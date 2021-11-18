import styles from './Loading.module.css'
import loading from '../../img/loading (2).png'

const Loading = () => {
    return <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt="Loading"/>
    </div>
}

export default Loading