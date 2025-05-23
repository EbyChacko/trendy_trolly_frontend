import React from 'react'

const Footer = () => {
    return (
        <footer className="py-3" style={{ backgroundColor: "#6050DC", color: "white" }}>
            <div className="container text-center p-3">
                <div className="mb-2">
                    <a href="#!" className="text-white text-decoration-none mx-2">Home</a>
                    <a href="#!" className="text-white text-decoration-none mx-2">Shop</a>
                    <a href="#!" className="text-white text-decoration-none mx-2">About</a>
                    <a href="#!" className="text-white text-decoration-none mx-2">Contact</a>
                </div>
            </div>
            <div className="mb-2">
                <p>Follow us on:</p>
                <a href="#!" className="text-white mx-2">Facebook</a>
                <a href="#!" className="text-white mx-2">Twitter</a>
                <a href="#!" className="text-white mx-2">Instagram</a>
            </div>
            <div className="container text-center p-3">
                © {new Date().getFullYear()} Trendy Trolley. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer