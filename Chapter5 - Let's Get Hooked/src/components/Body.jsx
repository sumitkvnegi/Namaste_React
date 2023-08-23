import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { LuSettings2 } from "react-icons/lu";

const Body = () => {
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <div>
      <div className="search-container">
        <input type="text" className="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search a restaurant you want..." />
        <button className="search-btn" onClick={()=>{
          if(searchText){
            const filterData = restaurants.filter((i) => i.data?.name.toLowerCase().includes(searchText.toLowerCase()));
            setRestaurants(filterData);
            setSearchText("");
          }else{
            setRestaurants(restaurantList);
          }
        }}>
          Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>setToggle(!toggle)}>
          <LuSettings2 />
        </button>
        {toggle && (
          <div>
            <button
              className="option"
              onClick={() => {
                setRating(0);
              }}
            >
              All Restaurants
            </button>
            <button
              className="option"
              onClick={() => {
                setRating(4);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        )}
      </div>
      <div className="res-container">
        {restaurants
          .filter((restaurant) => restaurant.data.avgRating >= rating)
          .map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))}
      </div>
    </div>
  );
};

export default Body;
