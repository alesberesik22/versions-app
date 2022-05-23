import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Settings from './components/navbar/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
