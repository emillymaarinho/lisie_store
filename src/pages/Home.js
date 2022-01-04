import styles from './Home.module.css'
import LinkBotton from '../components/layout/LinkBotton'

const Home = () => {
    return (
        <div className={styles.home_container}>
            <section >
                <h1> Bem vindo(a) a sua loja!</h1>
                <p>Faça seu login para acesso.</p>
                <div className={styles.home_btn}>
                <LinkBotton to="/login" text="Login" />
                </div>
            </section>
        </div>
    )
}

export default Home