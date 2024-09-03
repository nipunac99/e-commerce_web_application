import React from 'react'
import './Card.scss'
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='card'>Card</div>
    <div className="image">
        <img src={item.img1} alt="" className="firstimage" />
        <img src={item.img2} alt="" className="secondimage" />
    </div>
    <h2>{item.title}</h2>
    <div className="prices">
        <h3>${item.oldprice}</h3>
        <h3>${item.price}</h3>
    </div>
    </Link>
  )
}

export default Card