import { HashRouter, Routes, Route  } from 'react-router-dom';
import logo from './assets/logo.svg';
import './App.css';
import Navbar from './Navbar';
import WelcomeSection from './WelcomeSection';
import Model from './Model';
import Conceptual from './Conceptual';
import Join from './Joining';
import Contact from './Contact';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles';
function App() {
  return (

    <HashRouter>
      <div>
        <Navbar/>
      </div>
     <Routes>
    
        {/* This route renders all your homepage content */}
      <Route path="/"  element={
        <>
                    <div className="relative z-0 ">
                      
                      <div>
                          <header className="App-header font-mova">
                              <div className="logo-container"> {/* New container for logo */}
                                <img src={logo} className="App-logo" alt="logo" />
                              </div>
                              <p className={`${styles.heroHeadText} ${styles.flexCenter}`}>
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
                          <Contact id="contact" />
                    </div>
      </>
        } />
      <Route path="/About" element={
        <>
        <div className="relative z-0 ">
                      
            <div className="pb-10">
                <About/>
            </div>
                      

        </div>

           </>
        } />
      </Routes>

    </HashRouter>
    
      
      
    
  );
}

export default App;
