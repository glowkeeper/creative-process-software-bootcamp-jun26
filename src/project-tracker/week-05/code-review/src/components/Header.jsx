// Header.jsx
// =====================================================
// Project Tracker – Header Component
// =====================================================
//
// Guided Build Part 2: Create a Header component
//
// A component is a JavaScript function that returns JSX.
// We define it here and export it so App.jsx can import and use it.
//
// This Header renders the page title, description, and navigation.
// Navigation links use page anchors (#board, #summary, #about)
// so the page scrolls to each section. No router is needed.
//
// When we write <Header /> in App.jsx, React calls this function
// and renders whatever it returns.
//

function Header() {
  return (
    <>
      <header>
        <h1>Project Tracker</h1>
        <p>Plan work clearly and track progress across your project board.</p>
      </header>
      <nav aria-label="Primary">
        <ul>
          <li><a href="#board">Board</a></li>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
