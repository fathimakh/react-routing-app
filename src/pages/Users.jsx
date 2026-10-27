import UserCard from '../components/UserCard.jsx';
import users from '../data/users.js';

export default function Users() {
  return (
    <>
      <title>Users · UserHub</title>

      <header className="page-header">
        <p className="eyebrow">Directory</p>
        <h1>Users</h1>
        <p className="lead">{users.length} people in the directory. Select anyone to open their profile.</p>
      </header>

      <ul className="user-grid">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
