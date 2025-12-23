import JobCard from "../components/JobCard";

export default function Dashboard({ jobs, onDelete, onFetchDetails }) {
  return (
    <div className="dashboard">
      <h1>My Job Applications</h1>

      {jobs.length === 0 && (
        <div className="empty-state">
          <img
            src="/no-jobs.png"
            alt="No job applications"
            className="empty-state-image"
          />
          <p>No job applications added yet</p>
          <p className="empty-subtext">
            Start tracking your job applications by adding one.
          </p>
        </div>
      )}

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            onDelete={onDelete}
            onFetchDetails={onFetchDetails}
          />
        ))}
      </div>
    </div>
  );
}
