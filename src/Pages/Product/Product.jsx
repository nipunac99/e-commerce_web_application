import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

const Product = () => {

  /** image change */
  const [selectedImage, SetSelectedImg] = useState(0);

  /** Quantity */
  const [quantity, SetQuantity] = useState(1);

  const image = [
    "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={image[0]} alt="" onClick={(e) => SetSelectedImg(0)} />
          <img src={image[1]} alt="" onClick={(e) => SetSelectedImg(1)} />
        </div>
        <div className="mainImage">
          <img src={image[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus expedita nam consectetur laborum, facilis hic minus
          praesentium porro placeat quaerat, ipsam, soluta sunt aperiam nulla.
        </p>
        <div className="quantity">
          <button
            onClick={() => SetQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>

          {quantity}

          <button onClick={() => SetQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add to cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> Add to wish List
          </div>
          <div className="item">
            <BalanceIcon /> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: POLO</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
