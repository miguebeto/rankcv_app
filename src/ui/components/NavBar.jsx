import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {
  const { startLogout, user } = useAuthStore();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Characters
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/episodes"
          >
            Episodes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/locations"
          >
            Locations
          </NavLink>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark mb-2 px-2">
        <span className="navbar-brand">
          <i className="fas fa-calendar-alt"></i>
          &nbsp; {user.name}
        </span>

        <button className="btn btn-outline-danger" onClick={startLogout}>
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          <span>Salir</span>
        </button>
      </div>
    </nav>
  );
};
