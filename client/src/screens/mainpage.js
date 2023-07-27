import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/movielist.js";

function Mainpage() {
  const location = useLocation();

  const [searchInputData, setSearchInputData] = useState("");
  const [data, setData] = useState({ movieNames: [] });

  const handleSearch = async (event) => {
    event.preventDefault();

    try{
      const queryParams = new URLSearchParams({ name: searchInputData });
      const url = `http://localhost:5000/api?${queryParams}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();
      console.log(resData)
      setData(resData);
    }catch(error){
      console.log('Error: ',error)
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-body">Email: {location.state.userEmail}</div>
      </div>
      <h3 className="my-3 mx-3">OMDb API</h3>
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search movie"
            aria-label="Search movie"
            aria-describedby="button-addon2"
            value={searchInputData}
            onChange={(event) => setSearchInputData(event.target.value)}
          />
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
      <MovieList data={data} />
    </>
  );
}

export default Mainpage;
