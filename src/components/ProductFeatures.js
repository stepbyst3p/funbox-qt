import React from 'react';
import styles from './ProductCard.module.css'

const ProductFeatures = (props) => 	{
	const {features} = props;
	return ( 
		<ul className={styles.productFeatures}>
			{features && features.map((feature,index)=> (
				<li key={index}><span className={styles.productFeatureValue}>{feature.value}</span> {feature.caption}</li>
				))}
			</ul>
		)
}

export default ProductFeatures