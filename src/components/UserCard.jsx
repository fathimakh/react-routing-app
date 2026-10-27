import { Link } from 'react-router-dom';
import Avatar from './Avatar.jsx';

// One entry in the Users list. The whole card is a link to /users/:id.
export default function UserCard({ user }) {
  return (
    <Link to={`/users/${user.id}`} className="card user-card">
      <Avatar user={user} />
      <span className="user-card-body">
        <span className="user-card-name">{user.name}</span>
        <span className="user-card-email">{user.email}</span>
        <span className="tag">{user.role}</span>
      </span>
      <span className="user-card-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
