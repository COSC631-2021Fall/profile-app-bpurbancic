import Navbar from './components/Navbar';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

function App() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Education />
          <Hobbies />
        </div>
      </div>
    );
  }

export default App;