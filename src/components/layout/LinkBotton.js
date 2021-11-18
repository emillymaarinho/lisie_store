import { Link } from 'react-router-dom'
import styles from './LinkBotton.module.css'

const LinkBotton = ({to, text}) => {
    return <Link className={styles.btn} to={to} >{text}</Link>
}

export default LinkBotton