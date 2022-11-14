
import React from "react";
import "./cart.css"

import Cart from "./Cart"
import CartTotal from "./CartTotal";

function CartPage() {
	return (
		<section className="section-cart">
			<div className="section-cart__header">
				<div className="container">
					<h1 className='cart-title'>Shopping cart</h1>;
				</div>
			</div>
			<div className='section-cart__body'>
				<div className="container">
					<header className='cart-header'>
						<div className='cart-header__title'>Name</div>
						<div className='cart-header__count'>Qty</div>
						<div className='cart-header__cost'>$</div>
					</header>
					<Cart />
				</div>
			</div>
			<div className='section-cart__footer'>
				<div className="container">
					<CartTotal/>
				</div>
			</div>
    </section>
	);
}

export default CartPage;
