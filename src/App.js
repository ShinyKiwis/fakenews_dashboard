import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <SideBar /> 
      <MainContent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Dashboard />} />
            <Route path="/label" element={ <Dashboard />} />
          </Routes>
        </BrowserRouter> 
      </MainContent>
    </div>
  );
}

export default App;
