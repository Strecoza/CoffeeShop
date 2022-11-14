import React from 'react';

import './cart.css';

const CartTotal = ({ total }) => {
	const { count, price } = total;
	const priceFormatter = new Intl.NumberFormat(); 

	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} Qty</div>
			<div className='cart-footer__price'>
				$ formatPrice(price).
			</div>
		</footer>
	);
};

export default CartTotal;