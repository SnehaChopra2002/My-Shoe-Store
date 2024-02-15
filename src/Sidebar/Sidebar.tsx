import React from "react";
import { Category } from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

interface Props{
  handleChangeCategory:(event:React.ChangeEvent<HTMLInputElement>)=>void
  handleChangeColor:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Sidebar = ({handleChangeCategory,handleChangeColor}:Props) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChangeCategory}/>
        <Price handleChange={handleChangeColor}/>
        <Colors handleChange={handleChangeColor}/>
      </section>
    </>
  );
};

export default Sidebar;
