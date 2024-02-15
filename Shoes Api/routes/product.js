const express=require('express')
const router=express.Router()
const {getProduct,createProduct,getSingleProduct,deleteProduct,updateProduct,getAllProductsStatic}=require('../controller/product')

router.route('/').get(getProduct).post(createProduct)
router.route('/:name').delete(deleteProduct)
router.route('/static').get(getAllProductsStatic)

module.exports=router