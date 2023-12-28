const express=require("express")
const router=express.Router();
const shopController=require("../controller/shop.js")

router.post("/add/:user/:product",shopController.creatShop)
router.get('/',shopController.getallShops)
router.get('/:id',shopController.getShop);
router.delete('/:id',shopController.deleteShop);
router.put('/:id',shopController.updateShop);
module.exports = router