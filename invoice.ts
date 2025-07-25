export class Invoice {
    id: string;
    customerName: string;
    customerEmail: string;
    items: Array<{ description: string; quantity: number; unitPrice: number }>;
    totalAmount: number;
    tax: number;

    constructor(id: string, customerName: string, customerEmail: string, items: Array<{ description: string; quantity: number; unitPrice: number }>) {
        this.id = id;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.items = items;
        this.totalAmount = this.calculateTotal();
        this.tax = this.calculateTax();
    }

    private calculateTotal(): number {
        return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
    }

    private calculateTax(): number {
        return this.totalAmount * 0.15; // 15% tax rate
    }
}