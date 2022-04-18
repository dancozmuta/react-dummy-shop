import React, { Component } from "react";
import Product from "./Product";
import "./Productslist.scss";

class Productlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          products: json,
        });
      });
  }
  render() {
    var { isLoaded, products } = this.state;
    if (!isLoaded) return <p>The products are loading...</p>;
    else {
      return (
        <div className="container">
          <p><b>{products.length}</b> products found</p>
          <div className="row">
            {products.map((product) => (
              <Product
                productSKU={product.id}
                title={product.name}
                price={product.price}
                image={product.image_link}
              ></Product>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Productlist;
