import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Signup from './pages/Signup';
import Login from './pages/Login'
import Profile from './pages/Profile';

import './App.css';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<IsAnon><Signup /></IsAnon>} />
        <Route path="/login" element={<IsAnon><Login /></IsAnon>} />
        <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
