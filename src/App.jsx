import React from 'react';
import './App.css';
import MainPage from './store/Pages/MainPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './store/Components/Navbar';
import MobilePage from './store/Pages/MobilePage';
import MenPage from './store/Pages/MenPage';
import WomenPage from './store/Pages/WomenPage';
import AcPage from './store/Pages/AcPage';
import FridgePage from './store/Pages/FridgePage';
import TvPage from './store/Pages/TvPage';
import KItchenPage from './store/Pages/KItchenPage';
import ComputersPage from './store/Pages/Computers';
import WatchPage from './store/Pages/watchPage';
import SpeakerPage from './store/Pages/SpeakerPage';
import MobileSingle from './store/SinglePages/MobileSingle';
import AcSingle from './store/SinglePages/ACsingle';
import ComputersSingle from './store/SinglePages/ComputersSingle';
import FridgeSingle from './store/SinglePages/FridgeSingle';
import KitchenSingle from './store/SinglePages/KitchenSingle';
import Men from './store/Components/Men';
import MenSingle from './store/SinglePages/MenSingle';
import WomanSingle from './store/SinglePages/WomanSingle';
import SpeakerSingle from './store/SinglePages/SpeakerSingle';
import WatchSingle from './store/SinglePages/WatchSingle';
import TvSingle from './store/SinglePages/TvSingle';
import UserCart from './store/UserCart';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/mobile',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><MobilePage /></>,
    },
    {
      path: '/mens',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><MenPage /></>,
    },
    {
      path: '/womens',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><WomenPage /></>,
    },
    {
      path: '/ac',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><AcPage /></>,
    },
    {
      path: '/fridges',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><FridgePage /></>,
    },
    {
      path: '/tv',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><TvPage /></>,
    },
    {
      path: '/kitchen',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><KItchenPage /></>,
    },
    {
      path: '/laptops',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><ComputersPage /></>,
    },
    {
      path: '/watches',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><WatchPage /></>,
    },
    {
      path: '/speakers',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><SpeakerPage /></>,
    },
    {
      path: '/mobile/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><MobileSingle /></>,
    },
    {
      path: '/ac/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><AcSingle /></>,
    },
    {
      path: '/computers/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><ComputersSingle /></>,
    },
    {
      path: '/kitchen/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><KitchenSingle /></>,
    },
    {
      path: '/men/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><MenSingle /></>,
    },
    {
      path: '/woman/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><WomanSingle /></>,
    },
    {
      path: '/watch/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><WatchSingle /></>,
    },
    {
      path: '/fridge/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><FridgeSingle /></>,
    },
    {
      path: '/tv/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><TvSingle /></>,
    },
    {
      path: '/speaker/:id',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><SpeakerSingle /></>,
    },
    {
      path: '/cart',
      element: <><Navbar /><br /><br /><br /><br /><br /><br /><UserCart /></>,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
