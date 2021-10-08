<<<<<<< HEAD
import Navbar from './components/Navbar';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
=======
import Hobbies from './Hobbies';
>>>>>>> parent of 917f7fe (created, organized components directory)

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