import Input from "../form/Input"
import styles from './ProductForm.module.css'
import SubmitBotton from '../form/SubmitBotton'
import Select from "../form/Select"
import Message from '../layout/Mesaage'
import { useEffect, useState } from "react"

import { getAllCategories } from "../../Services/requests/products/productsRequests"

const ProductForm = ({ handleSubmit, btnText, productData }) => {

    const [product, setProduct] = useState(productData || { category: {} })
    const [categories, setCategories] = useState([])
    const [status, setStatus] = useState(
        {
            type: '',
            message: ''
        }
    )

    useEffect(() => {
        const getCategories = async () => {
            const resul = await getAllCategories()
            setCategories(resul)
        }
        getCategories();
    }, [])

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleCategory = (e) => {
        setProduct({
            ...product,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleUploadImage = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        getBase64(file).then(
            data => setProduct({ ...product, image: data }))
    }

    const validateProduct = () => {
        if (!product.name) {
            setStatus({ type: 'error', message: 'Seu produto precisa de um nome!' })
            return false;
        }
        if (!product.price || product.price < 0) {
            setStatus({ type: 'error', message: 'Seu produto precisa de um valor!' })
            return false;
        }
        if (!product.category.id) {
            setStatus({ type: 'error', message: 'Seu produto precisa de uma categoria!' })
            return false;
        }
        if (!product.image) {
            setStatus({ type: 'error', message: 'Seu produto precisa de uma imagem!' })
            return false
        }
        return true
    }

    const submit = (e) => {
        e.preventDefault()
        const validate = validateProduct()
        if (validate) {
            handleSubmit(product)
        }
    }

    return (
        <div className={styles.form}>
            <form onSubmit={submit} >
                {status.message && <Message type={status.type} msg={status.message} />}
                <div>
                    <Input handleChange={handleChange} placeholder="Nome do produto" text="Nome do produto:"
                        type="text" name="name" value={product.name} />
                </div>
                <div>
                    <Input handleChange={handleChange} type="number" text="Valor do produto:" placeholder="Valor do produto"
                        name="price" value={product.price} />
                </div>
                <div>
                    <Select type="category_id" handleOnChange={handleCategory} options={categories} text="Categoria:"
                        value={product.category.id} />
                </div>
                <div>
                    <Input type='file' name="image" handleChange={handleUploadImage} accept="application/png"
                        text='Selecione imagem:' image={product.image} />
                </div>
                <div className={styles.btn}>
                    <SubmitBotton text={btnText} />
                </div>
            </form>
        </div>
    )
}
export default ProductForm