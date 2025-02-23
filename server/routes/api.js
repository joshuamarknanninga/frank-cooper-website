import express from 'express';
import { submitContactForm } from '../controllers/apiController.js';

const router = express.Router();

// Contact form submission
router.post('/contact', submitContactForm);

export default router;