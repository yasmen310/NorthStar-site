import React from 'react';
import {foundars} from './db';
const Foundars = () => {
  return (
      <div>
          <h1 className="text-center my-5">The Founders</h1>
          <div className="container">
          <div className="row mb-4">
            {foundars.map((foundar) => (
              <div key={foundar.id} className="col-md-3 col-sm-6 mb-4">
                <div className="card border-0">
                  <img src={foundar.image} className="card-img-top" alt={foundar.name} />
                  <div className="card-body text-left">
                    <h5 className="card-title">{foundar.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
  );
}

export default Foundars;
