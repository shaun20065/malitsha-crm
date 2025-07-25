import { Router } from 'express';
import QuotationsController from '../controllers/quotationsController';

const router = Router();
const quotationsController = new QuotationsController();

export function setQuotationsRoutes(app: Router) {
    app.post('/quotations', quotationsController.createQuotation.bind(quotationsController));
    app.get('/quotations', quotationsController.getQuotations.bind(quotationsController));
}