import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import api from '../../api';
import PlaceHolderContainer from '../ui/PlaceHolderContainer';
import Error from '../ui/Error';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(() => {
        setLoading(true);
        api.get('products/')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
                setError("");
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
                setError(error.response?.data?.message || error.message || "An unknown error occurred");
            });
    }, []);

    return (
        <>
            <Header />
            {loading ? (
                <PlaceHolderContainer />
            ) : (
                !error && <CardContainer products={products} />
            )}
            {error && <Error error={error} />}
        </>
    );
};

export default HomePage;