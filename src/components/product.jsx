import React, { Component } from "react";
import { Button } from "./Button";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <div className="product--container" product-sku={this.props.productSKU}>
        <a href="google.de">
          <img src={this.props.image} alt="product" />
          <div className="product--info">
            <h2>{this.props.title}</h2>
            <span className="price">{this.props.price} €</span>
          </div>
        </a>
        <Button
              onClick={() => {
                console.log("Button was clicked");
              }}
              type={"button"}
              buttonStyle={"btn--secondary-default"}
              buttonSize={"btn--full"}
            >
              Add to cart
            </Button>
      </div>
    );
  }
}

export default Product;
