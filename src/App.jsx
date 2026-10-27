import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import UserDetail from './pages/UserDetail.jsx';
import Users from './pages/Users.jsx';

// All pages are children of <Layout>, so the shared shell is rendered once
// and only the page inside its <Outlet /> changes on navigation.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },             // /
      { path: 'about', element: <About /> },          // /about
      { path: 'users', element: <Users /> },          // /users
      { path: 'users/:id', element: <UserDetail /> }, // /users/:id
      { path: '*', element: <NotFound /> },           // any other URL -> 404 page
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
