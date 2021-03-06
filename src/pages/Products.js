import ProductCard from "../components/products/ProductCard"
import Loading from '../components/layout/Loading'
import LinkBotton from '../components/layout/LinkBotton'
import Search from '../components/form/Search'

import styles from './Products.module.css'

import { useEffect, useState } from "react"
import { getAllProducts } from '../Services/requests/products/productsRequests'

const Products = () => {

    const [products, setProducts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [productsCopy, setProductsCopy] = useState([])


    const filter = (searchString) => {
        const filtered = productsCopy.filter((product) =>
            product.name.toLowerCase().includes(searchString.toLowerCase()))
        setProducts(filtered);
    }
    const hendleOnChangeSearch = (e) => {
        e.preventDefault()
        filter(e.target.value)
    }

    useEffect(() => {
        const getProducts = async () => {
            const result = await getAllProducts()
            setProducts(result)
            setRemoveLoading(true)
            setProductsCopy(result)
        }
        getProducts()
    }, [])

    return (
        <div className={styles.btn_container}>
            <div className={styles.btn_search}>
            <div className={styles.search}>
                    <Search hendleOnChangeSearch={hendleOnChangeSearch} />
                </div>
                <div className={styles.button} >
                    <LinkBotton to="/newproduct" text="Adicionar Produto" />
                </div>
            </div>
            <div className={styles.container}>
                {products.length > 0 && products.map((product) => (

                    <ProductCard name={product.name} id={product.id} price={product.price} category={product.category.name}
                        key={product.id} image={product.image} />
                ))}

                {!removeLoading && <Loading />}
                {removeLoading && products.length === 0 && (
                    <p>Näo há produtos cadastrados!</p>
                )}
            </div>
        </div>
    )
}

export default Products