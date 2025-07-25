import { Request, Response } from 'express';
import { Invoice } from '../models/invoice';

export class InvoicesController {
    private invoices: Invoice[] = [];

    public createInvoice(req: Request, res: Response): void {
        const newInvoice: Invoice = req.body;
        this.invoices.push(newInvoice);
        res.status(201).json(newInvoice);
    }

    public getInvoices(req: Request, res: Response): void {
        res.status(200).json(this.invoices);
    }
}