import React from 'react'
import ProductPagePlaceHolder from './ProductPagePlaceHolder'
import RelatedProducts from './RelatedProducts'


const ProductPage = () => {
    return (
        <div>
            <ProductPagePlaceHolder />
            <section className='py-3'>
                <div className='container px-4 px-lg-5 my-5'>
                    <div className='row gx-4 gx-lg-5 align-items-center'>
                        <div className='col-md-6'>
                            <img
                                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                                alt="Product"
                                className='card-img-top mb-5 mb-md-0' />
                        </div>
                        <div className='col-md-6'>
                            <div className='small mb-1'>SKU: 12345</div>
                            <h1 className='display-5 fw-bolder'>Product Name</h1>
                            <div className='fs-5 mb-5'>
                                <span>$40.00</span>
                                <span className='text-decoration-line-through'>$50.00</span>
                            </div>
                            <p className='lead'>This is a great product that you will love!</p>
                            <div className='d-flex'>
                                <input 
                                type="number" 
                                min="1"
                                id='inputQuantity'
                                defaultValue="1" 
                                className='form-control text-center me-3' />
                                <button className='btn btn-outline-dark flex-shrink-0' type='button'>
                                    Add to cart
                                    <i className='bi-cart-fill me-1'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage