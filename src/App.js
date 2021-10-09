import Navbar from './components/Navbar';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
//import * from './components/More';
import img from './images/Bo.jpg';

function App() {
    return (
      <div className='App'>
        <Navbar />
        <img className='pic' src={img} alt='2-day-extension pup' width = "300" />
        <div className='container'>
          <Education />
          <Hobbies />
         
        </div>
      </div>
    );
  }

export default App;