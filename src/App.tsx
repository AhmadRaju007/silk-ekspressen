import { useNavigate } from "react-router-dom";
import { Modal } from "./components/modal/modal";
import { OrderData } from "./types/orderData";
// import { data } from "../packing.json";

export const App = () => {
  const { data }: OrderData = require("./packing.json");
  const navigate = useNavigate();

  //need a modal which is opened by default in the center of the App div
  return (
    <Modal
      orderName={data.order_details.order_tracking_id}
      onButtonSuccess={() => navigate(`/bags/${data.order_id}`)}
    />
  );
};

export default App;
