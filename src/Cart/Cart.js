import React, { useEffect, useState } from "react";
import CartTotal from "./CartTotal";

import {data} from "../Data";

const Cart = () => {
	const [cart, setCart] = useState(data);
	const [total, setTotal] = useState({
			price: cart.reduce((prev, curr)=> prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr)=> prev + curr.count, 0)
	})

	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count , 0),
		});
	}, [cart])

	const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product)=> id !== product.id));
	}

	const increase = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: product.count + 1,
						priceTotal: (product.count + 1) * product.price,
					};
				}
				return product
			})
		})
	}

	const decrease = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

					return {
						...product,
						count: newCount,
						priceTotal: newCount * product.price,
					};
				}
				return product
			})
		})
	}

	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: value,
						priceTotal: value * product.price
					}
				}
				return product
			})
		})
	}
//нужна кнопка на добавление товара в корзину а это удалить до return


    return (
		<section className='cart'>
		
			<CartTotal total={total} />
		</section>
	);
}

export default Cart;