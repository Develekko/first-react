import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Trending from './Movies/Trending/Trending';
import Movies from './Movies/Movies';
import NowPlaying from './Movies/NowPlaying/NowPlaying';
import TopRated from './Movies/TopRated/TopRated';
import Popular from './Movies/Popular/Popular';
import UpComing from './Movies/UpComing/UpComing';

const router = createBrowserRouter([
  {
    path: '/first-react', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'trending', element: <Trending /> },
      { path: 'movies', element: <Movies />,children:[
        { path: 'nowPlaying', element: <NowPlaying /> },
        { path: 'popular', element: <Popular /> },
        { path: 'topRated', element: <TopRated /> },
        { path: 'trending', element: <Trending /> },
        { path: 'upComing', element: <UpComing /> },
      ] },
      { path: '*', element: <Home /> }
    ]
  }
])
export default function App() {
  return <>
  <RouterProvider router={router} />
</>
}
