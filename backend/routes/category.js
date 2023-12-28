const express=require("express")
const router=express.Router();
const categoryController=require("../controller/category.js")

router.get('/',categoryController.getallCategorys)
router.post('/add',categoryController.creatCategory)
router.get('/:id',categoryController.getCategory);
router.delete('/:id',categoryController.deleteCategory);
router.put('/:id',categoryController.updateCategory);



module.exports = router