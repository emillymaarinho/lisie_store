import Input from "../form/Input"
import LinkBotton from "../layout/LinkBotton"
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.login_container}>
            <form>
                <Input text="E-mail:" type="email" name="email" placeholder="Digite seu email" />
                <Input text="Senha:" type="password" name="password" placeholder="Digite sua senha" />
                <a href="#" className={styles.forget_pass}>Esqueceu a senha?</a>
                <LinkBotton to="/newproduct" text="Entrar"></LinkBotton>
            </form>
        </div>
    )
}

export default Login