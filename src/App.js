import { BrowserRouter } from 'react-router-dom';
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

    <BrowserRouter>
    <div className="relative z-0 app">
      <div className="bg-about bg-cover bg-center bg-no-repeat">
          <header className="App-header">
              <div className="logo-container"> {/* New container for logo */}
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
              CREATE THE LIFE YOU ENVISION
              </p>
            </header>
      </div>
      
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <WelcomeSection/>
      </div>

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Model/>
      </div>

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Conceptual/>
      </div>

          <Join/>

    </div>

    <div className="relative z-0">
          <Contact />
        </div>
    </BrowserRouter>
    
      
      
    
  );
}

export default App;
