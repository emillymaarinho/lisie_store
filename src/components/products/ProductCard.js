import styles from './ProductCard.module.css'
import { useHistory } from 'react-router-dom'
import { getOneProduct } from '../../Services/requests/products/productsRequests'


const ProductCard = ({ image, id, name, price, category }) => {


    const history = useHistory()

    const submit = async () => {
        await getOneProduct(id)
        history.push(`/product/${id}`)
    }

    return (
        <div onClick={submit} className={styles.product_card}>
            <img src={image} alt='imagem'></img>
            <h1>{name}</h1>
            <div>
                <p> <span>Preço: </span> R$ {price} </p>
                <p className={styles.category_text}>
                    <span className={`${styles[category]}`}></span> {category} </p>
            </div>
        </div>
    )
}

export default ProductCard