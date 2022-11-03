import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

  
function Products({itemForSale}){
        itemForSale.map((element =>{
            const {id, image, itemName, price} = element;

            return(
                <div className="product">
                    <div class="col-md-3">
                        <div class="card" key={id}>
                            <img src={image} class="card-img-top" alt="Product"/>
                            <div class="card-body">
                                <h5 class="card-title">{itemName}</h5>
                                <p class="card-text">$ {price}</p>
                                <a href="Contacts.js" class="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }))}
  


export default Products;