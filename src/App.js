import './App.css';
import Navbar from './components/routes/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <div className='main'>
          <h1>Main Content</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
