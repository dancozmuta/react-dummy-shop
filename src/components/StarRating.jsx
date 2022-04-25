import React, { Component } from "react";
import "./StarRating.scss";
import { FaRegStar, FaStar } from "react-icons/fa";

class StarRating extends Component {
  render() {
    return (
      <div className="ratingbox">
        {[...Array(5)].map((star) => {
          return (
            <div className="stars-outer" style={{ color: "#86754d" }}>
              <FaRegStar className="stars-inner" size={14} />
              <FaStar className="stars-inner" size={14} />
            </div>
          );
        })}
        <span>({this.props.ratingCount})</span>
      </div>
    );
  }
}

export default StarRating;
