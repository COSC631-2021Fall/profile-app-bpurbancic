import Navbar from './components/Navbar';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import img from './images/pic.jpg';

function App() {
    return (
      <div className='App'>
        <Navbar />
        <img className='pic' src={img} alt='pic' />
        <div className='container'>
          <Education />
          <Hobbies />
        </div>
      </div>
    );
  }

export default App;