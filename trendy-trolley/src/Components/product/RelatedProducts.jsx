import React from 'react'
import HomeCard from '../home/HomeCard'
const RelatedProducts = ({ products }) => {
    return (
        <section className="py-5" id="shop">
            <hr></hr>
            <h2 className='fw-bolder m-4'>Related Products</h2>
            <div className='container px-4 px-lg-5 mt-5'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center align-items-center'>
                    {products.map(product => <HomeCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts