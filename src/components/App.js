import React, { Component } from "react";
import ProductsList from "./ProductsList";
import styles from "./App.module.css";
class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <ProductsList />
      </div>
    );
  }
}


export default App;
