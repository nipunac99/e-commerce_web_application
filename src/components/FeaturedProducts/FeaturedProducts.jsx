import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      // img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Long Sleeve Graphic T-Shirt",
      // isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      // img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Long Sleeve Graphic T-Shirt",
      // isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      // img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Long Sleeve Graphic T-Shirt",
      // isNew: true,
      oldprice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          nesciunt nihil, reiciendis iusto laborum aspernatur unde, beatae,
          asperiores hic magni perferendis eius vel eum id!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
