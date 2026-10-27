import { Link } from 'react-router-dom';
import users from '../data/users.js';

const features = [
  {
    title: 'Multiple pages',
    text: 'Home, About, Users and User Detail each have their own URL, and switching between them never reloads the page.',
  },
  {
    title: 'Dynamic routes',
    text: (
      <>
        Every profile lives at <code>/users/:id</code>. The detail page reads the <code>id</code> from the URL
        with <code>useParams</code>.
      </>
    ),
  },
  {
    title: 'Active navigation',
    text: 'The navigation bar stays at the top of every page and highlights the section you are currently in.',
  },
];

export default function Home() {
  return (
    <>
      <title>Home · UserHub</title>

      <section className="hero">
        <p className="eyebrow">React Router demo</p>
        <h1>
          Welcome to <span className="gradient-text">UserHub</span>
        </h1>
        <p className="lead">
          UserHub is a small multi-page React application. Browse a directory of {users.length} users, open
          anyone&apos;s profile and move between pages instantly with client-side routing.
        </p>
        <div className="actions">
          <Link to="/users" className="btn btn-primary">
            Browse Users
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About this app
          </Link>
        </div>
      </section>

      <section className="feature-grid" aria-label="Features">
        {features.map((feature) => (
          <article key={feature.title} className="card feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
