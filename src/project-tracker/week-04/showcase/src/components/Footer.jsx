// Footer.jsx
// =====================================================
// Project Tracker – Footer Component (Showcase)
// =====================================================
//
// Showcase Extension: An extracted footer component.
//
// Extracting the footer follows the same pattern as the Header.
// It keeps App.jsx shorter and makes it easy to update the
// footer text in one place.
//
// Props:
//   text – the footer text to display
//

function Footer({ text }) {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  )
}

export default Footer
