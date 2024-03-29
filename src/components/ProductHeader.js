import React from "react";
import styles from "./ProductCard.module.css";

const ProductHeader = props => {
  const { title, subtitle, flavour } = props;
  return (
    <header>
      <div className={styles.productSubtitle}>{subtitle}</div>
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productFlavour}>{flavour}</div>
    </header>
  );
};

export default ProductHeader;
