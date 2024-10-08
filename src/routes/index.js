import express from 'express'
import authRouter from './auth'
import cloudinaryRouter from './cloudinary'
import productRouter from './product'
import cartRouter from './cart'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/products', productRouter)
router.use('/cart', cartRouter)
router.use('/cloudinary', cloudinaryRouter)

export default router
