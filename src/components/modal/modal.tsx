import "./modal.css";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <ReportProblemRoundedIcon color="warning" />
          <h2>Attention</h2>
        </div>

        <div className="modal-body">
          <p>Are you ready to pack Order {}</p>
        </div>
        {/* add two buttons in one div which will be right aligned */}
        <div className="modal-footer">
          <button className="btn btn-primary">Yes</button>
          <button className="btn btn-secondary">No</button>
        </div>
      </div>
    </div>
  );
};
