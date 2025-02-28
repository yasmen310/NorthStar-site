import React from 'react';
import styles from './newproduct.module.css';
import {products} from './db';
import "bootstrap/dist/css/bootstrap.min.css";

const NewProduct = () => {
  return (
    <div className={styles.newProductContainer}>
      <h1 className={styles.newProductTitle}>Discover NEW Arrivals</h1>
      <div className="container">
      <h5 className="text-center my-3">Recently added shirts!</h5>
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

export default NewProduct;
