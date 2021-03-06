import './AllBooks.css';
import React from 'react';
import { useEffect, useState } from 'react';
import BookList from '../BookList/BookList';

const AllBooks = () => {

    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('https://dry-castle-85178.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div>
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(books => <BookList key={books._id} books={books}> </BookList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;