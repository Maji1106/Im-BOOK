import React from 'react';
import ProductList from './components/ProductList'; // นำเข้า ProductList

const App = () => {
    return (
        <div>
            <h1>Product List</h1>
            <ProductList /> {/* ใช้งาน ProductList */}
        </div>
    );
};

export default App;
