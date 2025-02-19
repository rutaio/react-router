import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutt">About</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
  );
};
