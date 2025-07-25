export class Quotation {
    id: string;
    customerName: string;
    customerEmail: string;
    items: Array<{ description: string; quantity: number; unitPrice: number; total: number }>;
    totalAmount: number;
    tax: number;

    constructor(id: string, customerName: string, customerEmail: string, items: Array<{ description: string; quantity: number; unitPrice: number; total: number }>) {
        this.id = id;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.items = items;
        this.totalAmount = this.calculateTotalAmount();
        this.tax = this.calculateTax();
    }

    private calculateTotalAmount(): number {
        return this.items.reduce((sum, item) => sum + item.total, 0);
    }

    private calculateTax(): number {
        const taxRate = 0.15; // 15%
        return this.totalAmount * taxRate;
    }
}