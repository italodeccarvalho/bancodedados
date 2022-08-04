const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userControllers");
const authController = require("../Controllers/authControllers");
//db criada no mongo chamada users

router.get("/all", userController.getAll); //users/all
router.post("/create", userController.createUser); //users/create
router.post("/login", authController.login);//users/login
router.patch("/update/:id", userController.updateUserById);//users/update/ digitar o id, tem no getall
router.delete("/delete/:id", userController.deleteUserById);//users/delete/ digitar o id, tem no getall

module.exports = router;
