import './Books.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Books = (props) => {
    const { name, imageURL, price, author, _id } = props.books;
    const history = useHistory();
    const handleOrder = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top" src={imageURL} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{author}</h5>
                    <p className="card--text"><strong>{price}</strong></p>
                </div>
                <button onClick={() => handleOrder(_id)} className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default Books;