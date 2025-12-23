const API_URL = "http://localhost:5016/api/jobs";

export async function fetchJobs() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addJob(job) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return res.json();
}
