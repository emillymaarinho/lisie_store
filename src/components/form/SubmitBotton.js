import styles from './SubmitBotton.module.css'

const SubmitBotton = ({text}) => {
    return <button className={styles.btn}>{text}</button>
}

export default SubmitBotton