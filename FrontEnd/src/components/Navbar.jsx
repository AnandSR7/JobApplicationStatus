import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Job Application Tracker</h3>
      <Link to="/add" className="add-btn">
        Add Job
      </Link>
    </nav>
  );
}
