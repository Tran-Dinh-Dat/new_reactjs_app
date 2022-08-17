import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { publicRoutes } from './routers';
import PrimaryLayout from './layouts/PrimaryLayout';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        {publicRoutes.map(({ path, component }, index) => (
          <Route path={path} element={component} key={index} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
