import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import api from '../../api';


const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <CardContainer products={ products } />
        </>
    );
};

export default HomePage;