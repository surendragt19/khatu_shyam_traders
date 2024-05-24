import express, { Router } from "express"
import { isAdmin, requireSignInMiddleWear } from "../middlewears/authMiddlewear.js";
import {createProductController,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController} from '../controller/productController.js'
import formidable from 'express-formidable';
const router=express.Router()

//create product
router.post('/createProduct',requireSignInMiddleWear,isAdmin,formidable(),createProductController)

//get products
router.get("/getProduct", getProductController);

//single product
router.get("/getSingleproduct/:slug", getSingleProductController);

//get photo
router.get("/productPhoto/:pid", productPhotoController);

//delete product
router.delete("/deleteProduct/:pid", deleteProductController);

//update product
router.put("/updateProduct/:pid",requireSignInMiddleWear,isAdmin,formidable(),updateProductController);

export default router;