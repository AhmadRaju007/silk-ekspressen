import { Modal } from "./components/modal/modal";
import { OrderData } from "./types/orderData";
// import { data } from "../packing.json";

function App() {
  const { data }: OrderData = require("./packing.json");

  //need a modal which is opened by default in the center of the App div
  return <Modal orderName={data.order_details.order_tracking_id} />;
}

export default App;
