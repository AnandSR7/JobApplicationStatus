const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5016/api/jobs";

//To fetch details of Jobs
export async function fetchJobs() {
  const res = await fetch(API_URL);
  return res.json();
}
//To Add Job
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

//To delete a specific job
export async function deleteJobApi(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

// Fetch details of a specific job
export async function fetchJobById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch job details");
  }

  return response.json();
}

//To update a specific job
export async function updateJobApi(id, job) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to update job");
  }

  return response.json();
}
