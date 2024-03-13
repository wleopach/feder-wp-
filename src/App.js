import { BrowserRouter } from 'react-router-dom';
import logo from './assets/logo.svg';
import './App.css';
import Navbar from './Navbar';
import WelcomeSection from './WelcomeSection';
import Model from './Model';
import Conceptual from './Conceptual';
import Join from './Joining';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <BrowserRouter>
   
    <div className="relative z-0 ">
      <div>
        <Navbar/>
      </div>
      <div>
          <header className="App-header font-mova">
              <div className="logo-container"> {/* New container for logo */}
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
              CREATE THE LIFE YOU ENVISION
              </p>
            </header>
      </div>
      
      <div className="pb-10">
          <WelcomeSection/>
      </div>

      <div className="pb-10">
          <Model/>
      </div>

      <div className="pb-10">
          <Conceptual/>
      </div>

      <div className="pb-10">
          <Join/>
      </div>

    </div>

    <div className="relative z-0">
          <Contact />
        </div>
    </BrowserRouter>
    
      
      
    
  );
}

export default App;
