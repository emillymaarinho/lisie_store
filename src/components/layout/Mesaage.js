import { useState, useEffect } from 'react'
import styles from './Message.module.css'

const Message = ({ type, msg, clear }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
            clear()
        }, 3000)
        return () => clearTimeout(timer)
    }, [msg, clear])


    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message