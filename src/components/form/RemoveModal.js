import styles from './RemoveModal.module.css'

const RemoveModal = ({ show, msg, onClickYes, onClickNo }) => {
    return (
        <>
            {show ?
                <div className={styles.modal}>
                    <span className={styles.msg}> Tem certeza que deseja excluir este {msg}</span>
                    <div className={styles.btn}>
                        <button onClick={onClickYes}>SIM</button>
                        <button onClick={onClickNo}>NÃO</button>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default RemoveModal