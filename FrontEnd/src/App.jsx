import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import JobForm from "./components/JobForm";
import Navbar from "./components/Navbar";
import { fetchJobs, addJobApi } from "./services/api";

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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard jobs={jobs} />} />
        <Route path="/add" element={<JobForm addJob={addJob} />} />
      </Routes>
    </>
  );
}
