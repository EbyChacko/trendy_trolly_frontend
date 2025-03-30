import React from 'react'
import HomeCard from './HomeCard'

const CardContainer = () => {
  return (
    <section className="py-5" id="shop">
        <h4 className="text-center fw-bold mb-4">Our Products</h4>
        <div className='container px-4 px-lg-5 mt-5'>
            <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
        </div>
    </section>
  )
}

export default CardContainer