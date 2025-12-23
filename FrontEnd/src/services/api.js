const API_URL = "http://localhost:5016/api/jobs";

export async function fetchJobs() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addJobApi(job) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}
