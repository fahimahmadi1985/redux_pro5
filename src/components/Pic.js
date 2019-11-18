import React from "react";
import { useState } from "react";
import getPictures from "../redux/getPictures";
import { connect } from "react-redux";

function Pic(props) {
  const [term, setTerm] = useState("car");

  const changeHandler = e => {
    setTerm(e.target.value);
  };
  return (
    <div>
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
          onClick={() => props.fetchPictures(term)}
        />
      </div>
      <div className="row d-flex justify-content-center m-3">
        {props.picList &&
          props.picList.map(pic => (
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

//define mapStateToProps
const mapStateToProps = state => {
  return {
    picList: state.pics
  };
};

//define mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    fetchPictures: keyword => dispatch(getPictures(keyword || "football"))
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(Pic);
