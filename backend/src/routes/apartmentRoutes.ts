import { Router } from 'express';
import { getApartments, getApartmentById, createApartment } from '../controllers/apartmentController';

const router = Router();

router.get('/', getApartments);
router.get('/:id', getApartmentById);
router.post('/', createApartment);

export default router;
