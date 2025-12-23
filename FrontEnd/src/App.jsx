import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import JobForm from "./components/JobForm";
import Navbar from "./components/Navbar";
import {
  updateJobApi,
  deleteJobApi,
  fetchJobs,
  addJobApi,
  fetchJobById,
} from "./services/api";

export default function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  // Save job to backend
  async function addJob(job) {
    const savedJob = await addJobApi(job);
    setJobs([...jobs, savedJob]);
  }
  async function deleteJob(id) {
    await deleteJobApi(id);
    setJobs(jobs.filter((j) => j.id !== id));
  }
  async function updateJob(id, job) {
    const updated = await updateJobApi(id, job);
    setJobs(jobs.map((j) => (j.id === id ? updated : j)));
  }
  async function getJobDetails(id) {
    const jobDetails = await fetchJobById(id);
    return jobDetails;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              jobs={jobs}
              onDelete={deleteJob}
              onFetchDetails={getJobDetails}
            />
          }
        />
        <Route path="/add" element={<JobForm addJob={addJob} />} />
        <Route
          path="/edit/:id"
          element={
            <JobForm jobs={jobs} addJob={addJob} updateJob={updateJob} />
          }
        />
      </Routes>
    </>
  );
}
