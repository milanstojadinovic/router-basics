import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
