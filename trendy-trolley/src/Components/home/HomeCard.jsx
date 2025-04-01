import style from './HomeCard.module.css'
import { Link } from 'react-router-dom'

const HomeCard = () => {
    return (
        <div className={`col-md-3 ${style.col}`}>
            <Link to="/detail" className={style.link}>
                <div className={style.card}>
                    <div className="card-header">
                        <img src="" className={style.cardImgTop} alt="..." />
                    </div>
                    <div className={style.cardBody}>
                        <h5 className="card-title">Product Name</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 100.00</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomeCard