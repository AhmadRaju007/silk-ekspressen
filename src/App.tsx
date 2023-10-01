import { useEffect } from "react";
import { Modal } from "./components/modal/modal";
// import { data } from "../packing.json";

function App() {
  const orderData = require("./packing.json");
  console.log(orderData);

  //need a modal which is opened by default in the center of the App div
  return <Modal />;
}

export default App;
