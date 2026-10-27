import { Link, useLocation } from 'react-router-dom';
import EmptyState from '../components/EmptyState.jsx';

// Catch-all page for any URL that does not match a route.
export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <title>Page not found · UserHub</title>
      <EmptyState
        code="404"
        title="Page not found"
        actions={
          <>
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
            <Link to="/users" className="btn btn-secondary">
              View Users
            </Link>
          </>
        }
      >
        Nothing lives at <code>{pathname}</code>. Check the address or use the links below.
      </EmptyState>
    </>
  );
}
