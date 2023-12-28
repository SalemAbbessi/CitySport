const express=require("express")
const router=express.Router();
const orderDetailController=require("../controller/orderDetail.js");

router.post("/add/:order/:product",orderDetailController.createOrderDetail)
router.get('/',orderDetailController.getallOrderDetails)
router.get('/:id',orderDetailController.getOrderDetail);
router.delete('/:id',orderDetailController.deleteOrderDetail);
router.put('/:id',orderDetailController.updateOrderDetail);
module.exports = router