import './css/Navigation.css';

const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

export default function Navigation({ current, onNavClick }) {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        {sections.map(section => (
          <li key={section}>
            <button
              onClick={() => onNavClick(section)}
              className={`nav-button ${current === section ? 'active' : ''}`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
