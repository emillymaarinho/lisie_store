import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li><FaFacebook /></li>
                <a target="_blank" href="https://www.instagram.com/lisie.acessorios/">
                    <li><FaInstagram /></li>
                </a>

            </ul>
            <p className={styles.copy_right}>
                <span>LISIÊ</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer