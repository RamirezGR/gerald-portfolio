import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home"
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function AppLayout() {
  return (
     <>
      <Navbar />
      <Outlet />
    </>
  );
}

const App = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:
          <>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
          </>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/experience",
        element:<Experience/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
    ],
  },
]);

export default App;