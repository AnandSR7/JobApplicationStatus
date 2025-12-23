//company,role,status of appln
export default function JobCard({ company, role, status }) {
  return (
    <div className="job-card">
      <h3>{company}</h3>
      <p>{role}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
}
