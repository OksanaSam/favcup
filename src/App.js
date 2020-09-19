import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const onClick = () => {
    const key = process.env.REACT_APP_API_KEY;
    const config = { headers: { "user-key": key } };
    const url =
      "https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city";
    const search = async () => {
      const response = await axios.get(url, config);
      console.log(response.data.restaurants[0]);
    };
    search();
  };
  return (
    <div className="App">
      <button onClick={onClick}>here</button>
    </div>
  );
}

export default App;
