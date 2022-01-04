import styles from './ProductEdit.module.css'

import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import RemoveModal from '../components/form/RemoveModal'
import ProductForm from '../components/products/ProductForm'
import Loading from '../components/layout/Loading'
import { getOneProduct, UpDateProduct, removeProduct } from '../Services/requests/products/productsRequests'


const ProductEdit = () => {

    const { id } = useParams()
    const history = useHistory()
    const [product, setProduct] = useState({})
    const [showProductForm, setShowProductForm] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        const getProduct = async (id) => {
            const resul = await getOneProduct(id)
            setProduct(resul)
        }
        getProduct(id)
    }, [id])

    async function deleteProduct() {
        await removeProduct(product.id)
        history.push('/products')
    }

    const remove = async (e) => {
        e.preventDefault()
        setIsModalVisible(true)
    }

    const closeModal = () => {
        setIsModalVisible(false)
    }

    const editProduct = async (product) => {
        const resul = await UpDateProduct(product, id)
        setProduct(resul)
        setShowProductForm(false)
    }

    const toggleProductForm = () => {
        setShowProductForm(!showProductForm)
    }

    const currencyMask = (value) => {
        return parseFloat(value).toFixed(2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }


    const renderProductInfo = () => {
        return (
            <div >
                <div className={styles.product_info}>
                    <img src={product.image} alt='imagem'></img>
                    <div>
                        <div className={styles.space}>
                            <span>{product.name}</span>
                        </div>
                        <div className={styles.space}>
                            <span>R$ {currencyMask(product.price)}</span>
                        </div>
                        <div className={styles.space}>
                            <span>{product.category.name}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.btn_remove_container}>
                    <button className={styles.btn_remove} onClick={remove} >
                        <BsFillTrashFill />
                    </button>
                    <RemoveModal show={isModalVisible} onClickYes={deleteProduct} onClickNo={closeModal}
                        msg='produto?' />
                </div>
            </div>
        )
    }

    const renderProductForm = () => {
        return (
            <div>
                <ProductForm handleSubmit={editProduct} btnText="Concluir edição"
                    productData={product} ></ProductForm>
            </div>
        )
    }

    return (<>
        {product.name ? (
            <div >
                <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={toggleProductForm}>
                        {!showProductForm ? 'Editar' : 'Voltar'}
                    </button>
                </div>
                <div className={styles.details_container}>

                    {!showProductForm ? (
                        renderProductInfo()
                    ) : (
                        renderProductForm()
                    )}
                </div>
            </div>
        ) : <Loading />
        }
    </>)
}

export default ProductEdit