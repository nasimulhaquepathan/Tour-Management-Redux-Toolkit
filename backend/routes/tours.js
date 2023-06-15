import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourControllers.js';
// import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router()


router.post('/create',  createTour);
router.delete('/:id',  deleteTour);
router.put('/update/:id',  updateTour);
router.get('/:id', getSingleTour);
router.get('/', getAllTour);

// get tour by search //
router.get('/search/getTourBySearch', getTourBySearch )
router.get('/search/getFeatureTour', getFeaturedTour )
router.get('/search/getTourCount', getTourCount )

export default router;