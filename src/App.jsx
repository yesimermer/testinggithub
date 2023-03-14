
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Nav from './components/Nav';
import NoPage from './components/NoPage';
function App() {
  return (
    <div className="App">
          <Routes>
          <Route index element ={<Nav />} />
          <Route path ="/blogs" element ={<Blogs />} />
            <Route path ="/contact" element ={<Contact />} />
            <Route path ="*" element ={<NoPage />} />
          </Routes>
    </div >
  );
}
export default App;