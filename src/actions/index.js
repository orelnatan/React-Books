
export const addBookToCart = (book) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: book,
    }
}

export const removeBookFromCart = (book) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: book,
    }
}

export const deleteBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: book,
    }
}