import styles from './Home.module.css'
import LinkBotton from '../components/layout/LinkBotton'

const Home = () => {
    return (
        <div className={styles.home_container}>
            <section >
                <h1> Bem vinda a sua loja, Letícia!</h1>
                <p>Comece a adicionar seus produtos agora mesmo!</p>
                <LinkBotton to="/newproduct" text="Adicionar produto" />
            </section>
        </div>
    )
}

export default Home