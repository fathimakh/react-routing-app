import { Outlet, ScrollRestoration } from 'react-router-dom';

// Shared shell for every route. The matched page renders in <Outlet />.
export default function Layout() {
  return (
    <div className="layout">
      <main className="container main">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
