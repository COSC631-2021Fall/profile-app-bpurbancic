import Navbar from './components/Navbar';
import img from './images/Bo.jpg';
import * as sections from './components/Sections';


function App() {
    return (
      <div className='App'>
        <Navbar />
        <img className='pic' src={img} alt='2-day-extension pup' width = "250" />
        <div className='container'>
          <sections.Education />
          <sections.Hobbies />
          <sections.Contact />
         
        </div>
      </div>
    );
  }

export default App;