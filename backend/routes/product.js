const express=require("express")
const router=express.Router();
const productController=require("../controller/product.js");

router.get('/',productController.getallProducts)
router.post('/add',productController.creatProduct)
router.get('/:id',productController.getProduct);
router.delete('/:id',productController.deleteProduct);
router.put('/:id',productController.updateProduct);


module.exports = router