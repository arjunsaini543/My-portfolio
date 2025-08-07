import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home.jsx";
import Contact from "../Components/Contact.jsx";
import Projects from "../Components/Projects.jsx";
import Feedback from "../Components/Feedback.jsx";
import About from "../Pages/About.jsx";
import Skills from "../Pages/Skills.jsx";
import Modal from "../Components/Modal.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Feedback", element: <Feedback /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Skills", element: <Skills /> },
      { path: "/About", element: <About /> },
      { path: "/pop-up", element: <Modal /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
