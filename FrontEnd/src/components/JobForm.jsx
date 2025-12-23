import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobForm({ addJob }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied", // default enum value
    notes: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addJob(form);
      navigate("/");
    } catch (err) {
      console.error("Save failed:", err.message);
    }
  }

  return (
    <div className="job-form-container">
      <h2>Add Job Application</h2>

      <form className="job-form" onSubmit={handleSubmit}>
        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          placeholder="Job Title"
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
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
