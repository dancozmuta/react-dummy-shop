import React, { Component } from "react";
import StarRating from "./StarRating";
// import { Button } from "./Button";
import "./Product.scss";
class Product extends Component {
  render() {
    return (
      <div className="col-md-3 col-6 productlist-item-outer productlist-item-outer--overview">
        <div
          className="productlist-item productlist-item--overview "
          data-product-sku={this.props.sku}
        >
          <a
            className="col-12 productlist-item--overview__image"
            href={this.props.link}
          >
            <picture>
              <img
                className="picture__image"
                src={this.props.image}
                alt={this.props.title}
              />
            </picture>
            <img
              className="picture__image--flip"
              src={this.props.imageFlip}
              alt={this.props.title}
            />
          </a>

          <div className="productlist-item__title col-12">
            <div className="col-12">
              <a className="col-sm-12 column" href={this.props.link}>
                <span className="productlist-item-brand">
                  {this.props.brand}
                </span>
                <span className="productlist-item-title">
                  {this.props.name}
                </span>
                <span className="">{this.props.categ}</span>
              </a>
            </div>
          </div>
          <StarRating
                className="rating-container"
                ratingCount={this.props.ratingCount}
                rating={this.props.rating}
              />
                <div className="productlist-item-pricebox">
                  {this.props.price ? (
                    <span className="productlist-item-pricebox--price">
                      {this.props.price} {this.props.currency}
                    </span>
                  ) : (
                    <>
                      <span className="productlist-item-pricebox--price-crossed">
                        {this.props.priceCrossed} {this.props.currency}
                      </span>
                      <span className="productlist-item-pricebox--price-reduced">
                        {this.props.priceReduced} {this.props.currency}
                      </span>
                    </>
                  )}
                </div>

          {/* <Button
              onClick={() => {
                console.log("Button was clicked");
              }}
              type={"button"}
              buttonStyle={"btn--secondary-default"}
              buttonSize={"btn--full"}
            >
              Add to cart
            </Button> */}
        </div>
      </div>
    );
  }
}

export default Product;
