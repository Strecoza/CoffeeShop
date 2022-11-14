import React from "react";

const ButtonDelete = ({ deleteProduct, id }) => {
	return (
		<button type='button' onClick={()=>{deleteProduct(id);}}>
			<img src='./img/icons/cross.svg' alt='Delete' />
		</button>
	);
};

export default ButtonDelete;