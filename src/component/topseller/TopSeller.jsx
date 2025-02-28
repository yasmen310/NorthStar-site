import React from 'react';
import {products} from './db';
const TopSeller = () => {
  return (
    <div>
        <h1 className="text-center my-3">Top Sellers</h1>
        <div className="container">
        <h5 className="text-center my-3">Browse our top-selling products</h5>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
              <div className="card border-0">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-primary">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default TopSeller;
