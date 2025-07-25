import { Router } from 'express';
import InvoicesController from '../controllers/invoicesController';

const router = Router();
const invoicesController = new InvoicesController();

export function setInvoicesRoutes(app: Router) {
    app.post('/invoices', invoicesController.createInvoice.bind(invoicesController));
    app.get('/invoices', invoicesController.getInvoices.bind(invoicesController));
}