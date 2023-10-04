//get bag id from route params

import { useNavigate, useParams } from "react-router-dom";
import { OrderData } from "../../types/orderData";
import StopIcon from "@mui/icons-material/Stop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./bag-view.css";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export const BagView = () => {
  //get bag id from route params
  const navigate = useNavigate();

  const { orderID, bagID } = useParams();
  const { data }: OrderData = require("../../packing.json");
  console.log(orderID);

  if (!bagID) {
    navigate(-1);
  }

  const bag = data.order_details.bag_list[+(bagID ?? 0)];

  if (!bag) {
    navigate(-1);
  }

  return (
    <div>
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

        <div className="container-body">
          <div className="allies">
            <div className="left-alley-header">
              <p>Left Alley</p>
              <ArrowBackRoundedIcon
                style={{
                  backgroundColor: "#c7efc0",
                }}
              />
            </div>
            <div className="right-alley-header">
              <p>Right Alley</p>{" "}
              <ArrowForwardRoundedIcon
                style={{
                  backgroundColor: "#ffbc39",
                }}
              />
            </div>
          </div>
          <div className="missing">
            <p>Missing Candies</p>
          </div>
        </div>

        <div className="all-items">
          <div className="item-container">
            {bag.candies.map((candy, index) => (
              <React.Fragment key={index}>
                <div
                  className={
                    candy.alley_side === "left" ? "item-left" : "item-right"
                  }
                >
                  <p>
                    {candy.total_amount} x {candy.short_code}
                  </p>
                  <Checkbox
                    sx={{
                      color: "#69cf57",
                      "&.Mui-checked": {
                        color: "#69cf57",
                      },
                    }}
                  />
                  <img src={candy.image} alt="" height={100} width={100} />
                </div>
                {index % 2 === 1 && (
                  <div className="straight-lines">
                    <hr className="hr-left" />

                    <hr className="hr-right" />
                  </div>
                )}
              </React.Fragment>
            ))}
            {bag.candies.length % 2 === 1 && (
              <div className="straight-lines">
                <hr className="hr-left" />

                <hr className="hr-right" />
              </div>
            )}
          </div>

          <div className="missing-container">
            No Missing candies in this bag
          </div>
        </div>

        <div className="bag-footer-1">
          <div className="bag-footer-1-left">
            <h3>Weight 0g of 385g</h3>
          </div>
          <div className="bag-footer-1-center">
            <h3>
              Bag {+(bagID ?? 0) + 1} of {data.order_details.bag_list.length}
            </h3>
          </div>
          <div className="bag-footer-1-right">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                marginRight: "10px",
                fontWeight: "bold",
              }}
              disabled={bagID === "0"}
            >
              Previous Bag
            </Button>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
              }}
              disabled={+(bagID ?? 0) + 1 >= data.order_details.bag_list.length}
            >
              Next Bag
            </Button>
          </div>
        </div>

        <div className="bag-footer-2">
          <div className="total-weight">
            <h2>Total Weight 0g of {data.order_details.total_weight}g</h2>
          </div>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              fontWeight: "bold",
            }}
            disabled={bagID === "0"}
          >
            Complete Order
          </Button>
        </div>
      </div>
      <div className="footer">
        <Button
          variant="contained"
          color="primary"
          style={{
            marginRight: "10px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: "bold",
          }}
          size="large"
          className="previous-bag"
        >
          Select All
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{
            marginLeft: "10px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: "bold",
          }}
        >
          Unselect All
        </Button>
      </div>
    </div>
  );
};
