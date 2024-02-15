import "./Products.css";
import Card from "../Components/Card";
import { Product } from "../App";

interface Props{
  products:Product[]
}

const Products = ({products}:Props) => {
  return (
    <>
      <section className="card-container">
         {products.map(prod=>(
          <Card product={prod} key={Math.random()}/>
         ))}
      </section>
    </>
  );
};

export default Products;
