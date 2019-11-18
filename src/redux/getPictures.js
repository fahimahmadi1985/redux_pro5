import { loadingAction, successAction, failureAction } from "./actions";
import axios from "axios";

//FETCH DATA FROM API
const getPictures = term => {
  console.log("inside getPicures");
  console.log(term);
  return dispatch => {
    console.log("insie inner function term: ", term);

    dispatch(loadingAction());

    axios
      .get(`https://api.unsplash.com/search/photos/?query=${term}`, {
        params: {
          //query: term || "football",
          page: 1,
          per_page: 20
        },
        headers: {
          Authorization:
            "Client-ID a5aadbbf4877dad65ca06fdb284a01cad2b2c117fc746d5c0dfef2009c719cac"
        }
      })
      .then(response => {
        //pass to success action paylod
        console.log("inside response");
        dispatch(successAction(response.data.results));
      })
      .catch(error => {
        //pass to failure action payload
        dispatch(failureAction(error));
      });
  };
};

export default getPictures;
