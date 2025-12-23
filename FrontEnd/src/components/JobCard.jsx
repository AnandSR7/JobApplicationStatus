//company,role,status of appln
import { FaTrash, FaEdit, FaFileCsv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function JobCard({ id, company, role, status, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{company}</h3>
        <div className="job-actions">
          <FaEdit title="Edit" onClick={() => navigate(`/edit/${id}`)} />
          <FaFileCsv title="Notes" />
          <FaTrash title="Delete" onClick={() => onDelete(id)} />
        </div>
      </div>
      <p>{role}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
}
