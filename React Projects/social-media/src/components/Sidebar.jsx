const Sidebar = ({ user }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", minHeight: "100vh" }}>
      <div className="d-flex flex-column align-items-center mb-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="rounded-circle mb-2"
          width={64}
          height={64}
        />
        <span className="fs-5 text-white">{user.name}</span>
      </div>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true">
              <use xlinkHref="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true">
              <use xlinkHref="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img
            src={user.avatar}
            alt="avatar"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>{user.name}</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
