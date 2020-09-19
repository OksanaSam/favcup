import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState(null);

  const onClick = () => {
    const key = process.env.REACT_APP_API_KEY;
    const config = { headers: { "user-key": key } };
    const url =
      "https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city";
    const search = async () => {
      const response = await axios.get(url, config);
      setRestaurants(response.data.restaurants);
    };
    search();
  };

  return (
    <div className="App">
      <button onClick={onClick}>Find Me Coffee</button>
      {!restaurants ? null : (
        <ul>
          {restaurants.map((restaurant) => {
            console.log(restaurant.restaurant);
            return (
              <li key={restaurant.restaurant.id}>
                <h2>{restaurant.restaurant.name}</h2>
                <h3>Cuisine: {restaurant.restaurant.cuisines}</h3>
                <a href={restaurant.restaurant.url}>Link</a>
                <p>Price: {restaurant.restaurant.currency}</p>
                <p>
                  Average cost for two:{" "}
                  {restaurant.restaurant.average_cost_for_two}
                </p>
                <p>
                  Number of reviews: {restaurant.restaurant.all_reviews_count}
                </p>
                <p>
                  Average rating:{" "}
                  {restaurant.restaurant.user_rating.aggregate_rating}
                </p>
                <img src={restaurant.restaurant.thumb} alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
