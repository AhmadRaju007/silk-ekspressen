import { useNavigate, useParams } from "react-router-dom";
import { OrderData } from "../../types/orderData";
import StopIcon from "@mui/icons-material/Stop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import styles from "./bag-view.module.css";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { BagViewModal } from "./components/bag-view-modal";

export const BagView = () => {
  const navigate = useNavigate();

  const { orderID, bagID } = useParams();
  const { data }: OrderData = require("../../packing.json");

  //take a useSTate to cover modal open and close

  const [isModalOpen, setIsModalOpen] = useState(true);

  const bagIndex = bagID ? +bagID + 1 : 1;

  if (!bagIndex) {
    console.log("bagIndex", bagIndex);
    navigate("/", { replace: true });
  }

  const bag = data.order_details?.bag_list[+(bagID ?? 0)];

  if (!bag || bag === undefined || !bag.candies) {
    console.log("bag", bagIndex);
    navigate("/", { replace: true });
  }

  console.log(bag);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title}>
            <div className={styles.order}>
              <h2>DEV-{data.order_id}</h2>
            </div>
            <div className={styles.stop}>
              <StopIcon />
              <h2>Stop packing order</h2>
            </div>
          </div>
          <div className={styles.header_body}>
            <div className={styles.header_body_left}>
              <div className={styles.assignments}>
                <AssignmentIcon />
                <p>DEV-{data.order_id}</p>
              </div>

              <div className={styles.employee}>
                <ShoppingBagOutlinedIcon />
                <p>{`${data.employee} | Bag 1 of 1`}</p>
              </div>

              <div className={styles.weight}>
                <ScaleOutlinedIcon />
                <p>{`Weight 0g of 385g`}</p>
              </div>
            </div>

            <div className={styles.header_body_right}>
              <p>Packing: {data.employee}</p>
            </div>
          </div>
        </div>

        <div className={styles.container_body}>
          <div className={styles.allies}>
            <div className={styles.left_alley_header}>
              <p>Left Alley</p>
              <ArrowBackRoundedIcon
                style={{
                  backgroundColor: "#c7efc0",
                }}
              />
            </div>
            <div className={styles.right_alley_header}>
              <p>Right Alley</p>{" "}
              <ArrowForwardRoundedIcon
                style={{
                  backgroundColor: "#ffbc39",
                }}
              />
            </div>
          </div>
          <div className={styles.missing}>
            <p>Missing Candies</p>
          </div>
        </div>

        <div className={styles.all_items}>
          <div className={styles.item_container}>
            {bag.candies?.map((candy, index) => (
              <React.Fragment key={index}>
                <div
                  className={
                    candy.alley_side === "left"
                      ? styles.item_left
                      : styles.item_right
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
                  <div className={styles.straight_lines}>
                    <hr className={styles.hr_left} />

                    <hr className={styles.hr_right} />
                  </div>
                )}
              </React.Fragment>
            ))}
            {bag.candies.length % 2 === 1 && (
              <div className={styles.straight_lines}>
                <hr className={styles.hr_left} />

                <hr className={styles.hr_right} />
              </div>
            )}
          </div>

          <div className={styles.missing_container}>
            No Missing candies in this bag
          </div>
        </div>

        <div className={styles.bag_footer_1}>
          <div className={styles.bag_footer_1_left}>
            <h3>Weight 0g of 385g</h3>
          </div>
          <div className={styles.bag_footer_1_center}>
            <h3>
              Bag {bagIndex} of {data.order_details.bag_list.length}
            </h3>
          </div>
          <div className={styles.bag_footer_1_right}>
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
              disabled={bagIndex >= data.order_details.bag_list.length}
            >
              Next Bag
            </Button>
          </div>
        </div>

        <div className={styles.bag_footer_2}>
          <div className={styles.total_weight}>
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
      <div className={styles.footer}>
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
      {isModalOpen && (
        <BagViewModal
          bag={bag}
          bagIndex={bagIndex}
          totalBags={data.order_details.bag_list.length}
          handelModalClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
