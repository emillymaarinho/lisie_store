const getAllCategories = async () => {
    const response = await fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json()
}

const addProduct = async (product) => {
    const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json()
}

const getAllProducts = async () => {
    const response = await fetch('http://localhost:5000/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json()
}

const removeProduct = async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    });
    return response.json()
}

const getOneProduct = async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application.json',
        },
    });
    return response.json()
}

const UpDateProduct = async (product, id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product),
    });
    return response.json()
}
export { getAllCategories, addProduct, getAllProducts, removeProduct, getOneProduct, UpDateProduct }