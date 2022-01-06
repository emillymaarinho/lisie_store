import { Link } from 'react-router-dom'
import logo from '../../img/logo_lisie.png'
import home from '../../img/casa.png'
import products from '../../img/box (1).png'
import getout from '../../img/logout (1).png'
// import store from '../../img/bolsa-de-compras.png'
import styles from './NavBar.module.css'

const NavBar = (props) => {

    return (
        <nav className={props.userLogged ? styles.navbar : styles.navbar_centered}>
            <div>
                <Link to={props.userLogged ? "/products" : "/"}>
                    <img className={styles.logo} src={logo} alt="lisie" />
                </Link>
            </div>
            <div >
                {props.userLogged ?
                    <div>
                        <Link to="/products" >
                            <img className={styles.icon} src={home} alt="home" />
                        </Link>
                        <Link to="/products">
                            <img className={styles.icon} src={products} alt="products" /></Link>
                        {/* <Link to="/store">
                            <img className={styles.icon} src={store} alt="store" />
                        </Link> */}
                        <button onClick={props.logout}>
                            <img className={styles.icon} src={getout} alt="getout" />
                        </button>
                    </div>
                    : null
                }
            </div>
        </nav>
    )
}

export default NavBar