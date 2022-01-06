import Input from "../form/Input"
import Message from "../layout/Mesaage"
import styles from './Login.module.css'
import { useState } from "react"
import { useHistory } from "react-router"
import SubmitBotton from "../form/SubmitBotton"

const Login = (props) => {

    const [login, setLogin] = useState([{ email: "", password: "" }]);
    const [status, setStatus] = useState(
        {
            type: '',
            message: ''
        }
    )
    const history = useHistory()

    const handleEmail = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handlePassowrd = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const validateLogin = () => {
        if (!login.email) {
            setStatus({ type: 'error', message: 'Email e/ou senha inválido.' })
            return false;
        }
        if (!login.password) {
            setStatus({ type: 'error', message: 'Email e/ou senha inválido.' })
            return false;
        }
        return true
    }

    const submit = (e) => {
        e.preventDefault()
        const validate = validateLogin()
        if (validate) {
            localStorage.setItem("userLogged", true)
            props.loginEvent()
            history.push('/products')
        }
    }
    

    return (
        <div className={styles.login_container}>
            <form onSubmit={submit} >
                {status.message && <Message type={status.type} msg={status.message} />}
                <Input handleChange={handleEmail} text="E-mail:" type="email" name="email" placeholder="Digite seu email"
                    value={login.email} />
                <Input handleChange={handlePassowrd} text="Senha:" type="password" name="password" placeholder="Digite sua senha"
                    value={login.password} />
                {/* <a href="/todo" className={styles.forget_pass}>Esqueceu a senha?</a> */}
                <SubmitBotton text="Entrar"/> 
            </form>
        </div>
    )
}

export default Login