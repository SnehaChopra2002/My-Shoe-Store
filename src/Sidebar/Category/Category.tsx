import Input from "../../Components/Input";
import "./Category.css";

interface Props{
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Category = ({handleChange}:Props) => {  
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title">Category</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" color=""/>
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" color=""/>
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" color=""/>
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" color=""/>
      </div>
    </>
  );
};
