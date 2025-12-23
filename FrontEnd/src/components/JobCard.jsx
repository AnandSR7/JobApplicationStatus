//company,role,status of appln
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function JobCard({
  id,
  company,
  role,
  status,
  onDelete,
  onEdit,
}) {
  const navigate = useNavigate();
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{company}</h3>
        <div className="job-actions">
          <FaEdit onClick={() => navigate(`/edit/${id}`)} />
          <FaTrash onClick={() => onDelete(id)} />
        </div>
      </div>
      <p>{role}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
}
