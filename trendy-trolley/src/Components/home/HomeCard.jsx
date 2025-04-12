import style from './HomeCard.module.css'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api'

const HomeCard = ({product}) => {
    return (
        <div className={`col-md-3 ${style.col}`}>
            <Link to={`/products/${product.slug}`} className={style.link}>
                <div className={style.card}>
                    <div className="card-header">
                        <img src={`${BASE_URL}${ product.image }`} className={style.cardImgTop} alt="..." />
                    </div>
                    <div className={style.cardBody}>
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ {product.price}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomeCard