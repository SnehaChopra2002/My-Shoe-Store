import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

interface Props{
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Navigation = ({handleChange}:Props) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            onChange={handleChange}
            type="text"
            className="search-input"
            placeholder="Enter your shoes"
          />
        </div>

        <div className="profice-container">
          <a href="">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
