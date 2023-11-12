import './App.css';
import Navbar from './components/Navbar';
import Employee from './components/Employee';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
