import Input from "../../Components/Input";
import "./Price.css";

interface Props{
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Price = ({handleChange}:Props) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="checkmark"></span>All
      </label>
      <Input handleChange={handleChange} value="40" title="$0 - $50" name="test2" color=""/>
      <Input handleChange={handleChange} value="80" title="$50 - $100" name="test2" color=""/>
      <Input handleChange={handleChange} value="130" title="$100 - $150" name="test2" color=""/>
      <Input handleChange={handleChange} value="170" title="$150 - $200" name="test2" color=""/>
    </div>
  );
};

export default Price;
