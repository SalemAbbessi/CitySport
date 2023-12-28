const express=require("express")
const router=express.Router();
const userController=require("../controller/user.js");

// router.get('/',userController.getallUsers)
router.get('/',userController.getallUsers)
// router.post('/add',userController.creatUser)
router.post('/add',userController.creatUsers)
// router.get('/add',userController.readUser)
router.get('/:id',userController.getUser);
//router.delete
router.delete('/:id',userController.deleteUser);
//router.update
router.put('/:id',userController.updateUser);
module.exports = router