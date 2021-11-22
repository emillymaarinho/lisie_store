import styles from './RemoveModal.module.css'

const RemoveModal = ({ show, msg, onClickYes, onClickNo }) => {
    return (
        <>
            {show ?
                <div className={styles.modal}>
                    <span className={styles.msg}> Tem certeza que deseja excluir este {msg}</span>
                    <div   >
                        <button className={styles.btn} onClick={onClickYes}>SIM</button>
                        <button className={styles.btn} onClick={onClickNo}>NÃO</button>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default RemoveModal