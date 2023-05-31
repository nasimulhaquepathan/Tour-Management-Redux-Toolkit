import express from 'express';
import { current, login, logout, register } from '../controllers/authController.js';

const router = express.Router()

router.post('/register' , register)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/current' , current)

export default router;