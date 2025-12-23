import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function JobForm({ addJob }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "",
    notes: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", form);
    addJob(form);
    navigate("/");
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
        />

        <input
          name="role"
          placeholder="Job Title"
          value={form.role}
          onChange={handleChange}
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
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
