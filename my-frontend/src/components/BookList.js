// src/components/BookList.js
import React, { useEffect, useState } from 'react';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2 className="text-2xl mb-4">รายการหนังสือ</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} className="border p-2 mb-2">
                        <h3 className="font-bold">{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <button className="bg-blue-500 text-white px-3 py-1">เช่าหนังสือ</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
