import React, { Component } from "react";
import styles from "./ProductCard.module.css";
import ProductHeading from './ProductHeading'
import ProductWeight from './ProductWeight'
import ProductFeatures from './ProductFeatures'
import ProductBottom from "./ProductBottom"
import catImage from "../cat.png";

class ProductCard extends Component {
  state = {
    status: ""
  };
  handleClick = e => {
    e.preventDefault();
    if (this.state.status === "selected") {
      this.setState({ status: "" });
    } else if (this.state.status === "") {
      this.setState({ status: "selected" });
    }
  };

  render() {
    const {
      subtitle,
      title,
      flavour,
      features,
      description,
      weight
    } = this.props;
    const cardStateClasses = {
      selected: styles.isSelected,
      disabled: styles.isDisabled
    };
    return (
      <article
        className={
          cardStateClasses[this.state.status]
            ? styles.productItem + " " + cardStateClasses[this.state.status]
            : styles.productItem
        }
        onClick={this.handleClick}
      >
        <div className={styles.productCard}>
          <ProductHeading title={title} subtitle={subtitle} flavour={flavour}/>
          <ProductFeatures features={features}/>
          <ProductWeight weight={weight} />
          <img src={catImage} className={styles.productImage} />
        </div>
          <ProductBottom
            status={this.state.status}
            selectProduct={this.state.selectProduct}
            flavour={flavour}
            description={description}
            className={styles.productBottom}
          />
      </article>
    );
  }
}

export default ProductCard;
