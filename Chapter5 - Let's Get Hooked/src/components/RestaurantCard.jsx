import React from 'react';
import { FaStar } from "react-icons/fa";
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <div className='image'>
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h4 className='rating'><FaStar color="orange"/> {avgRating}</h4>
        </div>
        <div className='details'>
        <h2>{name}</h2>
        <div className="cuisine">
        <h4>{cuisines.join(", ")}</h4>
        <h3>
        {costForTwoString}
        </h3>
        </div>
        <span>
        <h4>{area}</h4>
          <h4>{lastMileTravelString}</h4>
        </span>
        </div>
      </div>
    );
  };

export default RestaurantCard