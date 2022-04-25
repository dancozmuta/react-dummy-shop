import "./StarRating.scss";
import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";

class StarRating extends Component {
  state = {};
  render() {
    return (
      <div className="ratingbox">
        <ReactStars
          size={12}
          count={5}
          value={this.props.ratingValue}
          isHalf={true}
          edit={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          filledIcon={<i className="fa fa-star"></i>}
          color={"#86754d"}
          activeColor={"#86754d"}
        />
        <span>({this.props.ratingCount})</span>
      </div>
    );
  }
}

export default StarRating;

