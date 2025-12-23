import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const isAddPage = location.pathname === "/add";
  return (
    <nav className="navbar">
      <h2 className="Gradient">JobTracker</h2>
      <div className="nav-links">
        {!isAddPage ? (
          <button className="add-btn">
            <Link to="/add">Add Job</Link>
          </button>
        ) : (
          <button className="add-btn">
            <Link to="/">My Applications</Link>
          </button>
        )}
      </div>
    </nav>
  );
}
