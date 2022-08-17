import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


export const publicRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/contact',
    component: <Contact />,
  },
];
