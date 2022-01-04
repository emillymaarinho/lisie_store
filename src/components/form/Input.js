import styles from './Input.module.css'

const Input = ({ type, text, name, value, placeholder, handleChange }) => {
    return (
        <div className={styles.form_control}>
            <label for={name}>{text}</label>
            <input autoComplete="off" maxLength={30} type={type} id={name} value={value} placeholder={placeholder}
                onChange={handleChange} name={name}/>
        </div>
    )
}

export default Input