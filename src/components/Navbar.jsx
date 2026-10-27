import { Link, NavLink } from 'react-router-dom';

const links = [
  // `end` stops "/" from matching every URL, so Home is only active on "/".
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  // No `end` here: Users stays highlighted on /users/:id as well.
  { to: '/users', label: 'Users' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Main navigation">
        <Link to="/" className="brand">
          <span className="brand-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <span className="brand-name">UserHub</span>
        </Link>

        <ul className="nav-links">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
