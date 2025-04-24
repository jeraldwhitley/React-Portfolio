import Navigation from './Navigation';

export default function Header({ current, onNavClick }) {
  return (
    <header>
      <h1>Jerald Whitley, Jr.</h1>
      <Navigation current={current} onNavClick={onNavClick} />
    </header>
  );
}