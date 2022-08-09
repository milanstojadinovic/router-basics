import './App.css';
import Navbar from './components/routes/Navbar';
import Header from './components/UI/Header';

function App() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <Header className='main'>
          <h1>Main Content</h1>
        </Header>
      </div>
    </div>
  );
}

export default App;
