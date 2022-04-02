const express = require("express");
const router = express.Router();


const {uploadFile} = require('../middleware/uploadFile')
const {authuser, AuthAdm} = require('../middleware/auth')


const {SignUp, signIn, verifyAccount} = require('../controllers/auth');
const {CreateCategory, getCategories} = require('../controllers/categories');
const {createTrip, getTrip} = require('../controllers/trip')

const {createStatus, getPaymentStatus} = require('../controllers/payment-status')

const {createtTransaction, getTransactionByIduser} = require('../controllers/transaction')

// Auth
router.post('/register', SignUp);
router.post('/login', signIn);
router.put('/verify', authuser, verifyAccount);

// Categories
router.post('/category', authuser, AuthAdm, CreateCategory);
router.get('/categories', authuser, getCategories);

// Trip
router.post('/trip', authuser, AuthAdm, uploadFile("imgTrip"), createTrip)
router.get('/trips', authuser, getTrip)

// satus payment
router.post('/payment-status', authuser, AuthAdm, createStatus)
router.get('/payment-status', authuser, AuthAdm, getPaymentStatus)

// Transaction
router.post('/transaction', authuser, createtTransaction)
router.get('/transaction-user', authuser, getTransactionByIduser)


module.exports = router;
