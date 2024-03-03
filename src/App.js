import logo from './logo.svg';
import './App.css';
import WelcomeSection from './WelcomeSection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        CREATE THE LIFE YOU ENVISION
        </p>
      </header>
      <WelcomeSection />
    </div>
  );
}

export default App;
