import React, { Component } from "react";
import Product from "../../Components/Product";
import "./Products.scss";

class Productlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const url = "https://prdcts-api.herokuapp.com/products";
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          products: json,
        })
    });
  }

  render() {
    var { isLoaded, products } = this.state;
    if (!isLoaded) return <p>The products are loading...</p>;
    else {
        console.log('products', products);
      return (
        <div className="container">
          <p><b>{products.length}</b> products found</p>
          <div className="row">
            {products && products.length ? products.map(product => (
              <Product
                key={product.productSKU}
                brand={product['productlist-item'].brand}
                name={product['productlist-item'].name} 
                categ={product['productlist-item'].category}
                image={product['productlist-item']['picture']['src']}
                imageFlip={ product['productlist-item']['picture']['dataSrcFlip'] ? product['productlist-item']['picture']['dataSrcFlip'] : product['productlist-item']['picture']['src'] }
                link={product['productlist-item'].link.href}
                price={product['productlist-item'].price ? product['productlist-item'].price.price.text : null}
                currency={product['productlist-item'].price ? product['productlist-item'].price.price.currency : product['productlist-item']["price--crossed"].price.currency}
                priceCrossed={product['productlist-item']["price--crossed"] ? product['productlist-item']["price--crossed"].price.text : null}
                priceReduced={product['productlist-item']["price--reduced"] ? product['productlist-item']["price--reduced"].price.text : null}  
                ratingCount={product['productlist-item'].rating.count}        
              ></Product>
            )) : null }
          </div>
        </div>
      );
    }
  }
}

export default Productlist;