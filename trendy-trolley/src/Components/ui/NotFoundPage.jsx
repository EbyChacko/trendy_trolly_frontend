import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <header className='py-3 my-5' style={{ backgroundColor: "#6050DC", color: "white" }}>
      <div className="container text-white text-center p-3">
        <h1 className='display-4'>404</h1>
        <p className='display-4  fw-bold'>Page Not Found</p>
        <p className='lead fw-normal text-white-75 mb-4'>The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-light btn-lg rounded-pill px-4 py-2">Go to Home</Link>
      </div>
      </header>
  )
}

export default NotFoundPage