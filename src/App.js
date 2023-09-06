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
]);

const App = () => {
  return (
    <ShopProvider1>
      <RouterProvider router={router} />
    </ShopProvider1>
  );
};

export default App;
