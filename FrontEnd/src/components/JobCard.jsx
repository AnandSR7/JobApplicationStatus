import { FaTrash, FaEdit, FaFileCsv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function JobCard({
  id,
  company,
  role,
  status,
  onDelete,
  onFetchDetails,
}) {
  const [note, setNote] = useState("");
  const popoverRef = useRef(null);
  const navigate = useNavigate();

  const onClickNotes = async () => {
    if (note) {
      setNote("");
      return;
    }

    try {
      const details = await onFetchDetails(id);
      setNote(details?.notes || "No notes available...");
    } catch {
      setNote("Failed to load notes");
    }
  };

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setNote("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{company}</h3>

        <div className="job-actions" style={{ position: "relative" }}>
          <FaEdit title="Edit" onClick={() => navigate(`/edit/${id}`)} />
          <FaFileCsv title="Notes" onClick={onClickNotes} />

          {note && (
            <div ref={popoverRef} className="note-popover">
              {note}
            </div>
          )}

          <FaTrash title="Delete" onClick={() => onDelete(id)} />
        </div>
      </div>

      <p>{role}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
}
