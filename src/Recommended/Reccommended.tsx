import Button from "../Components/Button"
import "./Reccommended.css"

interface Props{
  handleChange:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

const Reccommended = ({handleChange}:Props) => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button handleChange={handleChange} value="" title="All"/>
        <Button handleChange={handleChange} value="nike" title="Nike"/>
        <Button handleChange={handleChange} value="adidas" title="Adidas"/>
        <Button handleChange={handleChange} value="puma" title="Puma"/>
        <Button handleChange={handleChange} value="vans" title="Vans"/>
      </div>
    </>
  )
}

export default Reccommended