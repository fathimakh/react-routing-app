// Shared "nothing here" card used by the 404 page and by the
// User Detail page when the id in the URL does not match any user.
export default function EmptyState({ code, title, children, actions }) {
  return (
    <section className="card empty-state">
      <p className="empty-state-code">{code}</p>
      <h1>{title}</h1>
      <p className="muted">{children}</p>
      <div className="actions">{actions}</div>
    </section>
  );
}
