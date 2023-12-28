const express=require("express")
const router=express.Router();
const commentController=require("../controller/comment.js")

router.post('/add/:user/:product',commentController.creatComment)
router.get('/',commentController.getallComments)
router.get('/:id',commentController.getComment);
router.delete('/:id',commentController.deleteComment);
router.put('/:id',commentController.updateComment);

module.exports = router