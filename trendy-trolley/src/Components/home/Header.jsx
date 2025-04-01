import React from 'react'

const Header = () => {
  return (
    <header className=" py-5" style={{backgroundColor: "#6050DC", color: "white"}}>
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center">
                <h1 className="display-4 fw-bolder">Welcome to Trendy Trolley</h1>
                <p className="lead fw-normal text-white-50 mb-0">Your one-stop shop for the latest trends</p>
                <a href="#shop" className="btn btn-outline-light btn-lg rounded-pill px-4 py-2 ">Shop Now</a>
            </div>
        </div>
    </header>
  )
}

export default Header