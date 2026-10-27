import { Link } from 'react-router-dom';

const routes = [
  { path: '/', page: 'Home', description: 'Welcome message and quick links' },
  { path: '/about', page: 'About', description: 'What the app is and why it exists' },
  { path: '/users', page: 'Users', description: 'List of every user in the directory' },
  { path: '/users/:id', page: 'User Detail', description: 'Full profile of one user, picked by id' },
];

const techStack = [
  'React 19 with functional components',
  'React Router (react-router-dom)',
  'Vite for development and builds',
  'Plain CSS with Flexbox and Grid',
];

export default function About() {
  return (
    <>
      <title>About · UserHub</title>

      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>About UserHub</h1>
        <p className="lead">
          UserHub is a simple user directory that shows how routing works in a React single-page application.
        </p>
      </header>

      <div className="about-grid">
        <section className="card">
          <h2>Purpose</h2>
          <p>
            The app was built to practise React Router. Even though it is a single-page application, it behaves
            like a multi-page website: every page has its own URL, links can be bookmarked or shared, and the
            browser&apos;s back and forward buttons work as expected — all without a full page reload.
          </p>
          <p>
            The user data comes from a mock array, so the focus stays on components, pages and navigation rather
            than on a backend.
          </p>
        </section>

        <section className="card">
          <h2>Built with</h2>
          <ul className="check-list">
            {techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card">
        <h2>Routes</h2>
        <div className="table-wrapper">
          <table className="route-table">
            <thead>
              <tr>
                <th scope="col">Path</th>
                <th scope="col">Page</th>
                <th scope="col">Shows</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.path}>
                  <td>
                    <code>{route.path}</code>
                  </td>
                  <td>{route.page}</td>
                  <td>{route.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="actions">
        <Link to="/" className="btn btn-primary">
          <span aria-hidden="true">←</span> Back to Home
        </Link>
      </div>
    </>
  );
}
