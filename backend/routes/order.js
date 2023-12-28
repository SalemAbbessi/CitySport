const express=require("express")
const router=express.Router();
const orderController=require("../controller/order.js")


router.post('/add/:user',orderController.createOrder)
router.get('/',orderController.getallOrders)
router.get('/:id',orderController.getOrder);
router.delete('/:id',orderController.deleteOrder);
router.put('/:id',orderController.updateOrder);
module.exports = router