import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar.jsx';

// Shared shell for every route: the navbar stays at the top of every page,
// and the matched page renders in <Outlet />.
export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="container main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">UserHub · A React Router demo built for Entri Elevate Assignment 11</div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
