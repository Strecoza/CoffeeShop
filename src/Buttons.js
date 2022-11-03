import React from 'react';
function Buttons({filteredProducts}){
    return(
        <div>
            <button className="filter" onClick = {() => filteredProducts("coffee")}>Coffee beans</button>
            <button className="filter" onClick = {() => filteredProducts("cacao")}>Cacao beans</button>
            <button className="filter" onClick = {() => filteredProducts("dessert")}>Desserts</button>
            <button className="filter" onClick = {() => filteredProducts("food")}>Food</button>  
            <button className="filter" onClick = {() => filteredProducts("drink")}>Drinks</button>
        </div>
    )
}

export default Buttons;