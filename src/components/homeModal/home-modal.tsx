import "./home-modal.css";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { Button } from "@mui/material";

export const Modal = (props: {
  orderName: string;
  onButtonSuccess: () => any;
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <ReportProblemRoundedIcon color="warning" />
          <h2>Attention</h2>
        </div>

        <div className="modal-body">
          <p>Are you ready to pack Order {`DEV-${props.orderName}`}?</p>
        </div>

        <div className="modal-footer">
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
