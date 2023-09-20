import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Shop from './Shop/Shop.js';
import Home from './Home/Home';
import Contact from './component/Contact Us/Contact';
import Checkout from './component/Checkout/Checkout';
import { ShopProvider1 } from './component/ShopContext1';
import Details from './DetailsProducts/Details';
import About from './component/About/About';
<<<<<<< HEAD
import Adminproduct from './Admin/Adminproduct';
import Admin from './Admin/Admin';
=======
import Dashboard from './admin/Dashboard';

>>>>>>> 84d3c56a81161d28ffc96d6e1e9357c949328a1a
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/ContactUs',
    element: <Contact />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
  {
    path: '/detail/:id',
    element: <Details />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
<<<<<<< HEAD
    path: '/Adminproduct',
    element: <Adminproduct />,
  },
  {
    path: '/Admin',
    element: <Admin />,
=======
    path: '/admin',
    element: <Dashboard />,
>>>>>>> 84d3c56a81161d28ffc96d6e1e9357c949328a1a
  },
]);

const App = () => {
  return (
    <ShopProvider1>
      <RouterProvider router={router} />
    </ShopProvider1>
  );
};

export default App;
