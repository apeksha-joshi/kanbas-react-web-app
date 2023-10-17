// import logo from './logo.svg';
import './App.css';
import Kanbas from './Kanbas';
import Labs from './Labs';
import HellowWorld from './Labs/a3/HelloWorld';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HellowWorld/>} />
          <Route path="/Labs/*" element={<Labs/>} />
          <Route path="/Kanbas/*" element={<Kanbas/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
