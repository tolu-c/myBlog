import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import PageNotFound from './pages/PageNotFound'

// components
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <Nav />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article-list" element={<ArticleList />} />
            <Route path="article/:name" element={<Article />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
