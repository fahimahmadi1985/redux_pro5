import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Pic from "./components/Pic";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Pic />
      </div>
    </Provider>
  );
}
