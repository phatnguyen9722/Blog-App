import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Single from './pages/Single'
import Write from "./pages/Write"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/write",
          element: <Write />
        },
        {
          path: "/post/:id",
          element: <Single />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
