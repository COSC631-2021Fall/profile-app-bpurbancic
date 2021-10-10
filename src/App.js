import Navbar from './components/Navbar';
import img from './images/Bo.jpg';
import * as sections from './components/Sections';
import Skills from './components/skills';
import Experience from './components/experience';
import {BrowserRouter, Route} from "react-router-dom";
import {useState} from "react";


function App() {
    const themes=['white', 'blue', 'yellow'];
    const [themeID, setThemeID] = useState(0);
    const switchTheme = () => {
      setThemeID((id) => (id+1)%3);
    }

    return (
      <div style={{backgroundColor:themes[themeID]}}>
      <div className='App'>
        <div><button onClick={switchTheme}>Switch Theme</button></div>
        <Navbar />
        
        <BrowserRouter>
          <Route path="/skills">
            <Skills />
          </Route>
          
          <Route path="/experience">
            <Experience />
          </Route>
          
        </BrowserRouter>
        <img className='pic' src={img} alt='2-day-extension pup' width = "250" />
        <div className='container'>
          <sections.Education />
          <sections.Hobbies />
          <sections.Contact />
         
        </div>
        
      </div>
      </div>
    );
  }

export default App;