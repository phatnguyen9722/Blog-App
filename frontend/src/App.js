import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Login from "./pages/Login"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <h1>Home page</h1>
          <Link to="about">About Us</Link>
          <Footer/>
        </div>
      ),
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
