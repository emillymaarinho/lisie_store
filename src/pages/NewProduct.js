import { useHistory } from 'react-router-dom'
import ProductForm from "../components/products/ProductForm"
import styles from './NewProduct.module.css'
import { addProduct } from '../Services/requests/products/productsRequests'


const NewProduct = () => {

    const history = useHistory()

    const addNewProduct = async (product) => {
        await addProduct(product)
        history.push('/products', { message: 'Projeto criado com SUCESSO!' })
    }


    return (
        <div className={styles.newproduct_container}>
            <h1>Adicione seu produto</h1>
            <div>
                <ProductForm handleSubmit={addNewProduct} btnText="Adicionar produto" />
            </div>
        </div>
    )
}

export default NewProduct