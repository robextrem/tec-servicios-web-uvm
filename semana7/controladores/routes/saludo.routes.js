import { response, Router } from 'express';
import { getSaludo, getDespedida } from '../controllers/saludo.controller.js';
import { sumar } from '../controllers/suma.controller.js';

const router = Router();

router.get('/saludo', getSaludo);
router.get('/suma', sumar)
router.post('/despedir', getDespedida)

export default router;
