import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function JobForm({ addJob, updateJob, jobs }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    notes: "",
  });

  const editingJob = jobs?.find((j) => j.id === id);

  useEffect(() => {
    if (editingJob) {
      setForm({
        company: editingJob.company,
        role: editingJob.role,
        status: editingJob.status,
        notes: editingJob.notes || "",
      });
    }
  }, [editingJob]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editingJob) {
      await updateJob(id, form);
    } else {
      await addJob(form);
    }

    navigate("/");
  }

  return (
    <div className="job-form-container">
      <h2>
        {editingJob ? "Edit Application details" : "Add Application details"}
      </h2>

      <form className="job-form" onSubmit={handleSubmit}>
        <input
          placeholder="Company Name"
          name="company"
          value={form.company}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          placeholder="Role you applied"
          value={form.role}
          onChange={handleChange}
          required
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes..."
          value={form.notes}
          onChange={handleChange}
        />

        <button type="submit">{editingJob ? "Update" : "Save"}</button>
      </form>
    </div>
  );
}
