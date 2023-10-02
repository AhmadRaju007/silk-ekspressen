//get bag id from route params

import { useParams } from "react-router-dom";
import { OrderData } from "../../types/orderData";
import StopIcon from "@mui/icons-material/Stop";
import "./bagView.css";

export const BagView = () => {
  //get bag id from route params

  const { orderID } = useParams();
  const { data }: OrderData = require("../../packing.json");

  const bags = data.order_details.bag_list;

  return (
    <div className="bag-view">
      <div className="bag-view-header">
        <div className="bag-view-order">
          <h2>DEV-{data.order_id}</h2>
        </div>
        <div className="bag-view-stop">
          <StopIcon />
          <h2>Stop packing order</h2>
        </div>
      </div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <textarea name="" id="">
        asds
      </textarea>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <textarea name="" id="">
        asds
      </textarea>

      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <textarea name="" id="">
        asds
      </textarea>

      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <div>test &nbsp</div>
      <textarea name="" id="">
        asds
      </textarea>
      <div className="bag-view-footer">Footer</div>
    </div>
  );
};
