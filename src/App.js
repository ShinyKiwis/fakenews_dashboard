import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Medical_label from './pages/medical-label';
import Export from './pages/Export';
import Login from './pages/Login';
import News from './pages/News';
import {useEffect, useState} from "react"


function App() {
  const [auth, setAuth] = useState(false);

  useEffect(()=>{
    setAuth(sessionStorage.getItem("auth"))
  }, [])

  if(!auth){
    return <Login setAuth={setAuth}/>
  }
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <MainContent>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/med-label" element={<Medical_label />} />
          <Route path="/export" element={<Export />} />
        </Routes>
        </MainContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
