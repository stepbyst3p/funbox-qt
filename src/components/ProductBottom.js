import React from "react";
import styles from "./ProductCard.module.css";

const ProductBottom = ({ selectProduct, status, flavour, description }) => {
  switch (status) {
    case "selected":
      return <div className={styles.productDescription}>{description}</div>;
    case "disabled":
      return (
        <div
          className={
            styles.productDescription + " " + styles.productDisabledCaption
          }
        >
          Печалька, {flavour} закончился.
        </div>
      );
    default:
      return (
        <div className={styles.productDescription}>
          Чего сидишь? Порадуй котэ,{" "}
          <button className={styles.productCtaButton} onClick={selectProduct}>
            купи
          </button>
        </div>
      );
  }
};

export default ProductBottom;
