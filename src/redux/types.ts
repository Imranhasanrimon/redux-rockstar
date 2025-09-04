// types.ts
export interface Book {
    _id: string;
    title: string;
    isbn: string;
    author: string;
    genre: string;
    description: string;
    copies: number;
    available: boolean;
}

export interface BorrowSummaryItem {
    book: {
        title: string;
        isbn: string;
    };
    totalQuantity: number;
}

export interface BorrowSummaryResponse {
    data: BorrowSummaryItem[];
    message?: string;
    success?: boolean;
}

export interface BorrowRequest {
    book: string;
    dueDate: string | null;
    quantity: number;
}

export interface BorrowResponse {
    success: boolean;
    message: string;
    data: {
        book: string;
        quantity: number;
        dueDate: string | null;
        _id: string;
        createdAt?: string;
        updatedAt?: string;
    };
}

//for bookApi

export interface BookListResponse {
    data: Book[];
    message?: string;
    success: boolean;
}

export interface BookResponse {
    data: Book;
    message?: string;
    success: boolean;
}

export interface AddBookRequest {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}

export interface AddBookResponse {
    success: boolean;
    message: string;
    data: Book;
}

export interface EditBookRequest {
    _id: string;
    body: Partial<AddBookRequest>;
}

export interface DeleteBookResponse {
    success: boolean;
    message: string;
}
