class QuotationsController {
    private quotations: any[] = [];

    public createQuotation(req: any, res: any): void {
        const quotation = req.body;
        quotation.id = this.quotations.length + 1; // Simple ID assignment
        this.quotations.push(quotation);
        res.status(201).json(quotation);
    }

    public getQuotations(req: any, res: any): void {
        res.status(200).json(this.quotations);
    }
}

export default QuotationsController;