import React from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";
import { products } from "../mock-data";

const ProductsList = () => {
  products[2].status = "disabled";
  return (
    <section className={styles.productsContainer}>
      <h2 className={styles.productsListHeader}>Ты сегодня покормил кота?</h2>
      <div className={styles.productsList}>
        {products &&
          products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
