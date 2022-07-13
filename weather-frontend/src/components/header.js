import React, { useState } from "react";
import Card from "./card";
import axios from "axios";
function Header() {
  const [value, setValue] = useState("");
  const [data, SetData] = useState();

  function handleSubmit(e) {
    e.preventDefault(e);
    axios
      .post("http://localhost:5000/weather", { cityName: value })
      .then((response) => {
        SetData(response?.data);
      });
  }

  return (
    <div>
      <h2
        className="text-center"
        style={{
          color: "white",
        }}
      >
        Weather Application
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="container col-md-5 d-flex mt-4">
          <input
            type="text"
            placeholder="Enter here city name"
            value={value}
            className=" form-control"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="search" className="btn btn-outline-info ms-2 ">
            {" "}
            Search
          </button>
        </div>
      </form>
      {/* <image
        src={
          "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      /> */}
      {data && <Card data={data} />}
    </div>
  );
}

export default Header;
