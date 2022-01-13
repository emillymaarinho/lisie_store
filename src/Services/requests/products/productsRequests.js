const BASE_URL = " https://mocki.io/v1/2a0f42c3-8083-4821-999a-43b01a5927be"

const getAllCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json()
}

const addProduct = async (product) => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json()
}

const getAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json()
}

const removeProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    });
    return response.json()
}

const getOneProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application.json',
        },
    });
    return response.json()
}

const UpDateProduct = async (product, id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product),
    });
    return response.json()
}
export { getAllCategories, addProduct, getAllProducts, removeProduct, getOneProduct, UpDateProduct }