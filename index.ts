export interface Quotation {
    id: string;
    customerName: string;
    customerEmail: string;
    items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        totalPrice: number;
    }>;
    totalAmount: number;
    tax: number;
}

export interface Invoice {
    id: string;
    customerName: string;
    customerEmail: string;
    items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        totalPrice: number;
    }>;
    totalAmount: number;
    tax: number;
}