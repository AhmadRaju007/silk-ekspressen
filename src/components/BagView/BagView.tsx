//get bag id from route params

import { useParams } from "react-router-dom";
import { OrderData } from "../../types/orderData";
import StopIcon from "@mui/icons-material/Stop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import "./bagView.css";

export const BagView = () => {
  //get bag id from route params

  const { orderID } = useParams();
  const { data }: OrderData = require("../../packing.json");
  console.log(data);

  const bags = data.order_details.bag_list;

  return (
    <div className="container">
      <div className="header">
        <div className="header-title">
          <div className="order">
            <h2>DEV-{data.order_id}</h2>
          </div>
          <div className="stop">
            <StopIcon />
            <h2>Stop packing order</h2>
          </div>
        </div>
        <div className="header-body">
          <div className="header-body-left">
            <div className="assignments">
              <AssignmentIcon />
              <p>DEV-{data.order_id}</p>
            </div>

            <div className="employee">
              <ShoppingBagOutlinedIcon />
              <p>{`${data.employee} | Bag 1 of 1`}</p>
            </div>

            <div className="weight">
              <ScaleOutlinedIcon />
              <p>{`Weight 0g of 385g`}</p>
            </div>
          </div>

          <div className="header-body-right">
            <p>Packing: {data.employee}</p>
          </div>
        </div>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
};
