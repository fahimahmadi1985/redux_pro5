import React, { useState, useEffect } from "react";
import "./App.css";

export default function App(props) {
  const [term, setTerm] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const changeHandler = e => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    if (startSearch) {
      console.log("test");
      props.getPics(term);
      setStartSearch(false);
    }
  });

  return (
    <div className="container">
      <div className="bg-secondary container border border-1 border-dark m-5 row rounded p-3">
        <input
          type="text"
          onChange={changeHandler}
          className="form-control col-8 mr-4"
          placeholder="Enter a type of pictures..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary col-3 p-2 form-control"
          onClick={e => {
            e.preventDefault();
            setStartSearch(true);
          }}
        />
      </div>
      <div className="row d-flex justify-content-center m-3">
        {props.pics.map(pic => (
          <img
            src={pic.urls.thumb}
            alt={pic.id}
            key={pic.id}
            className="col-md-3 col-sm-10 border border-1 border-light rounded mb-3"
            style={{ marginLeft: "1rem", marginBotton: "1rem" }}
          />
        ))}
      </div>
    </div>
  );
}
