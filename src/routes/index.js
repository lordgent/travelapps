const express = require("express");
const router = express.Router();
const {authuser, AuthAdm} = require('../middleware/auth')

const {SignUp, signIn, verifyAccount} = require('../controllers/auth');
const {CreateCategory} = require('../controllers/categories');

router.post('/register', SignUp);
router.post('/login', signIn);
router.put('/verify', authuser, verifyAccount);

router.post('/category', authuser, AuthAdm, CreateCategory);

module.exports = router;
