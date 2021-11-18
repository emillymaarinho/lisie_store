import { Link } from 'react-router-dom'

import logo from '../../img/logo_lisie.png'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
                <div>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="lisie" />
                    </Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link> </li>
                    <li className={styles.item}><Link to="/products">Produtos</Link> </li>
                    <li className={styles.item}><Link to="/store">Loja</Link> </li>
                </ul>
        </nav>
    )
}

export default NavBar