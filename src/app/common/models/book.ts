export interface Book {
    author: Array<string>;
    inStock: boolean;
    _id: string;
    name: string;
    cost: number;
    currencyIn: string;
    description: string;
    imageUrl: string;
}