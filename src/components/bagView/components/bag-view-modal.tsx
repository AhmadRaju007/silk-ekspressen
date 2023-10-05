import { Button } from "@mui/material";
import styles from "./bag-view-modal.module.css";
import { BagList } from "../../../types/orderData";
import { useNavigate } from "react-router-dom";

export const BagViewModal = (props: {
  bag: BagList;
  bagIndex: number;
  totalBags: number;
  handelModalClose: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h3>What should be packed?</h3>
        </div>

        <div className={styles.bag_name}>
          <h3>Pak i pose</h3>
        </div>

        <div className={styles.modal_body}>
          <div className={styles.bag_description}>
            <p>Weight: {props.bag.total_bag_weight} g</p>
            <p>Bag Name: {props.bag.name}</p>
            <p>
              Bag No: {props.bagIndex} of {props.totalBags}
            </p>
          </div>
          <div className={styles.bag_right}>
            <div className={styles.bag_image}>
              <img
                src="/W7A5101_fritlagt.png"
                alt=""
                height={200}
                width={120}
              />
            </div>
            <div className={styles.bag_right_buttons}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#c7efc0",
                }}
                size="large"
                onClick={props.handelModalClose}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="inherit"
                size="large"
                onClick={() => navigate("/")}
              >
                NO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
