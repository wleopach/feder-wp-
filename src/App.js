import logo from './logo.svg';
import './App.css';
import WelcomeSection from './WelcomeSection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container"> {/* New container for logo */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
        CREATE THE LIFE YOU ENVISION
        </p>
      </header>
      <WelcomeSection />
    </div>
  );
}

export default App;
