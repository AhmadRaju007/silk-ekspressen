import styles from "./home-modal.module.css";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { Button } from "@mui/material";

export const Modal = (props: {
  orderName: string;
  onButtonSuccess: () => any;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <ReportProblemRoundedIcon color="warning" />
          <h2>Attention</h2>
        </div>

        <div className={styles.modal_body}>
          <p>Are you ready to pack Order {`DEV-${props.orderName}`}?</p>
        </div>

        <div className={styles.modal_footer}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#c7efc0",
            }}
            size="large"
            onClick={props.onButtonSuccess}
          >
            Yes
          </Button>
          <Button variant="contained" color="inherit" size="large">
            NO
          </Button>
        </div>
      </div>
    </div>
  );
};
