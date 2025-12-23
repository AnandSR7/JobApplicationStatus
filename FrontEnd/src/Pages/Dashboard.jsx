//List of Job applications,Each job as a card,Status badge,Edit button
import JobCard from "../components/JobCard";
export default function Dashboard({ jobs }) {
  return (
    <div className="dashboard">
      <h2>My Applications</h2>
      {jobs.length === 0 && <p>No jobs added yet.</p>}

      <div className="job-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
