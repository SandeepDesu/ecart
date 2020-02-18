export interface Cart {
    userId: string;
    totalPrice?: number;
    totalItems?: number;
    orders: CartItems[];
    status?: string;
}


export interface CartItems {
    name: string;
    itemId: string;
    quantity: number;
    cost: number;
    currencyIn: string;
}