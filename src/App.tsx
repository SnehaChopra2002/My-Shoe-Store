import { useEffect, useState } from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Reccommended from './Recommended/Reccommended'
import Sidebar from './Sidebar/Sidebar'
import axios from 'axios'
import './index.css'

export interface Product{
  img:string,
  title:String,
  star:String,
  reviews:String,
  prevPrice:String,
  newPrice:String,
  company:String,
  color:String,
  category:String
}

const App = () => {
  const [products,setProducts] = useState<Product[]>([])
  const [selectedCategory,setSelectedCategory]=useState('')
  const [selectedColor,setSelectedColor] = useState('')
  const [selectedCompany,setSelectedCompany] = useState('')

  const [query,setQuery]= useState("")
  // const params={query}
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get<Product[]>("http://localhost:3000/api/v1/shoes",{
          params:{
            category:selectedCategory,
            color:selectedColor,
            company:selectedCompany,
            title:query
          }
        })
        setProducts(response.data)
        console.log(response.data)
      } catch (error) {
        console.log("error fetching the data:",error)
      }
    }
    fetchData()
  },[query,selectedCategory,selectedColor,selectedCompany])
  
  // Input Filter
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setQuery(event.target.value)
  }

  // Category Filter
  const handleCategory=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedCategory(event.target.value)
    console.log(event.target.value)
  }

  // Color Filter
  const handleColor=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedColor(event.target.value)
    console.log(event.target.value)
  }

  // Button filter
  const handleButtons=(event: React.MouseEvent<HTMLButtonElement>)=>{
    setSelectedCompany(event.currentTarget.value)
  }
 
  return (
    <>
      <Sidebar handleChangeCategory={handleCategory} handleChangeColor={handleColor}/>
      <Navigation handleChange={handleInputChange}/>
      <Reccommended handleChange={handleButtons}/>
      <Products products={products}/>
    </>
  )
}

export default App