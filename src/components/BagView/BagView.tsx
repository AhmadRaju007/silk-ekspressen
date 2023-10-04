//get bag id from route params

import { useNavigate, useParams } from "react-router-dom";
import { OrderData } from "../../types/orderData";
import StopIcon from "@mui/icons-material/Stop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./bagView.css";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export const BagView = () => {
  //get bag id from route params
  const navigate = useNavigate();

  const { orderID, bagID } = useParams();
  const { data }: OrderData = require("../../packing.json");
  console.log(data);

  if (!bagID) {
    navigate(-1);
  }

  const bag = data.order_details.bag_list[+(bagID ?? 0)];

  if (!bag) {
    navigate(-1);
  }

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

      <div className="item-container">
        <div className="items-body">
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
      </div>

      <div className="bag-footer">
        <div className="bag-footer-left">
          <p>Weight 0g of 385g</p>
        </div>
        <div className="bag-footer-center">
          <p>Bag 1 of 1</p>
        </div>
        <div className="bag-footer-right">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#c7efc0",
              color: "#000000",
              marginRight: "10px",
            }}
            size="large"
            className="previous-bag"
          >
            Previous Bag
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            style={{
              marginLeft: "10px",
            }}
          >
            Next Bag
          </Button>
        </div>
      </div>

      <div className="footer">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#c7efc0",
            color: "#000000",
            marginRight: "10px",
          }}
          size="large"
          className="previous-bag"
        >
          Select All
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          style={{
            marginLeft: "10px",
          }}
        >
          Unselect All
        </Button>
      </div>
    </div>
  );
};
