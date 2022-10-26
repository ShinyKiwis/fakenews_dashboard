import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Medical_label from './pages/medical-label';
import Medicalnews_label from './pages/medical-news-label';
import News_label from './pages/news-label';
import Export from './pages/Export';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <SideBar />
      <MainContent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/med-label" element={<Medical_label />} />
            <Route path="/med-news-label" element={<Medicalnews_label />} />
            <Route path="/news-label" element={<News_label />} />
            <Route path="/export" element={<Export />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MainContent>
    </div>
  );
}

export default App;
