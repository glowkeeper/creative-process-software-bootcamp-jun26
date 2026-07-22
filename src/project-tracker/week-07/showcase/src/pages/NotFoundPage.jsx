import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="page-section">
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return to the dashboard</Link>
    </section>
  )
}

export default NotFoundPage
