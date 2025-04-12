import React, { useEffect, useState } from 'react'
import ProductPagePlaceHolder from './ProductPagePlaceHolder'
import RelatedProducts from './RelatedProducts'
import { useParams } from 'react-router-dom'
import api from '../../api'
import { BASE_URL } from '../../api'

const ProductPage = () => {
    const { slug } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [similarProducts, setSimilarProducts] = useState([])
    const cart_code = localStorage.getItem('cart_code')

    


    function add_item() {
        if (!product) return;

        const newItem = {cart_code: cart_code, product_id: product.id}
        
        api.post('add_item', newItem)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        setLoading(true)
        api.get(`product_detail/${slug}/`)
            .then(res => {
                setProduct(res.data)
                setSimilarProducts(res.data.similar_products || [])
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                console.error(err.message)
                setError(err.message)
                setLoading(false)
            })
    }, [slug])

    if (loading) {
        return <ProductPagePlaceHolder />
    }

    if (error) {
        return <div>Error loading product: {error}</div>
    }

    if (!product) {
        return <div>Product not found</div>
    }

    console.log('Image URL:', `${BASE_URL}${product.image}`);

    return (
        <div>
            <section className='py-3'>
                <div className='container px-4 px-lg-5 my-5'>
                    <div className='row gx-4 gx-lg-5 align-items-center'>
                        <div className='col-md-6'>
                            <img
                                src={`${BASE_URL}${product.image}`}
                                alt={product.name}
                                className='card-img-top mb-5 mb-md-0'
                                onError={(e) => {
                                    e.target.src = "https://dummyimage.com/600x700/dee2e6/6c757d.jpg";
                                }} />
                        </div>
                        <div className='col-md-6'>
                            <div className='small mb-1'>SKU: ONBC{product.id}</div>
                            <h1 className='display-5 fw-bolder'>{product.name}</h1>
                            <div className='fs-5 mb-5'>
                                <span>$ {product.price}</span>
                            </div>
                            <p className='lead'>{product.description}</p>
                            <div className='d-flex w-50'>
                                <input
                                    type="number"
                                    min="1"
                                    id='inputQuantity'
                                    defaultValue="1"
                                    className='form-control text-center me-3' />
                                <button className='btn btn-outline-dark flex-shrink-0' type='button'
                                    onClick={add_item}>
                                    Add to cart
                                    <i className='bi-cart-fill me-1'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {similarProducts?.length > 0 && <RelatedProducts products={similarProducts} />}
        </div>
    )
}

export default ProductPage