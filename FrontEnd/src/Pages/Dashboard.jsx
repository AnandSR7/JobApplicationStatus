import JobCard from "../components/JobCard";

export default function Dashboard({ jobs, onDelete }) {
  return (
    <div className="dashboard">
      <h1>My Job Applications</h1>

      {jobs.length === 0 && <p>No jobs added yet.</p>}

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
