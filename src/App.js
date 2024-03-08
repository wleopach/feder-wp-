import logo from './assets/logo.svg';
import './App.css';
import WelcomeSection from './WelcomeSection';
import Model from './Model';
import Conceptual from './Conceptual';
import Join from './Joining';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      
      
      <WelcomeSection/>

      <Model/>
      
      <Conceptual/>

      <Join/>

      <Contact/>

      
    </div>
  );
}

export default App;