import React from "react";
import styles from "./ProductCard.module.css";
const ProductBottom = ({
  isDisabled,
  isSelected,
  selectProduct,
  status,
  flavour,
  description
}) => {
  switch (status) {
    case "selected":
      return (
        <div
          className={
            styles.productDescription + " " + styles.productDescription
          }
        >
          {description}
        </div>
      );
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
        <div className={styles.productDescription + " " + styles.productCta}>
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#" className={styles.productCtaLink} onClick={selectProduct}>
            купи
          </a>
        </div>
      );
  }
};

export default ProductBottom;
