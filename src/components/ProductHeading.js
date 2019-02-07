import React from 'react';
import styles from './ProductCard.module.css'

const ProductHeading = (props) => 	{
	const {title, subtitle, flavour} = props;
	return (
		<>
			<div className={styles.productSubtitle}>{subtitle}</div>
			<div className={styles.productTitle}>{title}</div>
			<div className={styles.productFlavour}>{flavour}</div>
		</>
	)	
}

export default ProductHeading