// Round badge with the user's initials. The colour is picked from the id,
// so a user looks the same on the list and on their detail page.
const COLORS = ['#4f46e5', '#db2777', '#0e7490', '#b45309', '#047857', '#7c3aed', '#dc2626', '#2563eb'];

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({ user, size = 'md' }) {
  return (
    <span
      className={`avatar avatar-${size}`}
      style={{ backgroundColor: COLORS[(user.id - 1) % COLORS.length] }}
      aria-hidden="true"
    >
      {getInitials(user.name)}
    </span>
  );
}
