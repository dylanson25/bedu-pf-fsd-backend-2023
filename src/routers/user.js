const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user");
const { createUserSchema, updateUserSchema } = require("../validations/user");
const validator = require("../middlewares/validator");

router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.post("/user", validator.body(createUserSchema), createUser);
router.put("/user/:id", validator.body(updateUserSchema), updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
