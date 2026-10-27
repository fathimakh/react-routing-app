import { useNavigate, useParams } from 'react-router-dom';
import Avatar from '../components/Avatar.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { getUserById } from '../data/users.js';

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getUserById(id);

  // Always return to the list, even if the profile was opened from a bookmark.
  const goBack = () => navigate('/users');

  const backButton = (
    <button type="button" className="btn btn-secondary" onClick={goBack}>
      <span aria-hidden="true">←</span> Go Back
    </button>
  );

  if (!user) {
    return (
      <>
        <title>User not found · UserHub</title>
        <EmptyState code="404" title="User not found" actions={backButton}>
          There is no user with the id <code>{id}</code>. They may have been removed, or the link is wrong.
        </EmptyState>
      </>
    );
  }

  const details = [
    { label: 'User ID', value: user.id },
    { label: 'Email', value: <a href={`mailto:${user.email}`}>{user.email}</a> },
    { label: 'Phone', value: user.phone },
    { label: 'Role', value: user.role },
    { label: 'Company', value: user.company },
    { label: 'Location', value: user.city },
  ];

  return (
    <>
      <title>{`${user.name} · UserHub`}</title>

      <div className="page-toolbar">{backButton}</div>

      <article className="card profile">
        <div className="profile-banner" />
        <header className="profile-header">
          <Avatar user={user} size="lg" />
          <div>
            <h1>{user.name}</h1>
            <p className="muted">
              {user.role} at {user.company}
            </p>
          </div>
        </header>

        <dl className="profile-details">
          {details.map(({ label, value }) => (
            <div key={label} className="profile-field">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </>
  );
}
