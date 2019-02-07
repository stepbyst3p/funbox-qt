import React from 'react';
import styles from './ProductCard.module.css'

const ProductWeight = (props) => 	{
	const {weight} = props;
	return (
	 	<div className={styles.productWeight}>
            <div className={styles.productWeightAmount}>{weight}</div>
            <div className={styles.productWeightUnit}>кг</div>
      	</div>
	)	
}

export default ProductWeight