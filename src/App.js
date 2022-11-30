import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import MedicalLabel from './pages/medical-label';
import Export from './pages/Export';
import Login from './pages/Login';
import News from './pages/News';
import {useEffect, useState} from "react"
import axios from 'axios';


function App() {
  const [auth, setAuth] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1)

  async function fetchPosts(page) {
    const res = await axios.get(`https://doancnpmtest.herokuapp.com/posts/page/${page}`)
    setPosts([...posts, ...res.data])
  }
  useEffect(()=>{
    setAuth(sessionStorage.getItem("auth"))
    fetchPosts(page)
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
          <Route path="/med-label" element={<MedicalLabel posts={posts} fetchPosts={fetchPosts} page={page} setPage={setPage}/>} />
          <Route path="/export" element={<Export />} />
        </Routes>
        </MainContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
