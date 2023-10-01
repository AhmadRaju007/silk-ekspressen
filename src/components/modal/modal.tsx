import "./modal.css";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { Button } from "@mui/material";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <ReportProblemRoundedIcon color="warning" />
          <h2>Attention</h2>
        </div>

        <div className="modal-body">
          <p>Are you ready to pack Order {`DEV-10013981`}?</p>
        </div>
        {/* add two buttons in one div which will be right aligned */}
        <div className="modal-footer">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#c7efc0",
            }}
            size="large"
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
