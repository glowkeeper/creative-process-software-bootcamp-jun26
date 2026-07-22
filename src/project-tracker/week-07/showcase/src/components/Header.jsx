import { NavLink } from 'react-router'

function Header() {
  return (
    <>
      <header>
        <h1>Project Tracker</h1>
        <p>Plan work, update tasks and track progress across your project board.</p>
      </header>
      <nav aria-label="Primary">
        <ul>
          <li><NavLink to="/" end>Dashboard</NavLink></li>
          <li><NavLink to="/summary">Summary</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
