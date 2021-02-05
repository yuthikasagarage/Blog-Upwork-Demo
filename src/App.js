import './App.scss';
import Navbar from './components/Navbar';
import BlogProvider from './context/blogProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
function App() {
  return (
    <BlogProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post} />
          </Switch>
        </BrowserRouter>
      </div>
    </BlogProvider>
  );
}

export default App;
