import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { Product } from '../App'
// import '../Products/Products.css'

interface Props{
  key:Number,
  product:Product
}

const Card = ({product}:Props) => {
    
  return (
    <section className="card">
          <img
            src={product.img}
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">{product.reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{product.prevPrice}</del>${product.newPrice}
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
  )
}

export default Card