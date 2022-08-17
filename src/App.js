import './App.css';
import Header from './layouts/clients/Header';
import Footer from './layouts/clients/Footer';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
